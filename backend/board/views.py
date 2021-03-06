from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password

from .serializers import ArticleSerializer, CreateArticleSerializer, CategorySerializer
from .models import Article, Category


class CategoryListView(APIView):
    def get(self, request):
        category_serializer = CategorySerializer(Category.objects.all(), many=True)
        return Response(category_serializer.data, status=status.HTTP_200_OK)


class ArticleListView(APIView):
    def get(self, request):
        article_serializer = ArticleSerializer(Article.objects.all(), many=True)
        return Response(article_serializer.data, status=status.HTTP_200_OK)
 

class ArticleDetailView(APIView):
    def get(self, request, **kwargs):
        article_id = kwargs.get('article_id')
        if Article.objects.filter(id=article_id).exists():
            article_serializer = ArticleSerializer(Article.objects.get(id=article_id))
            return Response(article_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response("article not found", status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, **kwargs):
        article_id = kwargs.get('article_id')
        nickname = request.data['nickname']
        password = request.data['password']

        if Article.objects.filter(id=article_id).exists():
            article = Article.objects.get(id=article_id)
            title = article.title[:]
            if article.nickname == nickname and check_password(password, article.password):
                article.delete()
                return Response(f"article \'{title}\' deleted", status=status.HTTP_200_OK)
            else:
                return Response("unauthorized", status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response("article not exists", status=status.HTTP_400_BAD_REQUEST)


class CreateArticleView(APIView):
    def post(self, request):
        article_serializer = CreateArticleSerializer(data=request.data)

        if article_serializer.is_valid(raise_exception=True):
            article_serializer.save()
            return Response("article created", status=status.HTTP_201_CREATED)
        else:
            return Response(article_serializer.error, status=status.HTTP_406_NOT_ACCEPTABLE)
 