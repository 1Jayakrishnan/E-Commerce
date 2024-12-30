from django.shortcuts import render, redirect
from django.utils.datastructures import MultiValueDictKeyError
from django.core.files.storage import FileSystemStorage
from dashApp.models import catDb, proDb
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from datetime import datetime
from shopApp.models import customersDb, userDb
from django.contrib import  messages

# Create your views here.
def dash(req):
    cat = catDb.objects.count()
    pro = proDb.objects.count()
    date = datetime.now()
    return render(req, "dash.html", {'cat':cat, 'pro':pro, 'time':date.time(), 'today':date.today()})

def addcat(req):
    return render(req, "addcat.html")

def savecat(req):
    if req.method == 'POST':
        cat = req.POST.get('cname')
        des = req.POST.get("desc")
        im = req.FILES["img"]
        obj = catDb(CategoryName=cat, Description=des, Image=im)
        messages.success(req, "Category added successfully!")
        obj.save()
        return redirect(addcat)

def viewcat(req):
    data = catDb.objects.all()
    return render(req, "viewscat.html", {'data': data})

def editcat(req, c_id):
    data = catDb.objects.get(id=c_id)
    return render(req, "editcat.html", {'data': data})

def updatecat(req, c_id):
    if req.method == "POST":
        cat = req.POST.get('cname')
        des = req.POST.get("desc")
        try:
            img = req.FILES['img']
            fs = FileSystemStorage()
            file = fs.save(img.name, img)
        except MultiValueDictKeyError:
            file = catDb.objects.get(id=c_id).Image
        catDb.objects.filter(id=c_id).update(CategoryName=cat, Description=des, Image=file)
        return redirect(viewcat)


def deletecat(req, c_id):
    x = catDb.objects.get(id=c_id)
    x.delete()
    return redirect(viewcat)


def addpro(req):
    cat = catDb.objects.all()
    return render(req, "addproduct.html", {'cat':cat})

def savepro(req):
    if req.method == 'POST':
        procat = req.POST.get('procat')
        prod = req.POST.get("prod")
        pri = req.POST.get("pri")
        desc = req.POST.get("desc")
        qty = req.POST.get("qty")
        im = req.FILES["img"]
        obj = proDb(Category=procat, ProductName=prod, Price=pri, ProductDescription=desc, Quantity=qty, ProductImage=im)
        obj.save()
        return redirect(addpro)

def viewpro(req):
    data = proDb.objects.all()
    return render(req, "viewprods.html", {'data':data})

def editpro(req, pro_id):
    data = proDb.objects.get(id=pro_id)
    cat = catDb.objects.all()
    return render(req, "editprods.html", {'data':data, 'cat':cat})

def updatepro(req, pro_id):
    if req.method == "POST":
        procat = req.POST.get('procat')
        prod = req.POST.get("prod")
        pri = req.POST.get("pri")
        desc = req.POST.get("desc")
        qty = req.POST.get("qty")
        try:
            img = req.FILES['img']
            fs = FileSystemStorage()
            file = fs.save(img.name, img)
        except MultiValueDictKeyError:
            file = proDb.objects.get(id=pro_id).ProductImage
        proDb.objects.filter(id=pro_id).update(Category=procat, ProductName=prod, Price=pri, ProductDescription=desc, Quantity=qty, ProductImage=file)
        return redirect(viewpro)


def deletepro(req, pro_id):
    x = proDb.objects.get(id=pro_id)
    x.delete()
    return redirect(viewpro)


def adminloginpage(req):
    return render(req, "adminsLogin.html")

def adminlogin(request):
    if request.method == "POST":
         user = request.POST.get("username")
         pwd = request.POST.get("password")
         if User.objects.filter(username__contains=user).exists():
             x = authenticate(username=user, password=pwd)
             if x is not None:
                 login(request, x)
                 request.session['username'] = user
                 request.session['password'] = pwd
                 return redirect(dash)
             else:
                 return redirect(adminloginpage)
         else:
             return redirect(adminloginpage)

def adminlogout(request):
    del request.session['username']
    del request.session['password']
    return redirect(adminloginpage)


def viewCustomers(req):
    customer = customersDb.objects.all()
    return render(req, 'viewCustomers.html', {'customer':customer})

def deleteCustomers(req, cus_id):
    x = customersDb.objects.get(id=cus_id)
    x.delete()
    return redirect(viewCustomers)

def viewRegs(req):
    users = userDb.objects.all()
    return render(req, 'viewRegs.html', {'users': users})


def deleteRegs(req, reg_id):
    x = userDb.objects.get(id=reg_id)
    x.delete()
    return redirect(viewRegs)
