'''
Created on Jul 29, 2014

@author: lmalave
'''
import webapp2

class AdminDisable(webapp2.RequestHandler):
    def get(self):
        self.abort(404)

application = webapp2.WSGIApplication([
    (r'/admin.*', AdminDisable),
], debug=True)