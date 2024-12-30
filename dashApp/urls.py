from django.urls import path
from dashApp import views

urlpatterns = [
    path("dash/",views.dash, name="dash"),
    path("addcat/",views.addcat,name='addcat'),
    path("viewcat/",views.viewcat,name="viewcat"),
    path("savecat/",views.savecat,name="savecat"),
    path("editcat/<int:c_id>/",views.editcat,name="editcat"),
    path("updatecat/<int:c_id>/",views.updatecat,name="updatecat"),
    path("deletecat/<int:c_id>/",views.deletecat,name="deletecat"),

    path("addpro/",views.addpro,name="addpro"),
    path("savepro/",views.savepro,name="savepro"),
    path("viewpro/",views.viewpro,name='viewpro'),
    path("editpro/<int:pro_id>/",views.editpro,name="editpro"),
    path("updatepro/<int:pro_id>/",views.updatepro,name="updatepro"),
    path("deletepro/<int:pro_id>/",views.deletepro,name="deletepro"),

    path("adminloginpage/",views.adminloginpage,name="adminloginpage"),
    path("adminlogin/",views.adminlogin,name="adminlogin"),
    path('adminlogout/',views.adminlogout,name="adminlogout"),

    path('viewCustomers/',views.viewCustomers,name='viewCustomers'),
    path("deleteCustomers/<int:cus_id>/",views.deleteCustomers,name="deleteCustomers"),
    path('viewRegs/',views.viewRegs,name='viewRegs'),
    path('deleteRegs/<int:reg_id>/',views.deleteRegs,name='deleteRegs')

]