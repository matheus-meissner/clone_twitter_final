from django.shortcuts import render

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Data

from .serializers import DataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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

##### __________________________ ######################
class DataListCreateAPIView(APIView):
    def get(self, request):
        data = Data.objects.all()
        serializer = DataSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)