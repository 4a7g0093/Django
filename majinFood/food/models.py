from os import name
from django.db import models
# Create your models here.
class Pizza(models.Model):
    name = models.CharField(max_length=120)
    priceM = models.DecimalField(max_digits=4,decimal_places=0)
    priceL = models.DecimalField(max_digits=4,decimal_places=0)
    pImage = models.URLField()
    
class Burger(models.Model):
    name = models.CharField(max_length=120)
    priceM = models.DecimalField(max_digits=4,decimal_places=0)
    priceL = models.DecimalField(max_digits=4,decimal_places=0)
    bImage = models.URLField()
    
class Drinks(models.Model):
    name = models.CharField(max_length=120)
    drice = models.DecimalField(max_digits=4,decimal_places=0)
    dImage = models.URLField()