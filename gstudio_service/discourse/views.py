from django.shortcuts import render
from discourse.discourse import *
from django.http import HttpResponse
from gstudio_service.settings import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from gnowdb.views import *


# Create your views here.
api = Discourse(DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY)

# Basic CRUD operation of Group
def get_groups(request):
	
	return HttpResponse(api.groups("group"))

def get_group(request):
	return HttpResponse(api.group("staff","group"))

@api_view(['POST'])
def add_group(request):
	print ("---------------- add_group-------------------------------")
	print(request.data)
	group_name = request.data['group_name']
	discourse_group = api.add_group({"group[name]":group_name,"group[public_admission]":"false"},"group")
	discourse_group = discourse_group.json()
	print (discourse_group)	
	gnowdb_functions.create_instance_of_group(discourse_group)
	# name = request.POST.get("name")
	# return HttpResponse(api.add_group({"group[name]":group_name,"group[public_admission]":"false"},"group"))
	return HttpResponse('Suceess')
@api_view(['PUT'])
def update_group(request):
	print ("---------------- up_group-------------------------------")
	group_name = request.data['group_name']
	return HttpResponse(api.update_group({"group[name]":group_name},"group"))

@api_view(['POST'])
def delete_group(request):
	print ("---------------- del_group-------------------------------")
	print(request.data)
	# group_name = request.data['group_name']
	group_name = request.data['group_name']

	return HttpResponse(api.delete_group({"group[name]":group_name},"group"))

# Basic CRUD operation of Pages

def add_page(request):
	return HttpResponse(api.add_page({"title":"New Page Through API","raw":"New Page Description Through API"},"page"))

def update_page(request):
	return HttpResponse(api.update_page({"title":"New Page","id":24,"category_id": 0},"page"))

def delete_page(request):
	return HttpResponse(api.delete_page({"id":24},"page"))

def get_page(request):
	return HttpResponse(api.get_page({"id":24},"page"))

# Basic CRUD operation of Messages

def get_message(request):
	return HttpResponse(api.get_message({"before":40},"message"))

# def create_message(request):
# 	return HttpResponse(api.create_message({"before":40},"message"))




# Basic CRUD operation for files
def upload_file(request):
	return HttpResponse(api.upload_file({'files[]': {"file":open('/home/siddhu/Desktop/nroer.jpg','rb') },"type":"composer" },"files"))

