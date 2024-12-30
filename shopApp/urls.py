from django.urls import path
from . import views

urlpatterns = [
    path('front/',views.front,name='front'),
    path('shopabout/',views.shopabout,name='shopabout'),
    path('shopcontact/',views.shopcontact,name='shopcontact'),
    path('savecustomers/',views.savecustomers,name='savecustomers'),
    path('allproducts/',views.allproducts,name='allproducts'),
    path('filtered_products/<cat_name>/',views.filtered_products,name='filtered_products'),
    path('single_prods/<pro_name>/',views.single_prods,name='single_prods'),

    path('login_signUp/',views.login_signUp,name='login_signUp'),
    path('save_reg/',views.save_reg,name='save_reg'),
    path('',views.user_login,name='user_login'),

    path('carts/',views.carts,name='carts'),
    path('save_cart/',views.save_cart,name='save_cart'),
    path('deletecart/<int:id>/',views.deletecart,name='deletecart'),

    path('checkout/',views.checkout,name='checkout'),
    path('save_cartDetails/',views.save_cartDetails,name='save_cartDetails'),
    path('payment/',views.payment,name='payment'),
]