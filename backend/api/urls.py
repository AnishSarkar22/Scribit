from django.urls import path
from . import views

urlpatterns= [
    path('notes/', views.NoteListCreate.as_view(), name='note-list'),
    path('notes/delete/<int:pk>/', views.NoteDelete.as_view(), name='note-delete'),
]

# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NDkwMDk5LCJpYXQiOjE3Mzg0ODgyOTksImp0aSI6IjY1NDJkNGY4YmE3YjQ2ZDBiMWVjYTcyZWI5OWJjMGZmIiwidXNlcl9pZCI6MX0.KpV_O6q04w8GwkR5Y18vcSaD61IzuQgBCaTsI43Lv8E