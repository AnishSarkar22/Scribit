# Full Stack Notes App with Django, React, and Supabase Database

This project is a full-stack web application built using Django for the backend and React for the frontend. It implements authentication using JWT (JSON Web Tokens). The application allows users to register, log in, create, read, update, and delete notes.

## Key Features

- **Full-stack development**: Utilizes both Python and JavaScript for a complete web application.
- **Backend with Django**: Handles API requests, data storage, and user management.
- **Frontend with React**: Provides the user interface for interacting with the API.
- **JWT Authentication**: Secures the application with token-based authentication.
- **Database integration**: Connects to a Supabase PostgreSQL database for robust data storage.
- **CRUD Operations**: Implements create, read, update, and delete functionality for user notes.

## Technologies Used

### Backend

- **Django**: Python web framework for building the API.
- **Django REST Framework**: Toolkit for building Web APIs.
- **Simple JWT**: Provides JWT authentication for Django REST Framework.
- **Supabase PostgreSQL**: Managed PostgreSQL database with session pooling.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for handling routing in React applications.
- **Axios**: HTTP client for making API requests.
- **JWT Decode**: Library for decoding JSON Web Tokens.
- **Vite**: Build tool for React applications.

## Project Structure

```plaintext
project-root/
├── .gitignore
├── README.md
├── requirements.txt
├── backend/
│   ├── .env
│   ├── .env.sample
│   ├── .gitignore
│   ├── api/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   │   ├── __init__.py
│   │   │   └── 0001_initial.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── supabase_client.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── db.sqlite3
│   └── manage.py
└── frontend/
    ├── .env
    ├── .env.example
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── App.jsx
    │   ├── api.js
    │   ├── constants.js
    │   ├── main.jsx
    │   ├── components/
    │   │   ├── Form.jsx
    │   │   ├── LoadingIndicator.jsx
    │   │   ├── Note.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── NotFound.jsx
    │   │   └── Register.jsx
    │   └── styles/
    │       ├── Form.css
    │       ├── Home.css
    │       ├── LoadingIndicator.css
    │       └── Note.css
    └── vite.config.js
```

## Setup and Installation

### Backend Setup

1. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

   or (for Windows):

   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:

   ```bash
   source venv/bin/activate
   ```

   or (for Windows):

   ```bash
   venv\Scripts\activate
   ```

3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Use `.env.sample` file in the backend directory and create `.env` file with Supabase database credentials

5. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

6. Run the backend server:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Create the React+Vite application:

   ```bash
   npm create vite@latest
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install the required packages:

   ```bash
   npm install react-toastify react-router-dom jwt-decode prop-types axios
   ```

4. Create environment file:

   ```bash
   echo "VITE_API_URL=http://localhost:8000" > .env

   or

   echo "VITE_API_URL=http://127.0.0.1:8000" > .env
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Verify the application at [http://localhost:5173](http://localhost:5173)

**Note**: Make sure the backend Django server is running on port 8000 before starting the frontend development server.
