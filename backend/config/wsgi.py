"""
This project uses ASGI (config.asgi:application) for async servers (uvicorn/gunicorn+uvicorn workers).
Keeping this WSGI file for compatibility with tools that require a WSGI app.

WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

application = get_wsgi_application()
