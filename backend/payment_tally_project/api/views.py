from django.shortcuts import render
from rest_framework import viewsets
from .models import Contributors, Contributions, TotalBalance, DeductionHistory
from .serializers import ContributorsSerializer, ContributionsSerializer, TotalBalanceSerializer, DeductionHistorySerializer

# Create your views here.
class ContributorsViewSet(viewsets.ModelViewSet):
    serializer_class = ContributorsSerializer

    def get_queryset(self):
        queryset = Contributors.objects.all()
        contributor_id = self.request
        


class ContributionsViewSet(viewsets.ModelViewSet):
    queryset = Contributions.objects.all().order_by('-id')
    serializer_class = ContributionsSerializer


class TotalBalanceViewSet(viewsets.ModelViewSet):
    queryset = TotalBalance.objects.all()
    serializer_class = TotalBalanceSerializer
    

class DeductionHistoryViewSet(viewsets.ModelViewSet):
    queryset = DeductionHistory.objects.all().order_by('-deduction_date')
    serializer_class = DeductionHistorySerializer