from google.appengine.api import urlfetch
from httplib import HTTPSConnection, HTTPException, HTTPConnection
import httplib
import logging #from common import ridingo_logging as logging
from common.HTTPClientException import HTTPClientException


httplib.HTTPConnection.debuglevel = 1

class HTTPClient_GAE:
    def doGET(self, endPoint, reqHeaders = {}):
        result = urlfetch.fetch(
                  url=endPoint, 
                  method=urlfetch.GET,
                  headers= reqHeaders
                )
        if result.status_code == 200:
            return result
        else:
            logging.info(result.content)
            raise HTTPClientException(result.status_code, result.content);
    
    def doPOST(self, endPoint, body, reqHeaders = {}):
        if( body != None):
            reqHeaders["Content-Length"]=str(body.__len__())
        result = urlfetch.fetch(
                  url=endPoint, 
                  method=urlfetch.POST,
                  payload=body,
                  headers= reqHeaders
                )
        if result.status_code >= 200 and result.status_code <= 203:
            return result
        else:
            logging.info(result.content)
            raise HTTPClientException(result.status_code, result.content);
"""
class HTTPClientClass_UsingRequests:
    def __init__(self, useProxy=False, proxyHost="", proxyPort=8080, headers={}):
        proxy = proxyHost+":"+str(proxyPort)
        if( useProxy == True):
            self.proxyDict = { 
                  "http"  : proxy, 
                  "https" : proxy, 
                }
            log.debug("Going to set Web proxy "+proxy)
        else:
            self.proxyDict = {}
        self.headers = headers
        
    def doGET(self, endPoint):
        response = requests.get(endPoint, headers=self.headers, proxies=self.proxyDict, verify=False)
        if( response.status_code < 202 ):
            return response
        else:
            log.debug(response.content)
            raise HTTPClientException(response.status_code);
       
    def doPOST(self, endPoint, content):
        response = requests.post(endPoint, data=content, headers=self.headers, proxies=self.proxyDict, verify=False)
        if( response != None):
            if( response.status_code <= 202 ):
                return response
            else:
                log.debug(response.content)
                raise HTTPClientException(response.status_code);
        else:
            log.debug("Response was None")
 
    def head(self, endPoint):
        response = requests.head(endPoint, headers=self.headers, proxies=self.proxyDict) 
        if( response.status_code < 202 ):
            return response
        else:
            log.debug(response.content)
            print response.status_code
            raise HTTPClientException(response.status_code);"""