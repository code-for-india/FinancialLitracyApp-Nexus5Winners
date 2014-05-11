# -*- coding: utf-8 -*-
import sys

from webapp2 import WSGIApplication, Route
import logging


# inject './lib' dir in the path so that we can simply do "import ndb" 
# or whatever there's in the app lib dir.
if 'lib' not in sys.path:
    sys.path[0:0] = ['lib']

# webapp2 config
app_config = {
  'webapp2_extras.sessions': {
    'cookie_name': '_simpleauth_sess',
    'secret_key': None, 
  },
  'webapp2_extras.auth': {
    'user_attributes': []
  }
}


# Map URLs to handlers
routes = [
  Route('/', handler='MainHandler.RootHandler', name="home_page"),
  Route('/loadStaticData', handler='MainHandler.LoadStaticDataHandler', name="loadStaticData"),
  Route('/dashboard.html', handler='MainHandler.GenericNonJinjaHandler', name="dashboard.html"),
  Route('/lesson8.html', handler='MainHandler.GenericNonJinjaHandler', name="lesson8.html"),
  Route('/reporting.html', handler='MainHandler.GenericNonJinjaHandler', name="reporting.html"),
  Route('/getFilterData', handler='MainHandler.GetFilterDataForReporting', name="getFilterData"),
  Route('/getUserDataAfterFilter', handler='MainHandler.GetUserDataAfterFilter', name="getUserDataAfterFilter"),
]

application = WSGIApplication(routes, config=app_config, debug=True)

