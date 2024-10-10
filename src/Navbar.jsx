import AppBar from "@mui/material/AppBar"; // Importing the AppBar component from Material UI
import Box from "@mui/material/Box"; // Importing the Box component from Material UI for layout and spacing
import Toolbar from "@mui/material/Toolbar"; // Importing the Toolbar component from Material UI
import Typography from "@mui/material/Typography"; // Importing Typography for text styling
import IconButton from "@mui/material/IconButton"; // Importing IconButton component for clickable icons
import MenuIcon from "@mui/icons-material/Menu"; // Importing the MenuIcon from Material UI icons

export default function Navbar() {
  return (
    // Box component acts as a wrapper with flexbox properties (flexGrow: 1)
    <Box sx={{ flexGrow: 1 }}> 
      {/* AppBar component creates a top navigation bar */}
      <AppBar position="static">
        {/* Toolbar component organizes the content inside the AppBar */}
        <Toolbar>
          {/* IconButton component for the menu icon, positioned at the start of the toolbar */}
          <IconButton
            size="large" // Size of the icon
            edge="start" // Position the icon at the start
            color="inherit" // Set the color to inherit from parent
            aria-label="menu" // Accessibility label for the button
            sx={{ mr: 2 }} // Add some margin to the right of the button
          >
            {/* MenuIcon component for the menu icon */}
            <MenuIcon />
          </IconButton>

          {/* Typography component for the title text "React Todos" */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
