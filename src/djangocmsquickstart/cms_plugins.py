'''
Created on Nov 12, 2013

@author: lmalave
'''

from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
import models
from django.utils.translation import ugettext as _

class FlashPlugin(CMSPluginBase):
    model = models.FlashPluginModel # Model where data about this plugin is saved
    name = _("Flash") # Name of the plugin
    render_template = "components/geometrixx_flash_plugin.html" # template to render the plugin with
    def render(self, context, instance, placeholder): 
        context.update({'instance':instance})
        return context

class ProductFeaturePlugin(CMSPluginBase):
    model = models.ProductFeaturePluginModel # Model where data about this plugin is saved
    name = _("Product Feature") # Name of the plugin
    render_template = "components/geometrixx_product_feature.html" # template to render the plugin with
    def render(self, context, instance, placeholder): 
        context.update({'instance':instance})
        return context

class ProductGridPlugin(CMSPluginBase):
    model = models.ProductGridPluginModel # Model where data about this plugin is saved
    name = _("Product Grid") # Name of the plugin
    render_template = "components/geometrixx_product_grid_plugin.html" # template to render the plugin with
    def render(self, context, instance, placeholder): 
        context.update({'instance':instance})
        return context

class PromoPlugin(CMSPluginBase):
    model = models.PromoPluginModel # Model where data about this plugin is saved
    name = _("Promo") # Name of the plugin
    render_template = "components/geometrixx_promo.html" # template to render the plugin with
    def render(self, context, instance, placeholder): 
        context.update({'instance':instance})
        return context

class TwoColumnContainerPlugin(CMSPluginBase):
    model = models.TwoColumnContainerPluginModel # Model where data about this plugin is saved
    name = _("Two Column Container") # Name of the plugin
    render_template = "components/geometrixx_2_column_container.html" # template to render the plugin with
    allow_children = True  # This enables the parent plugin to accept child plugins
    def render(self, context, instance, placeholder): 
        context.update({'instance':instance})
        return context

plugin_pool.register_plugin(FlashPlugin) # register the plugin
plugin_pool.register_plugin(ProductFeaturePlugin) # register the plugin
plugin_pool.register_plugin(ProductGridPlugin) # register the plugin
plugin_pool.register_plugin(PromoPlugin) # register the plugin
plugin_pool.register_plugin(TwoColumnContainerPlugin) # register the plugin
