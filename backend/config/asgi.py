"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_asgi_application()

if __name__ == "__main__":
    # quick local / container run: `python config/asgi.py`
    import uvicorn

    uvicorn.run(
        "config.asgi:application",
        host="0.0.0.0",
        port=int(os.getenv("PORT", 8000)),
        log_level="info",
    )