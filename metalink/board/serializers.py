from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import Article, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('id', 'nickname', 'title', 'content', 'invite_url')
        read_only_fields = ('category', 'created_at')
    
    def to_representation(self, instance):
        self.fields['category'] =  CategorySerializer(read_only=True)
        return super(ArticleSerializer, self).to_representation(instance)


class CreateArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = '__all__'

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(CreateArticleSerializer, self).create(validated_data)