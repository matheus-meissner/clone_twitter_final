from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Data
from .serializers import DataSerializer
from rest_framework.decorators import api_view
from rest_framework_simplejwt.authentication import JWTAuthentication

class RegisterAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if not username or not password or not email:
            return Response({'error': 'Todos os campos são obrigatórios'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Usuário já existe'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password, email=email)
        return Response({'message': 'Usuário criado com sucesso'}, status=status.HTTP_201_CREATED)


class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login realizado com sucesso'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({'message': 'Logout realizado com sucesso'}, status=status.HTTP_200_OK)


class DataListCreateAPIView(APIView):
    permission_classes = [IsAuthenticated]

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
    


@api_view(['GET', 'POST','DELETE', 'PUT'])
def Requisicao(request):
    #POST
    if request.method == 'POST':
        name = request.data.get("name")
        msg = request.data.get("msg")
        dt = request.data.get("dt")
        hour = request.data.get("hour")
        curtiu = request.data.get("curtiu")
        commit1 = request.data.get("commit1")
        commit2 = request.data.get("commit2")
        commit3 = request.data.get("commit3")
        dados = Data(name=name, msg=msg, dt=dt, hour=hour, curtiu=curtiu, commit1=commit1, commit2=commit2, commit3=commit3)
        dados.save()
        return Response("Dados inseridos no banco")
    
    #DELETE
    elif request.method == 'DELETE':
        try:
            # Tenta buscar o objeto pelo ID
            id = request.data.get("id")
            index = Data.objects.get(id=id)
        except Data.DoesNotExist:
        # Retorna um erro 404 se o objeto não existir
            return Response({"error": "Data with id=1 does not exist."}, status=status.HTTP_404_NOT_FOUND)
    
    # Deleta o objeto encontrado
        index.delete()

    elif request.method == 'PUT':
        id = request.data.get("id")
        index = Data.objects.get(id=id)
        index.curtiu = request.data.get("curtiu", index.curtiu)
        index.save()
        return Response("Atualizado")

    #GET
    banco_dados = Data.objects.all()
    serializer = DataSerializer(banco_dados, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def RequisicaoCommit(request):
    if request.method == 'PUT':
        id = request.data.get("id")
        index = Data.objects.get(id=id)
        index.commit1 = request.data.get("commit1", index.commit1)
        index.save()
        return Response("Commit Atualizado 1")
    
@api_view(['PUT'])
def RequisicaoUpdatePost(request):
    id = request.data.get("id")
    index = Data.objects.get(id=id)
    index.msg = request.data.get("msg", index.msg)
    index.save()
    return Response("Dados Alterados")