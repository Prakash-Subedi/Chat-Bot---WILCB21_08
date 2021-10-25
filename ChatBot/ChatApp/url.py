from django.urls import *
from . import views

urlpatterns = [
path ('',views.home, name='home')

]
