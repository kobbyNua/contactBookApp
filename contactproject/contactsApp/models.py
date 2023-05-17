from django.db import models

# Create your models here.

class ContactList(models.Model):
    first_name = models.CharField(max_length=180)
    last_name =models.CharField(max_length=180)
    telephone=models.CharField(max_length=180)
   
