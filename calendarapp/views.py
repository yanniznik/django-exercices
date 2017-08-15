from unittest import loader
from django.template import loader
from django.http import HttpResponse
from calendarapp.models import Appointment

def index(request):
    appointment_list = Appointment.objects.order_by('-date')
    template = loader.get_template('calendarapp/index.html')
    context = {
        'appointment_list': appointment_list,
    }
    return HttpResponse(template.render(context, request))