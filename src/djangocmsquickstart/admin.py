from django.contrib import admin 
from models import Product

class ProductAdmin(admin.ModelAdmin): 
    fields = ['name','description','image']
    list_display = ('name','description')
        

admin.site.register(Product,ProductAdmin)
