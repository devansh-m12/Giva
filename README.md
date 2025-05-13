# To-Do List Application

This application is a robust and efficient To-Do List system, developed using Node.js and Express.js, with MongoDB serving as the database.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local system:

- Node.js
- MongoDB

### Installation

1. Clone the repository using the following command: `git clone https://github.com/yourusername/todo-app.git`
2. Navigate into the project directory and install the dependencies with: `npm install`
3. Start the server using: `npm start`

## Application Usage

The application provides the following API endpoints:

- `GET /api/todo/getTodos`: Retrieves all todo items. You can filter the results by category by adding query parameters to the URL. For instance, `/api/todo/getTodos?category=cars` will return todos categorized as `cars`.
- `POST /api/todo/createTodo`: Creates a new todo item. The request body should be a JSON object containing `title`, `description`, and `category` properties.
- `PUT /api/todo/editTodo/:id`: Updates a todo item. Replace `:id` in the URL with the id of the todo you wish to update. The request body should be a JSON object with the properties you want to update.
- `PATCH /api/todo/markTodoAsCompleted/:id`: Marks a todo item as completed. Replace `:id` in the URL with the id of the todo you wish to mark as completed.
- `DELETE /api/todo/deleteTodo/:id`: Deletes a todo item. Replace `:id` in the URL with the id of the todo you wish to delete.

## Code Structure

The codebase is organized into models, controllers, and routes. The `models` directory contains the schema definitions for the todo items. The `controllers` directory houses the logic for handling requests and responses. The `routes` directory defines the application's endpoints.

## Key Decisions

- **MongoDB**: A NoSQL database known for its high performance, high availability, and easy scalability. It integrates well with Node.js and Express.js.
- **Async/Await**: This syntax is used for handling promises, providing cleaner and more readable code.
- **Express Router**: Utilized to separate routes into different files, enhancing modularity and maintainability of the codebase.

## License

This project is licensed under the MIT License.

## Contributors

- Devansh Mahant
- Your Name Here