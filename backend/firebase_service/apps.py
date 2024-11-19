from django.apps import AppConfig

class FirebaseServiceConfig(AppConfig):
    name = 'firebase_service'

    def ready(self):
        import firebase_service.firebase_service  # Initialize Firebase when Django starts
