"""metalink URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

app_name = 'board'
urlpatterns = [
    path('', views.ArticleListView.as_view(), name='article_list'),
    path('<int:article_id>', views.ArticleDetailView.as_view(), name='article_detail'),
    path('create', views.CreateArticleView.as_view(), name='article_create'),
    path('category', views.CategoryListView.as_view(), name='category_list'),
]
