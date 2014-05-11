'''
Created on 10-May-2014

@author: srivatsanmohan
'''
import webapp2
import jinja2
import os
from google.appengine.ext.webapp import template
import logging
from common.HTTPClient import HTTPClient_GAE
import json
import sys
from google.appengine.ext import db
from db.Models import School, District, NGOPartner, Teacher, Chapters,\
    ChapterClassTrack, ClassIndicator

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class RootHandler(webapp2.RequestHandler):
    def get(self):
        user_dict = {}
        #self.render('/index_new.html', user_dict)
        template = JINJA_ENVIRONMENT.get_template('templates/index.html')
        self.response.write(template.render(user_dict))


class GenericHandler(webapp2.RequestHandler):
    def get(self):
        user_dict = {}
        #self.render('/index_new.html', user_dict)
        page_to_be_displayed = self.request.route.name
        template = JINJA_ENVIRONMENT.get_template('templates/'+page_to_be_displayed)
        self.response.write(template.render(user_dict))

class GenericNonJinjaHandler(webapp2.RequestHandler):
    def get(self):
        user_dict = {}
        page_to_be_displayed = self.request.route.name
        logging.info("os path dirname: "+str(os.path.dirname(__file__)))
        #path = os.path.join(os.path.dirname(__file__)+"/templates/", page_to_be_displayed)
        #self.response.write(template.load(path))
        path = os.path.join(os.path.split(__file__)[0], "templates/"+page_to_be_displayed)
        self.response.out.write(open(path).read())
        
from traceback import format_tb
import sys

def format_exception(etype, value, tb, limit):
    list = ['Traceback (most recent call last):\n']
    list = list + format_tb(tb, limit)
    return list


def formatException():
    try:
        etype, value, tb = sys.exc_info()
        return ''.join(format_exception(etype, value, tb, None))
    except:
        return "Unable to format exception. Irony"


def import_class(cl):
    d = cl.rfind(".")
    classname = cl[d+1:len(cl)]
    m = __import__(cl[0:d], globals(), locals(), [classname])
    return getattr(m, classname)

class LoadStaticDataHandler(webapp2.RequestHandler):
    def get(self):
        batch_id = self.request.get('batch_id')
        response_str = "Failure"
        try:
            resource_name = self.request.get('resource_name')
            _res = HTTPClient_GAE().doGET("http://localhost:8082/data/"+resource_name)
            _data_json_str = _res.content
            _data_json = json.loads(_data_json_str)
            batch_data = _data_json[batch_id]
            data_processed = 0
            total_data = 0 
            if( batch_data != None ):
                total_data = batch_data.__len__()
                for data in batch_data:
                    try:
                        model_class = import_class("db.Models."+batch_id)()
                        logging.info("data : "+str(data))
                        for k in data :
                            v = data[k]
                            if( k == "school_district"):
                                v = District.all().filter("district_name = ", v).get()
                            elif( k == "school"):
                                v = School.all().filter("school_name = ", v).get()
                            elif( k == "ngo_partner"):
                                v = NGOPartner.all().filter("ngo_partner_name = ", v).get()
                            elif( k == "teacher"):
                                v = Teacher.all().filter("teacher_name = ", v).get()
                            elif ( k == "related_chapter" ):
                                v = Chapters.all().filter("chapter_id = ", v).get()
                            elif ( k == "related_class"):
                                v = ClassIndicator.all().filter("class_name = ", v).get()
                            
                            setattr(model_class, k, v)
                        model_class.put()
                        data_processed = data_processed + 1
                    except:
                        logging.error("Some Exception in LoadStaticDataHandler user_route_id: "+str(sys.exc_type)+" | "+str(sys.exc_info())+" | "+str(formatException()));
                response_str = "Done with LoadStaticDataHandler Result: batch id: %s | total : %s | Success: %s " %(batch_id, total_data, data_processed)
                
        except:
            logging.error("Some Exception in LoadStaticDataHandler: "+str(sys.exc_type)+" | "+str(sys.exc_info())+" | "+str(formatException()));
        logging.info(response_str);
        self.response.out.write(response_str)
        
