# backend/firebase_service/firebase_service.py

import firebase_admin
from firebase_admin import credentials

def initialize_firebase():
    # Check if Firebase is already initialized
    if not firebase_admin._apps:
        # Adjust the path based on your project structure
        cred = credentials.Certificate('firebase_service/serviceAccountKey.json')
        firebase_admin.initialize_app(cred)

# Initialize Firebase only if this file is executed directly or imported
initialize_firebase()
