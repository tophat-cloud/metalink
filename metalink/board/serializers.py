from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = '__all__'

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(ArticleSerializer, self).create(validated_data)