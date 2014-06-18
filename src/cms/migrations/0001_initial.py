# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'UserSettings'
        db.create_table(u'cms_usersettings', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(related_name='djangocms_usersettings', to=orm['auth.User'])),
            ('language', self.gf('django.db.models.fields.CharField')(max_length=10)),
            ('clipboard', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['cms.Placeholder'], null=True, blank=True)),
        ))
        db.send_create_signal('cms', ['UserSettings'])

        # Adding model 'Placeholder'
        db.create_table(u'cms_placeholder', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('slot', self.gf('django.db.models.fields.CharField')(max_length=50, db_index=True)),
            ('default_width', self.gf('django.db.models.fields.PositiveSmallIntegerField')(null=True)),
        ))
        db.send_create_signal('cms', ['Placeholder'])

        # Adding model 'CMSPlugin'
        db.create_table(u'cms_cmsplugin', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('placeholder', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['cms.Placeholder'], null=True)),
            ('parent', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['cms.CMSPlugin'], null=True, blank=True)),
            ('position', self.gf('django.db.models.fields.PositiveSmallIntegerField')(null=True, blank=True)),
            ('language', self.gf('django.db.models.fields.CharField')(max_length=15, db_index=True)),
            ('plugin_type', self.gf('django.db.models.fields.CharField')(max_length=50, db_index=True)),
            ('creation_date', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime.now)),
            ('changed_date', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('level', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
            ('lft', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
            ('rght', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
            ('tree_id', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
        ))
        db.send_create_signal('cms', ['CMSPlugin'])

        # Adding model 'Page'
        db.create_table(u'cms_page', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created_by', self.gf('django.db.models.fields.CharField')(max_length=70)),
            ('changed_by', self.gf('django.db.models.fields.CharField')(max_length=70)),
            ('parent', self.gf('django.db.models.fields.related.ForeignKey')(blank=True, related_name='children', null=True, to=orm['cms.Page'])),
            ('creation_date', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('changed_date', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('publication_date', self.gf('django.db.models.fields.DateTimeField')(db_index=True, null=True, blank=True)),
            ('publication_end_date', self.gf('django.db.models.fields.DateTimeField')(db_index=True, null=True, blank=True)),
            ('in_navigation', self.gf('django.db.models.fields.BooleanField')(default=True, db_index=True)),
            ('soft_root', self.gf('django.db.models.fields.BooleanField')(default=False, db_index=True)),
            ('reverse_id', self.gf('django.db.models.fields.CharField')(db_index=True, max_length=40, null=True, blank=True)),
            ('navigation_extenders', self.gf('django.db.models.fields.CharField')(db_index=True, max_length=80, null=True, blank=True)),
            ('template', self.gf('django.db.models.fields.CharField')(default='INHERIT', max_length=100)),
            ('site', self.gf('django.db.models.fields.related.ForeignKey')(related_name='djangocms_pages', to=orm['sites.Site'])),
            ('login_required', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('limit_visibility_in_menu', self.gf('django.db.models.fields.SmallIntegerField')(default=None, null=True, db_index=True, blank=True)),
            ('is_home', self.gf('django.db.models.fields.BooleanField')(default=False, db_index=True)),
            ('application_urls', self.gf('django.db.models.fields.CharField')(db_index=True, max_length=200, null=True, blank=True)),
            ('application_namespace', self.gf('django.db.models.fields.CharField')(max_length=200, null=True, blank=True)),
            ('level', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
            ('lft', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
            ('rght', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
            ('tree_id', self.gf('django.db.models.fields.PositiveIntegerField')(db_index=True)),
            ('publisher_is_draft', self.gf('django.db.models.fields.BooleanField')(default=True, db_index=True)),
            ('publisher_public', self.gf('django.db.models.fields.related.OneToOneField')(related_name='publisher_draft', unique=True, null=True, to=orm['cms.Page'])),
            ('languages', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('revision_id', self.gf('django.db.models.fields.PositiveIntegerField')(default=0)),
            ('xframe_options', self.gf('django.db.models.fields.IntegerField')(default=0)),
        ))
        db.send_create_signal('cms', ['Page'])

        # Adding unique constraint on 'Page', fields ['publisher_is_draft', 'application_namespace']
        db.create_unique(u'cms_page', ['publisher_is_draft', 'application_namespace'])

        # Adding unique constraint on 'Page', fields ['reverse_id', 'site', 'publisher_is_draft']
        db.create_unique(u'cms_page', ['reverse_id', 'site_id', 'publisher_is_draft'])

        # Adding M2M table for field placeholders on 'Page'
        m2m_table_name = db.shorten_name(u'cms_page_placeholders')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('page', models.ForeignKey(orm['cms.page'], null=False)),
            ('placeholder', models.ForeignKey(orm['cms.placeholder'], null=False))
        ))
        db.create_unique(m2m_table_name, ['page_id', 'placeholder_id'])

        # Adding model 'GlobalPagePermission'
        db.create_table(u'cms_globalpagepermission', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'], null=True, blank=True)),
            ('group', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.Group'], null=True, blank=True)),
            ('can_change', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_add', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_delete', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_change_advanced_settings', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('can_publish', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_change_permissions', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('can_move_page', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_view', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('can_recover_page', self.gf('django.db.models.fields.BooleanField')(default=True)),
        ))
        db.send_create_signal('cms', ['GlobalPagePermission'])

        # Adding M2M table for field sites on 'GlobalPagePermission'
        m2m_table_name = db.shorten_name(u'cms_globalpagepermission_sites')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('globalpagepermission', models.ForeignKey(orm['cms.globalpagepermission'], null=False)),
            ('site', models.ForeignKey(orm[u'sites.site'], null=False))
        ))
        db.create_unique(m2m_table_name, ['globalpagepermission_id', 'site_id'])

        # Adding model 'PagePermission'
        db.create_table(u'cms_pagepermission', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'], null=True, blank=True)),
            ('group', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.Group'], null=True, blank=True)),
            ('can_change', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_add', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_delete', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_change_advanced_settings', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('can_publish', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_change_permissions', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('can_move_page', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('can_view', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('grant_on', self.gf('django.db.models.fields.IntegerField')(default=5)),
            ('page', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['cms.Page'], null=True, blank=True)),
        ))
        db.send_create_signal('cms', ['PagePermission'])

        # Adding model 'PageUser'
        db.create_table(u'cms_pageuser', (
            (u'user_ptr', self.gf('django.db.models.fields.related.OneToOneField')(to=orm['auth.User'], unique=True, primary_key=True)),
            ('created_by', self.gf('django.db.models.fields.related.ForeignKey')(related_name='created_users', to=orm['auth.User'])),
        ))
        db.send_create_signal('cms', ['PageUser'])

        # Adding model 'PageUserGroup'
        db.create_table(u'cms_pageusergroup', (
            (u'group_ptr', self.gf('django.db.models.fields.related.OneToOneField')(to=orm['auth.Group'], unique=True, primary_key=True)),
            ('created_by', self.gf('django.db.models.fields.related.ForeignKey')(related_name='created_usergroups', to=orm['auth.User'])),
        ))
        db.send_create_signal('cms', ['PageUserGroup'])

        # Adding model 'Title'
        db.create_table(u'cms_title', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('language', self.gf('django.db.models.fields.CharField')(max_length=15, db_index=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('page_title', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('menu_title', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('meta_description', self.gf('django.db.models.fields.TextField')(max_length=155, null=True, blank=True)),
            ('slug', self.gf('django.db.models.fields.SlugField')(max_length=255)),
            ('path', self.gf('django.db.models.fields.CharField')(max_length=255, db_index=True)),
            ('has_url_overwrite', self.gf('django.db.models.fields.BooleanField')(default=False, db_index=True)),
            ('redirect', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('page', self.gf('django.db.models.fields.related.ForeignKey')(related_name='title_set', to=orm['cms.Page'])),
            ('creation_date', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime.now)),
            ('published', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('publisher_is_draft', self.gf('django.db.models.fields.BooleanField')(default=True, db_index=True)),
            ('publisher_public', self.gf('django.db.models.fields.related.OneToOneField')(related_name='publisher_draft', unique=True, null=True, to=orm['cms.Title'])),
            ('publisher_state', self.gf('django.db.models.fields.SmallIntegerField')(default=0, db_index=True)),
        ))
        db.send_create_signal('cms', ['Title'])

        # Adding unique constraint on 'Title', fields ['language', 'page']
        db.create_unique(u'cms_title', ['language', 'page_id'])

        # Adding model 'PlaceholderReference'
        db.create_table(u'cms_placeholderreference', (
            (u'cmsplugin_ptr', self.gf('django.db.models.fields.related.OneToOneField')(to=orm['cms.CMSPlugin'], unique=True, primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('placeholder_ref', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['cms.Placeholder'], null=True)),
        ))
        db.send_create_signal('cms', ['PlaceholderReference'])

        # Adding model 'StaticPlaceholder'
        db.create_table(u'cms_staticplaceholder', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='', max_length=255, blank=True)),
            ('code', self.gf('django.db.models.fields.CharField')(max_length=255, blank=True)),
            ('draft', self.gf('django.db.models.fields.related.ForeignKey')(related_name='static_draft', null=True, to=orm['cms.Placeholder'])),
            ('public', self.gf('django.db.models.fields.related.ForeignKey')(related_name='static_public', null=True, to=orm['cms.Placeholder'])),
            ('dirty', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('creation_method', self.gf('django.db.models.fields.CharField')(default='code', max_length=20, blank=True)),
            ('site', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['sites.Site'], null=True, blank=True)),
        ))
        db.send_create_signal('cms', ['StaticPlaceholder'])

        # Adding unique constraint on 'StaticPlaceholder', fields ['code', 'site']
        db.create_unique(u'cms_staticplaceholder', ['code', 'site_id'])


    def backwards(self, orm):
        # Removing unique constraint on 'StaticPlaceholder', fields ['code', 'site']
        db.delete_unique(u'cms_staticplaceholder', ['code', 'site_id'])

        # Removing unique constraint on 'Title', fields ['language', 'page']
        db.delete_unique(u'cms_title', ['language', 'page_id'])

        # Removing unique constraint on 'Page', fields ['reverse_id', 'site', 'publisher_is_draft']
        db.delete_unique(u'cms_page', ['reverse_id', 'site_id', 'publisher_is_draft'])

        # Removing unique constraint on 'Page', fields ['publisher_is_draft', 'application_namespace']
        db.delete_unique(u'cms_page', ['publisher_is_draft', 'application_namespace'])

        # Deleting model 'UserSettings'
        db.delete_table(u'cms_usersettings')

        # Deleting model 'Placeholder'
        db.delete_table(u'cms_placeholder')

        # Deleting model 'CMSPlugin'
        db.delete_table(u'cms_cmsplugin')

        # Deleting model 'Page'
        db.delete_table(u'cms_page')

        # Removing M2M table for field placeholders on 'Page'
        db.delete_table(db.shorten_name(u'cms_page_placeholders'))

        # Deleting model 'GlobalPagePermission'
        db.delete_table(u'cms_globalpagepermission')

        # Removing M2M table for field sites on 'GlobalPagePermission'
        db.delete_table(db.shorten_name(u'cms_globalpagepermission_sites'))

        # Deleting model 'PagePermission'
        db.delete_table(u'cms_pagepermission')

        # Deleting model 'PageUser'
        db.delete_table(u'cms_pageuser')

        # Deleting model 'PageUserGroup'
        db.delete_table(u'cms_pageusergroup')

        # Deleting model 'Title'
        db.delete_table(u'cms_title')

        # Deleting model 'PlaceholderReference'
        db.delete_table(u'cms_placeholderreference')

        # Deleting model 'StaticPlaceholder'
        db.delete_table(u'cms_staticplaceholder')


    models = {
        u'auth.group': {
            'Meta': {'object_name': 'Group'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        u'auth.permission': {
            'Meta': {'ordering': "(u'content_type__app_label', u'content_type__model', u'codename')", 'unique_together': "((u'content_type', u'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['contenttypes.ContentType']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['auth.Group']", 'symmetrical': 'False', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
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
        'cms.globalpagepermission': {
            'Meta': {'object_name': 'GlobalPagePermission'},
            'can_add': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_change': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_change_advanced_settings': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'can_change_permissions': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'can_delete': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_move_page': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_publish': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_recover_page': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_view': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'group': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.Group']", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'sites': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['sites.Site']", 'null': 'True', 'blank': 'True'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']", 'null': 'True', 'blank': 'True'})
        },
        'cms.page': {
            'Meta': {'ordering': "('tree_id', 'lft')", 'unique_together': "(('publisher_is_draft', 'application_namespace'), ('reverse_id', 'site', 'publisher_is_draft'))", 'object_name': 'Page'},
            'application_namespace': ('django.db.models.fields.CharField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'application_urls': ('django.db.models.fields.CharField', [], {'db_index': 'True', 'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'changed_by': ('django.db.models.fields.CharField', [], {'max_length': '70'}),
            'changed_date': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'created_by': ('django.db.models.fields.CharField', [], {'max_length': '70'}),
            'creation_date': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'in_navigation': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_index': 'True'}),
            'is_home': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_index': 'True'}),
            'languages': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'level': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'lft': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'limit_visibility_in_menu': ('django.db.models.fields.SmallIntegerField', [], {'default': 'None', 'null': 'True', 'db_index': 'True', 'blank': 'True'}),
            'login_required': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'navigation_extenders': ('django.db.models.fields.CharField', [], {'db_index': 'True', 'max_length': '80', 'null': 'True', 'blank': 'True'}),
            'parent': ('django.db.models.fields.related.ForeignKey', [], {'blank': 'True', 'related_name': "'children'", 'null': 'True', 'to': "orm['cms.Page']"}),
            'placeholders': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['cms.Placeholder']", 'symmetrical': 'False'}),
            'publication_date': ('django.db.models.fields.DateTimeField', [], {'db_index': 'True', 'null': 'True', 'blank': 'True'}),
            'publication_end_date': ('django.db.models.fields.DateTimeField', [], {'db_index': 'True', 'null': 'True', 'blank': 'True'}),
            'publisher_is_draft': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_index': 'True'}),
            'publisher_public': ('django.db.models.fields.related.OneToOneField', [], {'related_name': "'publisher_draft'", 'unique': 'True', 'null': 'True', 'to': "orm['cms.Page']"}),
            'reverse_id': ('django.db.models.fields.CharField', [], {'db_index': 'True', 'max_length': '40', 'null': 'True', 'blank': 'True'}),
            'revision_id': ('django.db.models.fields.PositiveIntegerField', [], {'default': '0'}),
            'rght': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'site': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'djangocms_pages'", 'to': u"orm['sites.Site']"}),
            'soft_root': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_index': 'True'}),
            'template': ('django.db.models.fields.CharField', [], {'default': "'INHERIT'", 'max_length': '100'}),
            'tree_id': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'xframe_options': ('django.db.models.fields.IntegerField', [], {'default': '0'})
        },
        'cms.pagepermission': {
            'Meta': {'object_name': 'PagePermission'},
            'can_add': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_change': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_change_advanced_settings': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'can_change_permissions': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'can_delete': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_move_page': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_publish': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'can_view': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'grant_on': ('django.db.models.fields.IntegerField', [], {'default': '5'}),
            'group': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.Group']", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'page': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['cms.Page']", 'null': 'True', 'blank': 'True'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']", 'null': 'True', 'blank': 'True'})
        },
        'cms.pageuser': {
            'Meta': {'object_name': 'PageUser', '_ormbases': [u'auth.User']},
            'created_by': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'created_users'", 'to': u"orm['auth.User']"}),
            u'user_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': u"orm['auth.User']", 'unique': 'True', 'primary_key': 'True'})
        },
        'cms.pageusergroup': {
            'Meta': {'object_name': 'PageUserGroup', '_ormbases': [u'auth.Group']},
            'created_by': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'created_usergroups'", 'to': u"orm['auth.User']"}),
            u'group_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': u"orm['auth.Group']", 'unique': 'True', 'primary_key': 'True'})
        },
        'cms.placeholder': {
            'Meta': {'object_name': 'Placeholder'},
            'default_width': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'slot': ('django.db.models.fields.CharField', [], {'max_length': '50', 'db_index': 'True'})
        },
        'cms.placeholderreference': {
            'Meta': {'object_name': 'PlaceholderReference', '_ormbases': ['cms.CMSPlugin']},
            u'cmsplugin_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['cms.CMSPlugin']", 'unique': 'True', 'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'placeholder_ref': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['cms.Placeholder']", 'null': 'True'})
        },
        'cms.staticplaceholder': {
            'Meta': {'unique_together': "(('code', 'site'),)", 'object_name': 'StaticPlaceholder'},
            'code': ('django.db.models.fields.CharField', [], {'max_length': '255', 'blank': 'True'}),
            'creation_method': ('django.db.models.fields.CharField', [], {'default': "'code'", 'max_length': '20', 'blank': 'True'}),
            'dirty': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'draft': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'static_draft'", 'null': 'True', 'to': "orm['cms.Placeholder']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '255', 'blank': 'True'}),
            'public': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'static_public'", 'null': 'True', 'to': "orm['cms.Placeholder']"}),
            'site': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['sites.Site']", 'null': 'True', 'blank': 'True'})
        },
        'cms.title': {
            'Meta': {'unique_together': "(('language', 'page'),)", 'object_name': 'Title'},
            'creation_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'has_url_overwrite': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_index': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'language': ('django.db.models.fields.CharField', [], {'max_length': '15', 'db_index': 'True'}),
            'menu_title': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'meta_description': ('django.db.models.fields.TextField', [], {'max_length': '155', 'null': 'True', 'blank': 'True'}),
            'page': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'title_set'", 'to': "orm['cms.Page']"}),
            'page_title': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'path': ('django.db.models.fields.CharField', [], {'max_length': '255', 'db_index': 'True'}),
            'published': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'publisher_is_draft': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_index': 'True'}),
            'publisher_public': ('django.db.models.fields.related.OneToOneField', [], {'related_name': "'publisher_draft'", 'unique': 'True', 'null': 'True', 'to': "orm['cms.Title']"}),
            'publisher_state': ('django.db.models.fields.SmallIntegerField', [], {'default': '0', 'db_index': 'True'}),
            'redirect': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'max_length': '255'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        },
        'cms.usersettings': {
            'Meta': {'object_name': 'UserSettings'},
            'clipboard': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['cms.Placeholder']", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'language': ('django.db.models.fields.CharField', [], {'max_length': '10'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'djangocms_usersettings'", 'to': u"orm['auth.User']"})
        },
        u'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)", 'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        },
        u'sites.site': {
            'Meta': {'ordering': "('domain',)", 'object_name': 'Site', 'db_table': "'django_site'"},
            'domain': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        }
    }

    complete_apps = ['cms']