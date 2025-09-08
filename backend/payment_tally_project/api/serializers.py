from rest_framework import serializers
from .models import Contributors, Contributions

class ContributorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributors
        fields = '__all__'


class ContributionsSerializer(serializers.ModelSerializer):
    contributor = serializers.StringRelatedField()

    class Meta:
        model = Contributions
        fields = ['id', 'is_paid', 'contributor']