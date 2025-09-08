from django.shortcuts import render
from rest_framework import viewsets
from .models import Contributors, Contributions
from .serializers import ContributorsSerializer, ContributionsSerializer

# Create your views here.
class ContributorsViewSet(viewsets.ModelViewSet):
    queryset = Contributors.objects.all()
    serializer_class = ContributorsSerializer

class ContributionsViewSet(viewsets.ModelViewSet):
    queryset = Contributions.objects.all().order_by('-date_required')
    serializer_class = ContributionsSerializer