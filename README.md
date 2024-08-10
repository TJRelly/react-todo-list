# Todo App

This project implements a Todo App where users can manage their tasks effectively. It allows users to add, edit, and remove todos dynamically.

## Components

### App Component

The `App` component serves as the root component and renders the `TodoList` component.

### TodoList Component

The `TodoList` component manages the state of all todos and renders the `NewTodoForm` component along with a list of `Todo` components.

### NewTodoForm Component

The `NewTodoForm` component renders a form with a text input for creating new todos. Upon submission, it triggers the creation of a new `Todo` component.

### Todo Component

The `Todo` component displays each todo item within a `div`, showing the task description. Each todo item includes a button marked with "X" for removing the todo from the list.

## Functionality

- **Add Todo**: Users can input a task in the `NewTodoForm` and add it to the list of todos.
- **Edit Todo**: (If desired functionality) Users can edit existing todos directly in place.
- **Remove Todo**: Clicking the "X" button on a `Todo` component removes that specific todo from the list.

## Technologies Used

- React: For building the front-end components and managing state efficiently.
- JavaScript (ES6+): To write the application logic and event handling.
- CSS (or styled-components): For styling and ensuring a pleasant user interface.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the project directory and install dependencies.
   ```bash
   npm install

