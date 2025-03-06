import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  const [openUser, setOpenUser] = useState(false);

  const handleUserClick = () => {
    setOpenUser(!openUser);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "calc(100vh - 99px)",
        backgroundColor: "#f9f9f9",
        padding: 2,
        borderRight: "1px solid #e0e0e0",
        overflowY: "auto"
      }}
    >
      {/* Overview Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#666" }}>
        Overview
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#607d8b" }} />
          </ListItemIcon>
          <ListItemText primary="App" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmojiEventsIcon sx={{ color: "#607d8b" }} />
          </ListItemIcon>
          <ListItemText primary="Badges" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CategoryIcon sx={{ color: "#607d8b" }} />
          </ListItemIcon>
          <ListItemText primary="List Cours" />
        </ListItem>

        <ListItem
          button
          onClick={handleUserClick}
          sx={{
            backgroundColor:"transparent",
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <PersonIcon sx={{ color: "#607d8b" }}/>
          </ListItemIcon>
          <ListItemText primary="My Profile" />
          {openUser ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUser} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Collapse>
      </List>

    </Box>
  );
};

export default Sidebar;