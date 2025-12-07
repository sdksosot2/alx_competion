from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('tts/', views.tts_tool, name='tts'),
    path('api/record-usage/', views.record_usage, name='record_usage'),
]
