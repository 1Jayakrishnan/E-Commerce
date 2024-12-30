from django.db import models

# Create your models here.
class customersDb(models.Model):
    CustomerName = models.CharField(max_length=200, null=True, blank=True)
    CustomerEmail = models.EmailField(max_length=200, null=True, blank=True)
    CustomerPlace = models.CharField(max_length=200, null=True, blank=True)
    CustomerSubject = models.CharField(max_length=200, null=True, blank=True)
    CustomerMessage = models.CharField(max_length=1000, null=True, blank=True)

class userDb(models.Model):
    Username = models.CharField(max_length=200, null=True, blank=True)
    Usermobile = models.CharField(max_length=200, null=True, blank=True)
    Useremail = models.EmailField(max_length=200, null=True, blank=True)
    Password = models.CharField(max_length=200, null=True, blank=True)
    ConfirmPass = models.CharField(max_length=200, null=True, blank=True)

class OrderDb(models.Model):
    Name = models.CharField(max_length=200, null=True, blank=True)
    Email = models.EmailField(max_length=200, null=True, blank=True)
    Address = models.CharField(max_length=200, null=True, blank=True)
    Mobile = models.CharField(max_length=200, null=True, blank=True)
    State = models.CharField(max_length=200, null=True, blank=True)
    Pin = models.IntegerField( null=True, blank=True)
    TotalPrice = models.IntegerField( null=True, blank=True)
