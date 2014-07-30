from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
admin.autodiscover()

urlpatterns = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + patterns('',
    # Examples:
    url(r'^view_memcache_keys/', 'djangocmsquickstart.views.view_memcache_keys', name='view_memcache_keys'),
    url(r'^product_list/', 'djangocmsquickstart.views.product_list', name='product_list'),
    # url(r'^tripweddings/', include('tripweddings.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    #url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    #url(r'^admin/', 'djangocmsquickstart.views.view_memcache_keys', name='view_memcache_keys'),

    url(r'^', include('cms.urls')),
)
