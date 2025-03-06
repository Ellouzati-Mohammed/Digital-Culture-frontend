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
  const [openListCatego, setOpenListCatego] = useState(false);

  const handleListCategoClick = () => {
    setOpenListCatego(!openListCatego);
  };

  return (
    <Box
      sx={{
        width: 280,
        height: "calc(100vh - 99px)",
        backgroundColor: "white",
        padding: 2,
        boxShadow: "4px 0 15px rgba(0, 0, 0, 0.05)",
        overflowY: "auto",
        transition: "all 0.3s ease",
      }}
    >
      {/* Overview Section */}
      <Typography 
        variant="subtitle1" 
        sx={{ 
          fontWeight: 600, 
          mb: 2, 
          color: "#2d3748",
          letterSpacing: "0.5px",
          pl: 1.5
        }}
      >
        Overview
      </Typography>
      
      <List sx={{ color: '#4a5568' }}>
        {/* App Item */}
        <ListItem 
          button 
          sx={{
            borderRadius: "8px",
            mb: 0.5,
            '&:hover': {
              backgroundColor: "#f0f4f9",
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <DashboardIcon sx={{ color: "#4a90e2", fontSize: "24px" }} />
          </ListItemIcon>
          <ListItemText 
            primary="App" 
            primaryTypographyProps={{ 
              fontWeight: 500, 
              fontSize: "0.95rem" 
            }} 
          />
        </ListItem>

        {/* Badges Item */}
        <ListItem 
          button 
          sx={{
            borderRadius: "8px",
            mb: 0.5,
            '&:hover': {
              backgroundColor: "#f0f4f9",
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <EmojiEventsIcon sx={{ color: "#f6ad55", fontSize: "24px" }} />
          </ListItemIcon>
          <ListItemText 
            primary="Badges" 
            primaryTypographyProps={{ 
              fontWeight: 500, 
              fontSize: "0.95rem" 
            }} 
          />
        </ListItem>

        {/* Categories Section */}
        <ListItem
          button
          onClick={handleListCategoClick}
          sx={{
            borderRadius: "8px",
            mb: 0.5,
            '&:hover': {
              backgroundColor: "#f0f4f9",
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <CategoryIcon sx={{ color: "#48bb78", fontSize: "24px" }} />
          </ListItemIcon>
          <ListItemText 
            primary="List Cours" 
            primaryTypographyProps={{ 
              fontWeight: 500, 
              fontSize: "0.95rem" 
            }} 
          />
          {openListCatego ? 
            <ExpandLess sx={{ color: "#718096" }} /> : 
            <ExpandMore sx={{ color: "#718096" }} />}
        </ListItem>
        
        {/* Nested Categories */}
        <Collapse in={openListCatego} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              "Littératie numérique (Digital Literacy)",
              "Médias et communication numérique",
              "Art et design numérique",
              "Cybersécurité et éthique numérique",
              "Sociologie et anthropologie numérique",
              "Programmation et technologies émergentes",
              "Storytelling et création de contenu",
              "Économie numérique et e-commerce",
              "Propriété intellectuelle et droit numérique",
              "Éducation et pédagogie numérique",
              "Environnement et numérique",
              "Recherche numérique et data science"
            ].map((text) => (
              <ListItem 
                button 
                key={text}
                sx={{ 
                  pl: 4,
                  borderRadius: "6px",
                  '&:hover': {
                    backgroundColor: "#ebf8ff",
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 24,
                    height: '60%',
                    width: '2px',
                    bgcolor: '#cbd5e0'
                  }
                }}
              >
                <ListItemText 
                  primary={text} 
                  primaryTypographyProps={{ 
                    fontSize: "0.875rem",
                    color: "#4a5568",
                    fontWeight: 500 
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default Sidebar;