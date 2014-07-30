'''
Created on Jun 24, 2014

@author: lmalave
'''
from django.db import models
from storage import GoogleCloudStorage
from cms.models import CMSPlugin
from google.appengine.ext import blobstore
from google.appengine.api import images
from cms.models import fields

file_storage = GoogleCloudStorage()
image_path = '/djangocmsquickstart'

# Core models

class Product(models.Model):
    name = models.CharField(max_length=200,default=None)
    description = models.TextField(max_length=1000,default=None)
    image = models.FileField(storage=file_storage,upload_to=image_path,null=True,default=None)
    def __unicode__(self): 
        return self.name


#Plugin models

class FlashPluginModel(CMSPlugin):
    flash_file = models.FileField(storage=file_storage,upload_to=image_path,null=True,default=None)
    def file_url(self): 
        return images.get_serving_url(blobstore.create_gs_key('/gs'+self.flash_file.name))
    def __unicode__(self): 
        return 'file:'+self.flash_file.name

class ProductFeaturePluginModel(CMSPlugin):
    product = models.ForeignKey(Product,null=True,default=None)
    product_page = fields.PageField(null=True,default=None)
    def __unicode__(self): 
        return 'Product:'+str(self.product)

class ProductGridPluginModel(CMSPlugin):
    def __unicode__(self): 
        return 'ProductGridPluginModel:'+str(self.pk)

class PromoPluginModel(CMSPlugin):
    heading = models.CharField(max_length=200,null=True,default=None)
    description = models.TextField(max_length=1000,null=True,default=None)
    image = models.FileField(storage=file_storage,upload_to=image_path,null=True,default=None)
    def __unicode__(self): 
        return 'heading:'+self.heading[0:5]

class TwoColumnContainerPluginModel(CMSPlugin):
    heading = models.CharField(max_length=200,null=True,default=None)
    def __unicode__(self): 
        return 'heading:'+self.heading
