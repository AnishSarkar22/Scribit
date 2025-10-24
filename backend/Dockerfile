FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# system deps for psycopg2 and building packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# use /app/backend as runtime working dir (build context should be the backend folder)
WORKDIR /app/backend

# copy pyproject/lock first for better layer caching (these files should be in the backend context)
COPY pyproject.toml .
COPY uv.lock .

# install pip and build tools
RUN pip install --upgrade pip setuptools wheel

# copy backend source from build context into the image
COPY . .

# install python deps and ensure uvicorn is available
RUN pip install --no-cache-dir uvicorn && \
    pip install --no-cache-dir .

# copy entrypoint and make executable (keeps entrypoint at /app/entrypoint.sh)
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 8000

CMD ["/app/entrypoint.sh"]
