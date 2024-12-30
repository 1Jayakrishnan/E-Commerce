from django.db import models

# Create your models here.
class catDb(models.Model):
    CategoryName = models.CharField(max_length=200, null=True, blank=True)
    Description = models.CharField(max_length=200, null=True, blank=True)
    Image = models.ImageField(upload_to="Category Images",null=True, blank=True)

class proDb(models.Model):
    Category = models.CharField(max_length=200, null=True, blank=True)
    ProductName = models.CharField(max_length=200, null=True, blank=True)
    Price = models.CharField(max_length=200, null=True, blank=True)
    ProductDescription = models.CharField(max_length=200, null=True, blank=True)
    Quantity = models.IntegerField(null=True, blank=True)
    ProductImage = models.ImageField(upload_to="Category Images", null=True, blank=True)

class CartDb(models.Model):
    Username = models.CharField(max_length=200, null=True, blank=True)
    ProductName = models.CharField(max_length=200, null=True, blank=True)
    Quantity = models.IntegerField(null=True, blank=True)
    Price = models.IntegerField(null=True, blank=True)
    TotalPrice = models.IntegerField(null=True, blank=True)
    Image = models.ImageField(upload_to="Cart Images", null=True, blank=True)