# Aerchain-SDE1

## Project Overview

This repository contains the backend implementation for a task management application, built using TypeScript, Express.js, and Node.js. It provides functionalities for creating, retrieving, updating, and deleting tasks, as well as managing their statuses.

## Key Features & Benefits

*   **Task Management:**  Allows users to create, read, update, and delete tasks.
*   **Status Updates:** Enables users to modify the status of existing tasks (e.g., pending, in progress, completed).
*   **API Integration:** Utilizes OpenRouter for AI-powered task generation.
*   **Database Persistence:** Employs PostgreSQL for robust and reliable data storage.
*   **Input Validation:** Implements middleware to validate user input, ensuring data integrity.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:**  (version >= 18) -  [https://nodejs.org/](https://nodejs.org/)
*   **npm** or **yarn:** (comes with Node.js)
*   **PostgreSQL:** A relational database for storing task data. [https://www.postgresql.org/](https://www.postgresql.org/)
*   **dotenv:** To manage environment variables.

## Installation & Setup Instructions

Follow these steps to install and set up the project:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/NhidheesKB/Aerchain-SDE1.git
    cd Aerchain-SDE1/backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the `backend/` directory based on the example below, replacing the placeholders with your actual values.

    ```
    DB_HOST=your_db_host
    DB_PORT=your_db_port
    DB_PASSWORD=your_db_password
    DB_USER=your_db_user
    DB_DATABASE=your_db_database
    OPENROUTER_API_KEY=your_openrouter_api_key
    ```
    **Important:**  Ensure you have the necessary credentials for your PostgreSQL database and an OpenRouter API key.

4.  **Configure Database SSL (Optional):**
    If your PostgreSQL instance requires SSL, ensure to have the CA certificate in the `cred/ca.pem` and that the path in `backend/knexfile.ts` is correct.

5.  **Run Migrations:**

    ```bash
    npx knex migrate:latest --knexfile knexfile.ts
    ```
    This will create the necessary database tables.

6.  **Build the project:**

    ```bash
    npm run build
    ```

7.  **Start the server:**

    ```bash
    npm start  # or node build/server.js
    ```

    Alternatively, for development with live reloading:

    ```bash
    npm run dev # or tsx watch ./server.ts
    ```

    The server will start running on the configured port (usually 3000).

## Usage Examples & API Documentation

The backend provides the following API endpoints:

*   **`POST /tasks`**: Creates a new task.  Requires request body with task details.
    *   Example: `POST /tasks -d '{"title": "My Task", "description": "Task description"}`
*   **`GET /tasks/:id`**: Retrieves a task by ID.
    *   Example: `GET /tasks/123`
*   **`PUT /tasks/:id`**: Updates an existing task. Requires request body with updated task details.
    *   Example: `PUT /tasks/123 -d '{"description": "Updated description"}`
*   **`DELETE /tasks/:id`**: Deletes a task by ID.
    *   Example: `DELETE /tasks/123`
*   **`PATCH /tasks/:id/status`**: Updates the status of a task. Requires a request body with the new status.
    *   Example: `PATCH /tasks/123/status -d '{"status": "completed"}`
*   **`POST /tasks/generate`**: Generates a task using OpenRouter.

**Request and Response Formats:**

All API endpoints expect and return JSON data.

## Configuration Options

The following environment variables can be configured:

| Variable            | Description                                                                                                     | Default Value |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | ------------- |
| `DB_HOST`           | The hostname or IP address of the PostgreSQL server.                                                          | `localhost`   |
| `DB_PORT`           | The port number of the PostgreSQL server.                                                                      | `5432`        |
| `DB_PASSWORD`       | The password for the PostgreSQL user.                                                                         |               |
| `DB_USER`           | The username for connecting to the PostgreSQL database.                                                         |               |
| `DB_DATABASE`       | The name of the PostgreSQL database to use.                                                                     | `tasks`       |
| `OPENROUTER_API_KEY`| The API key for accessing the OpenRouter service.                                                              |               |

## Contributing Guidelines

We welcome contributions to this project! To contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Submit a pull request to the `main` branch.

Please adhere to the project's coding style and conventions. Ensure that your code includes appropriate tests.

## License Information

This project has no specified license. All rights are reserved unless otherwise stated.

## Acknowledgments

*   [Express.js](https://expressjs.com/) - For providing a robust and flexible web application framework.
*   [Knex.js](http://knexjs.org/) -  For providing a powerful SQL query builder.
*   [OpenRouter](https://openrouter.ai/) - For AI Task Generation.
