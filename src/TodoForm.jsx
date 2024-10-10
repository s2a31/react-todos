import { useState } from "react"; // Import the useState hook from React for managing state

import ListItem from "@mui/material/ListItem"; // Import the ListItem component from Material UI
import TextField from "@mui/material/TextField"; // Import the TextField component from Material UI for input
import Create from "@mui/icons-material/Create"; // Import the Create icon from Material UI icons
import { InputAdornment, IconButton } from "@mui/material"; // Import InputAdornment and IconButton from Material UI

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState(""); // State to keep track of the input text

  // Function to handle changes in the input field
  const handleChange = (evt) => {
    setText(evt.target.value); // Update the state with the current input value
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page on submit
    if (text.trim()) {
      addTodo(text); // Call the addTodo function passed via props with the input text
      setText(""); // Clear the input field after adding the todo
    }
  };

  return (
    <ListItem>
      {/* Form to capture the new todo, which calls handleSubmit on submit */}
      <form onSubmit={handleSubmit}>
        {/* TextField component for input, with an icon button inside */}
        <TextField
          id="outlined-basic" // Unique ID for the input field
          label="Add To Do" // Label for the input
          variant="outlined" // Styling variant for the input field
          onChange={handleChange} // Handle input changes with handleChange function
          value={text} // Bind the input value to the state
          InputProps={{
            // Add a button at the end of the input field
            endAdornment: (
              <InputAdornment position="end">
                {/* IconButton to trigger form submission with the Create icon */}
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
