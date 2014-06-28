from django.http import HttpResponse
from django.template import Context, loader
from django.shortcuts import render, get_object_or_404

# Create your views here.
def view_memcache_keys(request):
    #world_regions = WorldRegion.objects.order_by('name')[:5]
    #context = Context({
    #    'world_regions': world_regions,
    #})     
    #return render(request, 'tripweddings/index.html', context)
    return HttpResponse("list of memcache keys: ")

