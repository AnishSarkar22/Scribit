# Scribit - Full Stack Notes App with Django, React, and PostgreSQL

This project is a full-stack web application built using Django for the backend and React for the frontend. It implements authentication using JWT (JSON Web Tokens). The application allows users to register, log in, create, read, update, and delete notes.

## Technologies Used

### Backend

- **Django**: Python web framework for building the API.
- **Django REST Framework**: Toolkit for building Web APIs.
- **Simple JWT**: Provides JWT authentication for Django REST Framework.
- **PostgreSQL (locally hosted)**: PostgreSQL database running locally for development.
- **Uvicorn / ASGI**: Exposes an ASGI application and in production is typically served with Uvicorn.
- **uv (package manager/runner)**: This project uses `uv` as the lightweight backend package manager/runner for commands and workflows.
- **Ruff**: Fast linter/formatter for backend Python code to keep style and quality consistent.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for handling routing in React applications.
- **Axios**: HTTP client for making API requests.
- **JWT Decode**: Library for decoding JSON Web Tokens.
- **Vite**: Build tool for React applications.
- **Biome**: For frontend linting and formatting (JS/TS/JSON/etc.) to keep consistency across the UI codebase.

## Setup and Installation

### Backend Setup

1. Ensure a running PostgreSQL instance and create a database named `scribit`:

   ```bash
   # create the database using createdb (as current OS/postgres user)
   createdb scribit

   # or using psql as the postgres superuser
   psql -U postgres -c "CREATE DATABASE scribit;"

   # optional: grant privileges to an existing DB role
   psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE scribit TO your_db_user;"

2. Create `.env` file using `.env.example` with your local PostgreSQL credentials:

   ```
   cp .env.example .env
   ```

3. Install dependencies:

   ```bash
   cd backend/
   uv sync
   ```

4. Apply database migrations:

   ```bash
   uv run python manage.py migrate
   ```

5. Run backend:

   ```bash
   <!-- for local development -->
   uv run manage.py runserver

   <!-- for production (uvicorn ASGI server) -->
   uv run uvicorn config.asgi:application --host <your-backend-url> --port <your-backend-port>
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the required packages:

   ```bash
   pnpm install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```
