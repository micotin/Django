from django.http import JsonResponse
from firebase_service.firebase_service import get_firestore_db

def get_user_data(request):
    db = get_firestore_db()
    users_ref = db.collection('users')  # This is the 'users' collection in Firestore
    docs = users_ref.stream()
    
    users = []
    for doc in docs:
        users.append(doc.to_dict())  # Convert each document to a dictionary
    
    return JsonResponse(users, safe=False)
