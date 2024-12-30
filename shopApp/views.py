from django.shortcuts import render, redirect
from dashApp.models import catDb, proDb, CartDb
from .models import customersDb, userDb, OrderDb
from django.contrib import messages

# Create your views here.

def front(req):
    cat = catDb.objects.all()
    return render(req, 'front.html', {"cat":cat})

def shopabout(req):
    return render(req, 'shopabout.html')

def shopcontact(req):
    return render(req, 'shopcontact.html')

def savecustomers(req):
    if req.method == "POST":
        cusname = req.POST.get('name')
        cusmail = req.POST.get('mail')
        cusplace = req.POST.get('place')
        cussub = req.POST.get('subject')
        cusmsg = req.POST.get('msg')
        obj = customersDb(CustomerName=cusname,CustomerEmail=cusmail,CustomerPlace=cusplace,CustomerSubject=cussub,CustomerMessage=cusmsg)
        obj.save()
        return redirect(shopcontact)

def allproducts(req):
    category = catDb.objects.all()
    prods = proDb.objects.all()
    return render(req, 'allproducts.html', {'category':category, 'prods':prods})

def filtered_products(req, cat_name):
    prods = proDb.objects.filter(Category=cat_name)
    return render(req, 'filtered_products.html', {'prods':prods})

def single_prods(req, pro_name):
    prods = proDb.objects.filter(ProductName=pro_name)
    return render(req,'single_products.html', {'prods':prods})

def login_signUp(req):
    return render(req, 'login_signUp.html')

def save_reg(request):
    if request.method == 'POST':
        u_name = request.POST.get('user')
        u_mob = request.POST.get("mob")
        u_email = request.POST.get("mail")
        u_pass = request.POST.get("pass")
        uc_pass = request.POST.get("cpass")
        obj = userDb(Username=u_name,Usermobile=u_mob,Useremail=u_email,Password=u_pass,ConfirmPass=uc_pass)
        obj.save()
        return redirect(login_signUp)

def user_login(request):
    if request.method == 'POST':
        un = request.POST.get('uname')
        ps = request.POST.get('pass')
        if userDb.objects.filter(Username=un, Password=ps).exists():
            request.session['Username'] = un
            request.session['Password'] = ps
            messages.success(request, "Welcome !")
            return redirect(front)
        else:
            messages.error(request, "Your username or password is incorrect!")
            return redirect(login_signUp)
    else:
        return redirect(login_signUp)

def carts(req):
    cartdata = CartDb.objects.all()
    return render(req, 'carts.html', {'cartdata':cartdata})

def save_cart(req):
    if req.method == 'POST':
        qty = req.POST.get('qty')
        pri = req.POST.get("pri")
        tpri = req.POST.get("tpri")
        user = req.POST.get("User")
        proname = req.POST.get("proname")
        try:
            x = proDb.objects.get(ProductName=proname)
            img = x.ProductImage
        except proDb.DoesNotExist:
            img = None
        obj = CartDb(Username=user,ProductName=proname,Quantity=qty,Price=pri,TotalPrice=tpri,Image=img)
        obj.save()
        messages.success(req, 'Cart added successfully!')
        return redirect(carts)
    
def deletecart(req, id):
    x = CartDb.objects.get(id=id)
    x.delete()
    return redirect(carts)

def checkout(req):
    prod = CartDb.objects.filter(Username=req.session['Username'])
    sub_total = 0
    shipping_amount = 0
    total = 0
    for i in prod:
        sub_total += i.TotalPrice
        if sub_total > 100:
            shipping_amount = 100
        else:
            shipping_amount = 200
        total = sub_total + shipping_amount

    return render(req, 'checkout.html', {'sub_total': sub_total, 'shipping_amount': shipping_amount, 'total': total})

def save_cartDetails(req):
    if req.method == 'POST':
        na = req.POST.get('fname')
        em = req.POST.get("email")
        add = req.POST.get("addr")
        mob = req.POST.get("mob")
        state = req.POST.get("state")
        pin = req.POST.get("pin")
        tpr = req.POST.get("pri")
        obj = OrderDb(Name=na,Email=em,Address=add,Mobile=mob,State=state,Pin=pin,TotalPrice=tpr)
        obj.save()
        messages.success(req, 'Submitted successfully!')
        return redirect(payment)
    
def payment(req):
    return render(req, 'payment.html')