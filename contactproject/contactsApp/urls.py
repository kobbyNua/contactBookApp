from . import views

from django.urls import path,include


urlpatterns=[
    path('',views.viewAllContacts,name="view-all-contacts"),
    path('view-contact-details/<str:id>',views.viewContactDetails,name="view-contact-details"),
    path('create-contact',views.createContact,name="createContact"),
    path("update-contact/<str:id>",views.updateContact,name="updateContact"),
    path("delete-contact/<str:id>",views.deleteContact,name="delete-contact"),
    path("contact-search/<str:search>",views.searchContact,name="searchContact")
]