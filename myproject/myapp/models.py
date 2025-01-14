from django.db import models

# Create your models here.
class Data(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(max_length=255)
    msg = models.TextField(max_length=255)
    dt = models.TextField(max_length=255)
    hour = models.TextField(max_length=255)
    curtiu = models.TextField(max_length=255)
    commit1 = models.TextField(max_length=255)
    commit2 = models.TextField(max_length=255)
    commit3 = models.TextField(max_length=255)
