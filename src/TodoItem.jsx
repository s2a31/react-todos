import ListItem from "@mui/material/ListItem"; // Import the ListItem component from Material UI
import ListItemButton from "@mui/material/ListItemButton"; // Import ListItemButton to make the list item clickable
import ListItemIcon from "@mui/material/ListItemIcon"; // Import ListItemIcon to display icons next to the list item
import ListItemText from "@mui/material/ListItemText"; // Import ListItemText to display the text in the list item
import Checkbox from "@mui/material/Checkbox"; // Import Checkbox to show a checkbox for each todo item
import IconButton from "@mui/material/IconButton"; // Import IconButton for clickable icon buttons
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon to show a delete (trash can) icon

export default function TodoItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`; // Create a unique ID for the checkbox using the todo ID

  // Function to handle removing a todo
  const removeTodo = () => {
    remove(todo.id); // Call the remove function passed via props with the todo's ID
  };

  return (
    <ListItem
      secondaryAction={
        // IconButton for deleting a todo, calls removeTodo when clicked
        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
          <DeleteIcon /> {/* Display a trash can icon */}
        </IconButton>
      }
      disablePadding // Disable default padding for the ListItem
    >
      {/* Make the list item clickable with ListItemButton */}
      <ListItemButton role={undefined} dense>
        {/* Checkbox to indicate whether the todo is completed */}
        <ListItemIcon>
          <Checkbox
            edge="start" // Position the checkbox at the start of the item
            checked={todo.completed} // Set the checked state based on the todo's completion status
            tabIndex={-1} // Remove focus from the checkbox when tabbing through
            disableRipple // Disable the ripple effect on click
            inputProps={{ "aria-labelledby": labelId }} // Accessibility attributes for screen readers
            onChange={toggle} // Call the toggle function to mark the todo as completed or not
          />
        </ListItemIcon>
        {/* Display the text of the todo item */}
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}
