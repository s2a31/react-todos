# React To-Do App

This is a simple React-based To-Do application that allows users to manage tasks. The app uses Material UI for styling and includes features such as adding, removing, and marking tasks as completed. It also stores tasks in `localStorage`, so they persist even when the page is reloaded.

## Features

- **Add new tasks**: Quickly add new to-do items.
- **Mark tasks as completed**: Toggle the completion status of tasks.
- **Remove tasks**: Delete tasks that are no longer needed.
- **Persistent data storage**: Tasks are stored in `localStorage` to maintain state across page reloads.
- **Responsive design**: Built with Material UI to ensure a consistent and responsive user experience.

## Technologies Used

- **React**: For building the user interface.
- **Material UI**: For component styling and layout.
- **localStorage**: For persisting data in the browser.

## Project Structure

The main components of the project are:

1. **App.jsx**: The root component that renders the navigation bar and the to-do list.
2. **Navbar.jsx**: A simple navigation bar at the top of the app.
3. **TodoList.jsx**: Manages the list of tasks and includes the logic for adding, removing, and toggling tasks.
4. **TodoForm.jsx**: A form for adding new tasks.
5. **TodoItem.jsx**: Displays individual tasks with options to mark as complete or delete.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/s2a31/react-todos.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-todos
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:5173`.

## Usage

1. **Add a Task**: Type a task description in the input field and click the add button (represented by a pencil icon) to add the task to the list.
2. **Mark a Task as Completed**: Click on the checkbox next to a task to mark it as completed or uncompleted.
3. **Delete a Task**: Click the trash can icon to remove a task from the list.

## Project Files Overview

### `App.jsx`

The main component that sets up the app's layout and renders the `Navbar` and `TodoList` components.

### `Navbar.jsx`

A simple navigation bar created with Material UI's `AppBar` and `Toolbar` components. It displays the title "React Todos" and includes a menu icon.

### `TodoList.jsx`

Handles the main logic of the app:
- Fetches initial to-do data from `localStorage`.
- Provides functions to add, remove, and toggle the completion status of tasks.
- Uses `useEffect` to update `localStorage` whenever the to-do list changes.

### `TodoForm.jsx`

A form component that allows users to add new tasks. It captures user input and calls the `addTodo` function to add the task to the list.

### `TodoItem.jsx`

Represents a single to-do item. It includes a checkbox for marking completion and a delete button for removing the task.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A React component library for faster and easier web development.
- **crypto.randomUUID()**: Used to generate unique IDs for each to-do item.

## Custom Styling

Custom styles can be added to the `App.css` file to override the default Material UI styles.

## Future Improvements

- **Add due dates and task priorities**: Allow users to set deadlines and prioritize tasks.
- **Add a filter/sort feature**: Enable filtering tasks by completion status and sorting by priority or due date.
- **User authentication**: Integrate user accounts to enable task management across different devices.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
