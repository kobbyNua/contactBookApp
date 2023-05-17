from .models import ContactList
from django.db.models import F,Q,Sum

def viewAll():
    return ContactList.objects.all().order_by('first_name')

def getContact(id):
    return ContactList.objects.get(pk=id)

def contactSeacrh(search):
    return ContactList.objects.filter(Q(first_name__icontains=search)|Q(last_name__icontains=search)|Q(telephone__icontains=search)).order_by('first_name')

