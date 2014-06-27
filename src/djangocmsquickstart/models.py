'''
Created on Jun 24, 2014

@author: lmalave
'''
from django.db import models
from django.core.files.storage import FileSystemStorage 
from djangocmsquickstart.google_cloud_storage import GoogleCloudStorage
from cms.models import CMSPlugin
from google.appengine.ext import blobstore
from google.appengine.api import images

file_storage = GoogleCloudStorage()
image_path = '/images'

class FlashPluginModel(CMSPlugin):
    flash_file = models.FileField(storage=file_storage,upload_to=image_path,null=True,default=None)
    def file_url(self): 
        return images.get_serving_url(blobstore.create_gs_key('/gs'+self.flash_file.name))
    def __unicode__(self): 
        return 'Flash:'+str(self.pk)

class Product(models.Model):
    name = models.CharField(max_length=200,default=None)
    description = models.TextField(max_length=1000,default=None)
    image = models.FileField(storage=file_storage,upload_to=image_path,null=True,default=None)
    def image_url(self): 
        return images.get_serving_url(blobstore.create_gs_key('/gs'+self.image.name))
    def __unicode__(self): 
        return self.name

class ProductFeaturePluginModel(CMSPlugin):
    product = models.ForeignKey(Product, related_name='product_feature_plugins',null=True,default=None)
    def __unicode__(self): 
        return 'ProductFeature:'+str(self.pk)

class ProductGridPluginModel(CMSPlugin):
    def __unicode__(self): 
        return 'ProductGridPluginModel:'+str(self.pk)

class PromoPluginModel(CMSPlugin):
    heading = models.CharField(max_length=200,null=True,default=None)
    description = models.TextField(max_length=1000,null=True,default=None)
    image = models.FileField(storage=file_storage,upload_to=image_path,null=True,default=None)
    def __unicode__(self): 
        return 'PromoPluginModel:'+str(self.pk)

class TwoColumnContainerPluginModel(CMSPlugin):
    heading = models.CharField(max_length=200,null=True,default=None)
    def __unicode__(self): 
        return 'TwoColumnContainerPlugin:'+str(self.pk)
