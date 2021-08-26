from django.db import models
from django.db.models.fields import CharField

# Create your models here.

class Article (models.Model):
    id = models.BigIntegerField()
    nickname = models.CharField(max_length=45)
    password = models.CharField(max_length=128)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.TimeField(auto_now_add=True)

class categories (models.Model):
    id = models.BigIntegerField()
    name = models.CharField(max_length=45)
