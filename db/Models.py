'''
Created on 10-May-2014

@author: srivatsanmohan
'''
from google.appengine.ext import db

class District(db.Model):
    district_name = db.StringProperty()

class School(db.Model):
    school_name = db.StringProperty()
    school_district = db.Reference(reference_class = District)
    school_lat = db.FloatProperty()
    school_long = db.FloatProperty()
    average_baseline_score = db.IntegerProperty()
    average_final_score = db.IntegerProperty()

class NGOPartner(db.Model):
    ngo_partner_name = db.StringProperty()

class Teacher(db.Model):
    teacher_name = db.StringProperty()
    school = db.Reference(reference_class = School)
    ngo_partner = db.Reference(reference_class=NGOPartner)

class ClassIndicator(db.Model):
    class_name = db.StringProperty()
    school = db.Reference(reference_class = School)
    teacher = db.Reference(reference_class = Teacher)
    
class Chapters(db.Model):
    chapter_id = db.StringProperty()
    chapter_name = db.StringProperty()
    
class ChapterClassTrack(db.Model):
    related_class = db.Reference(reference_class = ClassIndicator)
    related_chapter = db.Reference(reference_class = Chapters)
    average_baseline_score = db.IntegerProperty()
    average_final_score = db.IntegerProperty()
    
    
class Student(db.Model):
    student_name = db.StringProperty()
    roll_no = db.StringProperty()
    school = db.ReferenceProperty(reference_class=School)
    class_indicator = db.Reference(reference_class = ClassIndicator)
    total_score = db.IntegerProperty()
    ranking = db.IntegerProperty()
    baseline_score = db.IntegerProperty()
    final_score = db.IntegerProperty()

class ChapterLevelTrack(db.Model):
    student = db.Reference(reference_class = Student)
    start_time = db.DateTimeProperty()
    last_access_time = db.DateTimeProperty()
    is_complete = db.BooleanProperty()
    level_id = db.IntegerProperty()
    level_secondary_indicator = db.IntegerProperty()
    
    
class ChapterTrack(db.Model):
    student = db.Reference(reference_class = Student)
    class_indicator = db.Reference(reference_class = ClassIndicator)
    related_chapter = db.Reference(reference_class = Chapters)
    start_time = db.DateTimeProperty()
    last_access_time = db.DateTimeProperty()
    is_complete = db.BooleanProperty()
    max_level = db.Reference(reference_class = ChapterLevelTrack)
    attempts = db.IntegerProperty()
    baseline_score = db.IntegerProperty()
    final_score = db.IntegerProperty()
    
