import requests
from django.http import HttpResponse
import json
# Declare cookies and headers to compose post request
# cookies = {
# }

headers = {
    'Content-Type': 'application/json',
}


class gnowdb_functions():

    def getAllNodes(self, request):
        r = requests.get(
            'http://localhost:3000/api/getAllNodes', headers=headers)
        return True

    def getAllLabels(self, request):
        r = requests.get(
            'http://localhost:3000/api/getAllLabels', headers=headers)
        return True

    def getRelations(self, request):
        r = requests.get(
            'http://localhost:3000/api/getRelations', headers=headers)
        return True

    def getAdminList(self, request):
        r = requests.get(
            'http://localhost:3000/api/getAdminList', headers=headers)
        return True

    def getMemberList(self, request):
        r = requests.get(
            'http://localhost:3000/api/getMemberList', headers=headers)
        return True

    @staticmethod
    def create_instance_of_group(params=None):
        print ("=====================================")
        print (params)
        if params:
            discourse_id = params.get("basic_group").get("id")
            discourse_name = params.get("basic_group").get("name")
        else:
            return False
        print (params)
        print (discourse_id)
        data = {"className": "groups", "nodeList": [
            {"discourse_id": discourse_id, "discourse_group_name": discourse_name}]}
        data = json.dumps(data)
        response = requests.post(
            'http://localhost:3001/api/gneo/createNodeClassInstances', headers=headers, data=data)
        return True
