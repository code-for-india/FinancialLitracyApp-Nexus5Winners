'''
Created on 15-Sep-2013

@author: Srivatsan
'''

class HTTPClientException(Exception):
    def __init__(self, errorCode, errorMessage = None):
        self.errorCode = errorCode
        self.errorMessage = errorMessage
