import { useState, useEffect } from "react"; // Import hooks from React

import List from "@mui/material/List"; // Import the List component from Material UI for displaying todo items
import TodoItem from "./TodoItem"; // Import the TodoItem component
import TodoForm from "./TodoForm"; // Import the TodoForm component
import { Box, Typography } from "@mui/material"; // Import Box and Typography components from Material UI

// Function to get initial data from localStorage
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos")); // Retrieve todos from localStorage
  if (!data) return []; // If no data is found, return an empty array
  return data; // Return the retrieved data
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData); // Initialize the state with todos from localStorage

  // useEffect hook to save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Store the current state of todos in localStorage
  }, [todos]); // Dependency array - effect runs when todos state changes

  // Function to remove a todo by its ID
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id); // Filter out the todo with the matching ID
    });
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // Toggle the 'completed' property of the todo
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  // Function to add a new todo
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos, // Spread the previous todos
        { text: text, id: crypto.randomUUID(), completed: false }, // Add a new todo with a unique ID and initial 'completed' state as false
      ];
    });
  };

  return (
    <Box
      sx={{
        display: "flex", // Flexbox for layout
        justifyContent: "center", // Center content horizontally
        flexDirection: "column", // Stack items vertically
        alignItems: "center", // Center content vertically
        m: 3, // Margin around the container
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      {/* List component to display todos */}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {/* Map over todos and render TodoItem components */}
        {todos.map((todo) => (
          <TodoItem
            todo={todo} // Pass the todo object as a prop
            key={todo.id} // Unique key for each item
            remove={removeTodo} // Pass the removeTodo function
            toggle={() => toggleTodo(todo.id)} // Pass the toggle function with the todo ID
          />
        ))}
        {/* Render the TodoForm component for adding new todos */}
        <TodoForm addTodo={addTodo} /> {/* Pass the addTodo function */}
      </List>
    </Box>
  );
}
