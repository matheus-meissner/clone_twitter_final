# myapp/urls.py
from django.urls import path
from .views import DataListCreateAPIView

urlpatterns = [
    path('api/data/', DataListCreateAPIView.as_view(), name='data-list-create'),
]
