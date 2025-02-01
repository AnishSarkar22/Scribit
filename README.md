# Django & React Full Stack Web Application

This project is a full-stack web application built using Django for the backend and React for the frontend. It implements authentication using JWT (JSON Web Tokens). The application allows users to register, log in, create, read, update, and delete notes. Additionally, the project demonstrates how to deploy the application for free.

## Key Features

- **Full-stack development**: Utilizes both Python and JavaScript for a complete web application.
- **Backend with Django**: Handles API requests, data storage, and user management.
- **Frontend with React**: Provides the user interface for interacting with the API.
- **JWT Authentication**: Secures the application with token-based authentication.
- **Database integration**: Connects to a PostgreSQL database for robust data storage.
- **Free Deployment**: Shows how to deploy the application using the Coro platform.
- **CRUD Operations**: Implements create, read, update, and delete functionality for user notes.

## Technologies Used

### Backend

- **Django**: Python web framework for building the API.
- **Django REST Framework**: Toolkit for building Web APIs.
- **Simple JWT**: Provides JWT authentication for Django REST Framework.
- **PostgreSQL**: Relational database for storing application data.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for handling routing in React applications.
- **Axios**: HTTP client for making API requests.
- **JWT Decode**: Library for decoding JSON Web Tokens.
- **Vite**: Build tool for React applications.

### Deployment

- **Coro**: Platform for deploying and hosting both the backend and frontend.

## Project Structure

```plaintext
project-root/
├── backend/
│   ├── backend/        # The main Django project directory
│   ├── api/            # Django app containing the custom views and models
│   ├── requirements.txt # Lists the Python dependencies
│   ├── settings.py     # Configuration file for the Django project
│   ├── manage.py       # Utility script to interact with the Django project
│   ├── Procfile        # Specifies the command to start the application server
│   ├── coreo/          # Directory for Coro deployment files
│   │   ├── endpoints.yaml # Config file specifying the API endpoints
│   ├── .env            # Contains the environment variables for the database connection
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── protectedRoute.jsx    # Component for protecting routes
│   │   │   ├── form.jsx              # Reusable form component
│   │   │   ├── loadingIndicator.jsx  # Component that displays a loading animation
│   │   │   ├── note.jsx              # Component to display a single note
│   │   ├── pages/
│   │   │   ├── login.jsx   # Component for the login page
│   │   │   ├── register.jsx # Component for the registration page
│   │   │   ├── home.jsx     # Component for the main user interface
│   │   │   ├── notfound.jsx # Component for the 404 page
│   │   ├── styles/
│   │   │   ├── form.css  # CSS styles for the form component
│   │   │   ├── note.css  # CSS styles for the note component
│   │   │   ├── home.css  # CSS styles for the home component
│   │   │   ├── loadingIndicator.css  # CSS styles for the loading indicator
│   │   ├── constants.js # File for defining constants
│   │   ├── api.js       # Handles API requests with Axios
│   ├── package.json     # Lists the Node.js dependencies and scripts
│   ├── .env            # Contains environment variables
│
├── .gitignore           # Specifies intentionally untracked files that git should ignore
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

4. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

5. Run the backend server:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Create the React application:

   ```bash
   npm create vite@latest frontend --template react
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Deployment Setup

1. **Set up a Coro account**: Visit the Coro website and create a new account.
2. **Create a database**: Create a PostgreSQL database in the Coro platform.
3. **Set up environment variables**: Add environment variables from Coro to your `.env` file for the backend to connect to the remote database.
4. **Create a Git repository**: Initialize a new Git repository, add the project files, and push to GitHub.
5. **Create a new project**: In the Coro dashboard, create a new project and authorize it with GitHub.
6. **Add services**: Add the backend and frontend services, specifying the build pack, directory, and versions.
7. **Build and deploy**:
   - Build the backend, add the environment variables, and deploy.
   - Then build and deploy the frontend.
8. **Connect frontend and backend**: Connect the frontend to the backend API via a service URL.
9. **Disable API Key**: In the deploy tab for the backend, disable the API key.
10. **Redeploy the frontend**: After connecting the backend and frontend in the `api.js` file using the service URL, redeploy the frontend.

## Important Notes

- The database is a **trial database** in the developer tier and will be powered off every hour. You will need to manually power it back on.
- The code in the GitHub repository contains all the completed code and can be referenced for troubleshooting.
