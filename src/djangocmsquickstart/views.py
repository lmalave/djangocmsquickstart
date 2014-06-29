from django.http import HttpResponse
from django.template import Context, loader
from django.shortcuts import render, get_object_or_404
from google.appengine.api import app_identity
# Create your views here.
def view_memcache_keys(request):
    #world_regions = WorldRegion.objects.order_by('name')[:5]
    #context = Context({
    #    'world_regions': world_regions,
    #})     
    #return render(request, 'tripweddings/index.html', context)
    return HttpResponse("default bucket: "+str(app_identity.get_default_gcs_bucket_name()))

