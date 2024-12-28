from django.shortcuts import render

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Data

# Create your views here.
def Login(request):
    return render(request, "index.html")

def PagDados(request):
    dados = Data()
    dados.name = request.POST.get("nome")
    dados.msg = request.POST.get("msg")
    dados.dt = request.POST.get("data")
    dados.hour = request.POST.get("hora")
    dados.save()
    data = {"data": Data.objects.all()}
    return render(request, "dados.html", data)
