# Django & React Auth using Djoser and Typescript

This project is a full-stack web application that integrates Django for the backend and React with TypeScript for the frontend. It provides a robust authentication system using Djoser for token-based authentication and supports social authentication via third-party providers like Google and Github. The application is designed to be a boilerplate for developers looking to implement secure and scalable authentication in their projects. Key features include:

- Token-based authentication with Djoser.
- Social authentication using OAuth2.
- TypeScript integration for type safety in the frontend.
- Modular and scalable architecture for easy customization.
- Environment-based configuration for seamless deployment.
- Modern React setup with Vite for fast development builds.
- Django REST Framework for building RESTful APIs.
- Comprehensive setup instructions for both backend and frontend.

This project is ideal for developers who want to quickly set up a modern web application with authentication features.

## Setup Instructions

### Backend (Django)

1. Clone the repository:

   ```bash
   git clone https://github.com/zaker237/django-react-djoser-and-social-auth.git
   cd django-react-djoser-and-social-auth/backend
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:

   ```bash
   python manage.py migrate
   ```

5. Run the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm dev
   ```

### Environment Variables

- Create a `.env` file in the backend directory and configure the necessary environment variables (e.g., database settings, secret keys).
- Similarly, create a `.env` file in the frontend directory for API URLs and other configurations.

### Access the Application

- Backend API: `http://127.0.0.1:8000/`
- Frontend: `http://localhost:5173/`
- Follow the documentation for further configuration and usage.
