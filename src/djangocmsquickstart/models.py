'''
Created on Jun 24, 2014

@author: lmalave
'''
from django.db import models
from django.core.files.storage import FileSystemStorage 
from djangocmsquickstart.google_cloud_storage import GoogleCloudStorage
from cms.models import CMSPlugin

import os
if (os.getenv('SERVER_SOFTWARE', '').startswith('Google App Engine') or
    os.getenv('SETTINGS_MODE') == 'prod'):
    file_storage = GoogleCloudStorage()
    #wedding_site_path = '/weddingsiteimages'
    #world_region_path = '/worldregionimages'
else:
    file_storage = FileSystemStorage()
    #file_storage = GoogleCloudStorage()
    #wedding_site_path = 'weddingsiteimages'
    #world_region_path = 'worldregionimages'

class FlashPluginModel(CMSPlugin):
    def __unicode__(self): 
        return 'FlashPluginModel:'+str(self.pk)

class ProductFeaturePluginModel(CMSPlugin):
    def __unicode__(self): 
        return 'ProductFeaturePluginModel:'+str(self.pk)

class ProductGridPluginModel(CMSPlugin):
    def __unicode__(self): 
        return 'ProductGridPluginModel:'+str(self.pk)

class PromoPluginModel(CMSPlugin):
    def __unicode__(self): 
        return 'PromoPluginModel:'+str(self.pk)

class TwoColumnContainerPluginModel(CMSPlugin):
    def __unicode__(self): 
        return 'TwoColumnContainerPlugin:'+str(self.pk)
