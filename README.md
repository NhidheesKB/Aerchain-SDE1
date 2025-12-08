# Aerchain AI-Powered Task Manager

![Language](https://img.shields.io/badge/language-TypeScript-blue.svg)
![Frontend](https://img.shields.io/badge/frontend-Vue.js-42b883.svg)
![Backend](https://img.shields.io/badge/backend-Node.js-green.svg)
![Build Tool](https://img.shields.io/badge/build-Vite-purple.svg)
![Database](https://img.shields.io/badge/database-PostgreSQL-blue.svg)
![AI](https://img.shields.io/badge/AI-OpenRouter-orange.svg)
![CSS Framework](https://img.shields.io/badge/css-TailwindCSS-06B6D4.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A full-stack application designed to streamline task management with the power of artificial intelligence and an intuitive user interface. This project provides a dynamic and interactive experience for users to efficiently create, view, update, and delete tasks, with the unique ability to generate new tasks using AI prompts and interact via speech input. The frontend, built with Vue 3, ensures a responsive and modern UI, while the robust Node.js backend handles data persistence with PostgreSQL and integrates with the OpenRouter AI platform for intelligent task generation.

## ✨ Features

*   **Intuitive Task Management:** Comprehensive CRUD (Create, Read, Update, Delete) operations for tasks.
*   **AI-Powered Task Generation:** Generate new tasks automatically based on user-provided prompts, leveraging the OpenRouter AI.
*   **Speech-to-Text Input:** Create tasks hands-free using integrated speech recognition functionality.
*   **Drag-and-Drop Interface:** Easily reorder and organize tasks within the user interface.
*   **Responsive & Modern UI:** Built with Vue 3 and Tailwind CSS for a seamless experience across devices.
*   **Robust RESTful API:** A well-structured backend API to manage task data securely and efficiently.
*   **PostgreSQL Database:** Reliable and scalable data storage for all your task-related information.
*   **Data Validation:** Secure API endpoints with robust schema validation using Express-Validator.

## 📚 Tech Stack

The Aerchain AI-Powered Task Manager is a full-stack application composed of two main services: a frontend and a backend.

**Frontend:**

*   **Framework:** Vue 3 (Composition API)
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** Vue Router
*   **UI Components:** Vue Draggable Next
*   **Interaction:** Web Speech API (for speech recognition)

**Backend:**

*   **Runtime:** Node.js
*   **Language:** TypeScript
*   **Web Framework:** Express.js
*   **Database ORM/Query Builder:** Knex.js
*   **Database:** PostgreSQL
*   **AI Integration:** OpenRouter SDK
*   **Validation:** Express-Validator
*   **Environment Variables:** Dotenv

## 🚀 Installation

The project is organized as a monorepo with separate `frontend` and `backend` directories. Follow the steps below to set up and run the application.

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [PostgreSQL](https://www.postgresql.org/download/) installed and running

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd Aerchain-SDE1/backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:**
    Create a `.env` file in the `Aerchain-SDE1/backend` directory with the following content. Replace placeholder values with your actual credentials and API keys:

    ```env
    DB_CONNECTION=pg
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_pg_user
    DB_PASSWORD=your_pg_password
    DB_DATABASE=aerchain_tasks
    OPENROUTER_API_KEY=your_openrouter_api_key
    ```
    *   `DB_USER`, `DB_PASSWORD`, `DB_DATABASE`: Your PostgreSQL username, password, and the database name you wish to use (e.g., `aerchain_tasks`).
    *   `OPENROUTER_API_KEY`: Obtain an API key from the [OpenRouter platform](https://openrouter.ai/) and input it here.

4.  **Run Database Migrations:**
    This will create the necessary tables in your PostgreSQL database.
    ```bash
    npx knex migrate:latest
    ```
5.  **Seed the Database (Optional):**
    If you want to populate your database with some initial data, run the seeder:
    ```bash
    npx knex seed:run
    ```
6.  **Start the Backend Server:**
    ```bash
    npm run dev
    ```
    The backend server will typically run on `http://localhost:3000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd Aerchain-SDE1/frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the Frontend Development Server:**
    ```bash
    npm run dev
    ```
    The frontend application will usually open automatically in your browser at `http://localhost:5173` (or a similar port assigned by Vite).

## ▶️ Usage

Once both the frontend and backend servers are up and running:

1.  **Access the Application:** Open your web browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
2.  **Create Tasks:**
    *   Use the "Create Task" page to manually input task details.
    *   Leverage the speech input feature (if your browser supports Web Speech API and mic access is granted) to dictate new tasks.
3.  **AI Task Generation:** On the "Create Task" page, utilize the AI generation option to automatically suggest and create tasks based on a simple prompt.
4.  **Manage Tasks:** View all your tasks, easily edit their descriptions or titles, update their completion status, or delete them. The drag-and-drop functionality allows for intuitive reordering of tasks within the interface.

### Example API Endpoints (Backend Interaction)

You can interact directly with the backend API using tools like cURL or Postman:

*   **GET all tasks:**
    ```bash
    GET http://localhost:3000/api/tasks
    ```
*   **CREATE a new task:**
    ```bash
    POST http://localhost:3000/api/tasks
    Content-Type: application/json

    {
        "title": "Plan marketing campaign",
        "description": "Outline strategy for Q4, research target audience.",
        "status": "pending"
    }
    ```
*   **UPDATE an existing task:**
    ```bash
    PUT http://localhost:3000/api/tasks/:id
    Content-Type: application/json

    {
        "title": "Finalize Q4 Marketing Plan",
        "status": "in_progress"
    }
    ```
*   **UPDATE task status:**
    ```bash
    PATCH http://localhost:3000/api/tasks/:id/status
    Content-Type: application/json

    {
        "status": "completed"
    }
    ```
*   **DELETE a task:**
    ```bash
    DELETE http://localhost:3000/api/tasks/:id
    ```
*   **GENERATE a task using AI:**
    ```bash
    POST http://localhost:3000/api/generate-task
    Content-Type: application/json

    {
        "prompt": "a simple task related to cooking dinner"
    }
    ```
