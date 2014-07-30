from django.http import HttpResponse
from django.template import Context, loader
from django.shortcuts import render, get_object_or_404
from google.appengine.api import app_identity

from djangocmsquickstart.models import Product
# Create your views here.
def view_memcache_keys(request):
    return HttpResponse("default bucket: "+str(app_identity.get_default_gcs_bucket_name()))

def product_list(request):
    products = Product.objects.order_by('name')[:5]
    context = Context({
        'products': products,
    })     
    return render(request, 'product_list_full.html', context)
