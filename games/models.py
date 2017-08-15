from django.db import models

# Create your models here.

class Games(models.Model):
    name = models.CharField(max_length=200)

class Scores(models.Model):
    name = models.CharField(max_length=200)
    message = models.CharField(max_length=200)
    date = models.DateTimeField()
    score = models.IntegerField()
    game = models.ForeignKey(Games, on_delete=models.CASCADE)