class GetUserDataAfterFilter(webapp2.RequestHandler):
    def get(self):
        jsonResponse = {"status":"failed"}
        all_schools = School.all().fetch(100)
        all_school_data = []
        for school in all_schools:
            try:
                progress = "BAD"
                progress_score = (school.average_final_score - school.average_baseline_score ) / school.average_final_score
                if(  progress_score > 2):
                    progress = "GOOD"
                elif(progress_score > 1):
                    progress = "AVERAGE"
                all_school_data.append({"id" : str(school.key()), 
                                    "school_name": school.school_name, 
                                    "school_lat" : school.school_lat, 
                                    "school_long" : school.school_long, 
                                    "average_baseline_score": school.average_baseline_score,
                                    "average_final_score" : school.average_final_score, 
                                    "progress_rating" :  progress})
            except:
                logging.error("Some Exception in GetUserDataAfterFilter: "+str(sys.exc_type)+" | "+str(sys.exc_info())+" | "+str(formatException()));
        jsonResponse['all_school_data'] = all_school_data
        all_chapter_class_track = ChapterClassTrack.all().fetch(100)
        all_chapter_class_track_data = []
        teacher_ngo_partner_names = []
        chapter_names = []
        for chapter_class_track in all_chapter_class_track:
            progress = "BAD"
            progress_score = (chapter_class_track.average_final_score - chapter_class_track.average_baseline_score ) / chapter_class_track.average_final_score
            if(  progress_score > 2):
                progress = "GOOD"
            elif(progress_score > 1):
                progress = "AVERAGE"
            try:
                rep = {"teacher": chapter_class_track.related_class.teacher.teacher_name, 
                                                  "ngo_partner": chapter_class_track.related_class.teacher.ngo_partner.ngo_partner_name}
                if not rep in teacher_ngo_partner_names: 
                    teacher_ngo_partner_names.append(rep)
                if not chapter_class_track.related_chapter.chapter_name in chapter_names:
                    chapter_names.append( chapter_class_track.related_chapter.chapter_name)
                all_chapter_class_track_data.append({"id" : str(chapter_class_track.key()),
                                    "related_teacher" : chapter_class_track.related_class.teacher.teacher_name,
                                    "related_ngo_partner" : chapter_class_track.related_class.teacher.ngo_partner.ngo_partner_name,
                                    "related_chapter_name": chapter_class_track.related_chapter.chapter_name, 
                                    "average_baseline_score": chapter_class_track.average_baseline_score,
                                    "average_final_score" : chapter_class_track.average_final_score, 
                                    "progress_score" : progress_score })
            except:
                logging.error("Some Exception in GetUserDataAfterFilter: "+str(sys.exc_type)+" | "+str(sys.exc_info())+" | "+str(formatException()));
        
        '''table_worthy_data = {}
        for track in all_chapter_class_track_data:
            related_chapter_name = track['related_chapter_name']
            if( not related_chapter_name in table_worthy_data):
                table_worthy_data[related_chapter_name] = {}
            related_teacher = track["related_teacher"]
            if( not related_teacher in table_worthy_data[related_chapter_name] ):
                table_worthy_data[related_chapter_name][related_teacher] = {}
            table_worthy_data[related_chapter_name][related_teacher] = table_worthy_data
        
        jsonResponse['table_worthy_data'] = table_worthy_data'''
        jsonResponse['all_chapter_class_track_data'] = all_chapter_class_track_data
        jsonResponse['teacher_ngo_partner_names'] = teacher_ngo_partner_names
        jsonResponse['chapter_names'] = chapter_names
        jsonResponse['status'] = 'success'
        response_str = json.dumps(jsonResponse)
        logging.info(response_str);
        self.response.out.write(response_str)

class GetFilterDataForReporting(webapp2.RequestHandler):
    def get(self):
        jsonResponse = {"status":"failed"}
        all_districts = District.all().fetch(100)
        all_districts_json = []
        for district in all_districts:
            all_districts_json.append({ "id": str(district.key()), 
                                       "district_name" : str(district.district_name)
                                       })
        all_schools = School.all().fetch(100)
        all_schools_json = []
        for school in all_schools:
            all_schools_json.append({"id" : str(school.key()), 
                                     "school_name" : str(school.school_name)
                                     })
        all_teachers = Teacher.all().fetch(100)
        all_teachers_json = []
        for teacher in all_teachers:
            all_teachers_json.append({"id" : str(teacher.key()), 
                                     "teacher_name" : str(teacher.teacher_name)
                                     })
        all_ngo_partners = NGOPartner.all().fetch(100)
        all_ngo_partners_json = []
        for ngo_partner in all_ngo_partners:
            all_ngo_partners_json.append({"id" : str(ngo_partner.key()), 
                                     "ngo_partner_name" : str(ngo_partner.ngo_partner_name)
                                     })
        jsonResponse['all_districts_json'] = all_districts_json
        jsonResponse['all_schools_json'] = all_schools_json
        jsonResponse['all_teachers_json'] = all_teachers_json
        jsonResponse['all_ngo_partners_json'] = all_ngo_partners_json
        jsonResponse['status'] = 'success'
        response_str = json.dumps(jsonResponse)
        logging.info(response_str);
        self.response.out.write(response_str)