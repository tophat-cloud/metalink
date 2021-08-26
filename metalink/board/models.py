from django.db import models

# Create your models here.


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    nickname = models.CharField(max_length=45)
    password = models.CharField(max_length=128)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    invite_url = models.URLField(max_length=255)
