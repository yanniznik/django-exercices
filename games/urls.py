from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='games-index'),
    url(r'^personality/$', views.personality, name='personality'),
    url(r'^hangman/$', views.hangman, name='hangman'),
    url(r'^save/$', views.savescore, name='save'),

]
