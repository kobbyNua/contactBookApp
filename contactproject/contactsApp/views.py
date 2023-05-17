from django.shortcuts import render,redirect
from django.http import JsonResponse,HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .control import viewAll,getContact,contactSeacrh
from .serializers import ContactSerializer
#from .serializers import BookSerializer
# Create your views here.

@api_view(['GET'])
def viewAllContacts(request):
    contacts=viewAll()
    serialize_contact=ContactSerializer(contacts,many=True)

    return Response(serialize_contact.data)

@api_view(['GET'])
def viewContactDetails(request,id):
    contact=getContact(id)
    contact_serializer=ContactSerializer(contact,many=False)
    return Response(contact_serializer.data)

@api_view(['POST'])
def createContact(request):
    contact=ContactSerializer(data=request.data)
    if contact.is_valid():
        contact.save()
    return Response(contact.data)
@api_view(['POST'])
def updateContact(request,id):
    contact=getContact(id)
    contact_serializer=ContactSerializer(instance=contact,data=request.data)
    if contact_serializer.is_valid():
        contact_serializer.save()
    print(contact_serializer.data)
    return Response(contact_serializer.data)
@api_view(['DELETE'])
def deleteContact(request,id):
    contact=getContact(id)
    contact.delete()
    return Response("data daleted")
@api_view(['POST','GET'])
def searchContact(request,search):
    contacts=contactSeacrh(search)
    contact_serializer=ContactSerializer(contacts,many=True)
    return Response(contact_serializer.data)

