from rest_framework import serializers
from .models import Contributors, Contributions, TotalBalance, DeductionHistory

class ContributorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributors
        fields = '__all__'


class ContributionsSerializer(serializers.ModelSerializer):
    contributor_id = serializers.PrimaryKeyRelatedField(
        source = 'contributor',
        queryset = Contributors.objects.all(),
        write_only = True,
    )
    
    contributor = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Contributions
        fields = ['id', 'payment', 'contributor', 'date_paid', 'contributor_id']
        
        
        
    def create(self, validated_data):
        contributor = validated_data['contributor']
        payment = validated_data['payment']
        
        contributor.balance -= payment
        contributor.save()
        
        return Contributions.objects.create(**validated_data)


class TotalBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalBalance
        fields = '__all__'


class DeductionHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DeductionHistory
        fields = '__all__'