import { CssBaseline } from "@mui/material"; // Importing CssBaseline from Material UI for consistent baseline styling
import "./App.css"; // Importing custom CSS styles
import TodoList from "./TodoList"; // Importing the TodoList component
import Navbar from "./Navbar"; // Importing the Navbar component

function App() {
  return (
    <>
      {/* CssBaseline helps apply consistent, cross-browser default styling */}
      <CssBaseline />
      
      {/* Render the Navbar component */}
      <Navbar />
      
      {/* Render the TodoList component */}
      <TodoList />
    </>
  );
}

export default App; // Export the App component as the default export

