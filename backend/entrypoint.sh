#!/usr/bin/env bash
set -e

# wait for DB (simple retry loop)
if [ -n "$DATABASE_URL" ]; then
  echo "Waiting for database..."
  retries=20
  until python - <<PY
import os, sys
from urllib.parse import urlparse
url = os.environ.get("DATABASE_URL")
if not url:
    sys.exit(1)
print("ok")
PY
  do
    ((retries--))
    if [ $retries -le 0 ]; then
      echo "Database not available after retries"
      exit 1
    fi
    sleep 2
  done
fi

# ensure running from backend dir (safe if image WORKDIR is /app/backend)
cd /app/backend || true

python manage.py migrate --noinput
python manage.py collectstatic --noinput --clear || true

# allow passing custom command via docker run
if [ $# -gt 0 ]; then
  exec "$@"
else
  exec uvicorn config.asgi:application --host 0.0.0.0 --port 8000 --reload
fi
