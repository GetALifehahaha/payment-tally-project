from rest_framework import serializers
from .models import Contributors, Contributions, TotalBalance, DeductionHistory

class ContributorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributors
        fields = '__all__'


class ContributionsSerializer(serializers.ModelSerializer):
    contributor = serializers.StringRelatedField()

    class Meta:
        model = Contributions
        fields = ['id', 'is_paid', 'contributor']


class TotalBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalBalance
        fields = '__all__'


class DeductionHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DeductionHistory
        fields = '__all__'