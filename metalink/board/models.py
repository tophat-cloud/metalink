from django.db import models

# Create your models here.


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    nickname = models.CharField(max_length=45)
    password = models.CharField(max_length=128)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.TimeField(auto_now_add=True)
    invite_url = models.URLField(max_length=255)


class categories(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
