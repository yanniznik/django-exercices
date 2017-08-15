from unittest import loader
from django.template import loader
from django.http import HttpResponse

def index(context):
    template = loader.get_template('ex1/index.html')
    return HttpResponse(template.render())

def page1(context):
    return HttpResponse("This is page1")

def page2(context):
    return HttpResponse("This is page2")

