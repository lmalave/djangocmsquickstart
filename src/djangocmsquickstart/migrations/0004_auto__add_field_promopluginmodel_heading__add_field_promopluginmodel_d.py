# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'PromoPluginModel.heading'
        db.add_column(u'djangocmsquickstart_promopluginmodel', 'heading',
                      self.gf('django.db.models.fields.CharField')(default=None, max_length=200, null=True),
                      keep_default=False)

        # Adding field 'PromoPluginModel.description'
        db.add_column(u'djangocmsquickstart_promopluginmodel', 'description',
                      self.gf('django.db.models.fields.TextField')(default=None, max_length=1000, null=True),
                      keep_default=False)

        # Adding field 'PromoPluginModel.image'
        db.add_column(u'djangocmsquickstart_promopluginmodel', 'image',
                      self.gf('django.db.models.fields.files.FileField')(default=None, max_length=100, null=True),
                      keep_default=False)

        # Adding field 'TwoColumnContainerPluginModel.heading'
        db.add_column(u'djangocmsquickstart_twocolumncontainerpluginmodel', 'heading',
                      self.gf('django.db.models.fields.CharField')(default=None, max_length=200, null=True),
                      keep_default=False)

        # Adding field 'FlashPluginModel.flash_file'
        db.add_column(u'djangocmsquickstart_flashpluginmodel', 'flash_file',
                      self.gf('django.db.models.fields.files.FileField')(default=None, max_length=100, null=True),
                      keep_default=False)


        # Changing field 'Product.description'
        db.alter_column(u'djangocmsquickstart_product', 'description', self.gf('django.db.models.fields.TextField')(max_length=1000))

    def backwards(self, orm):
        # Deleting field 'PromoPluginModel.heading'
        db.delete_column(u'djangocmsquickstart_promopluginmodel', 'heading')

        # Deleting field 'PromoPluginModel.description'
        db.delete_column(u'djangocmsquickstart_promopluginmodel', 'description')

        # Deleting field 'PromoPluginModel.image'
        db.delete_column(u'djangocmsquickstart_promopluginmodel', 'image')

        # Deleting field 'TwoColumnContainerPluginModel.heading'
        db.delete_column(u'djangocmsquickstart_twocolumncontainerpluginmodel', 'heading')

        # Deleting field 'FlashPluginModel.flash_file'
        db.delete_column(u'djangocmsquickstart_flashpluginmodel', 'flash_file')


        # Changing field 'Product.description'
        db.alter_column(u'djangocmsquickstart_product', 'description', self.gf('django.db.models.fields.CharField')(max_length=200))

    models = {
        'cms.cmsplugin': {
            'Meta': {'object_name': 'CMSPlugin'},
            'changed_date': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'creation_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'language': ('django.db.models.fields.CharField', [], {'max_length': '15', 'db_index': 'True'}),
            'level': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'lft': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'parent': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['cms.CMSPlugin']", 'null': 'True', 'blank': 'True'}),
            'placeholder': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['cms.Placeholder']", 'null': 'True'}),
            'plugin_type': ('django.db.models.fields.CharField', [], {'max_length': '50', 'db_index': 'True'}),
            'position': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True', 'blank': 'True'}),
            'rght': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'tree_id': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'})
        },
        'cms.placeholder': {
            'Meta': {'object_name': 'Placeholder'},
            'default_width': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'slot': ('django.db.models.fields.CharField', [], {'max_length': '50', 'db_index': 'True'})
        },
        u'djangocmsquickstart.flashpluginmodel': {
            'Meta': {'object_name': 'FlashPluginModel', '_ormbases': ['cms.CMSPlugin']},
            u'cmsplugin_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['cms.CMSPlugin']", 'unique': 'True', 'primary_key': 'True'}),
            'flash_file': ('django.db.models.fields.files.FileField', [], {'default': 'None', 'max_length': '100', 'null': 'True'})
        },
        u'djangocmsquickstart.product': {
            'Meta': {'object_name': 'Product'},
            'description': ('django.db.models.fields.TextField', [], {'default': 'None', 'max_length': '1000'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.FileField', [], {'default': 'None', 'max_length': '100', 'null': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': 'None', 'max_length': '200'})
        },
        u'djangocmsquickstart.productfeaturepluginmodel': {
            'Meta': {'object_name': 'ProductFeaturePluginModel', '_ormbases': ['cms.CMSPlugin']},
            u'cmsplugin_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['cms.CMSPlugin']", 'unique': 'True', 'primary_key': 'True'}),
            'product': ('django.db.models.fields.related.ForeignKey', [], {'default': 'None', 'related_name': "'product_feature_plugins'", 'null': 'True', 'to': u"orm['djangocmsquickstart.Product']"})
        },
        u'djangocmsquickstart.productgridpluginmodel': {
            'Meta': {'object_name': 'ProductGridPluginModel', '_ormbases': ['cms.CMSPlugin']},
            u'cmsplugin_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['cms.CMSPlugin']", 'unique': 'True', 'primary_key': 'True'})
        },
        u'djangocmsquickstart.promopluginmodel': {
            'Meta': {'object_name': 'PromoPluginModel', '_ormbases': ['cms.CMSPlugin']},
            u'cmsplugin_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['cms.CMSPlugin']", 'unique': 'True', 'primary_key': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'default': 'None', 'max_length': '1000', 'null': 'True'}),
            'heading': ('django.db.models.fields.CharField', [], {'default': 'None', 'max_length': '200', 'null': 'True'}),
            'image': ('django.db.models.fields.files.FileField', [], {'default': 'None', 'max_length': '100', 'null': 'True'})
        },
        u'djangocmsquickstart.twocolumncontainerpluginmodel': {
            'Meta': {'object_name': 'TwoColumnContainerPluginModel', '_ormbases': ['cms.CMSPlugin']},
            u'cmsplugin_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['cms.CMSPlugin']", 'unique': 'True', 'primary_key': 'True'}),
            'heading': ('django.db.models.fields.CharField', [], {'default': 'None', 'max_length': '200', 'null': 'True'})
        }
    }

    complete_apps = ['djangocmsquickstart']