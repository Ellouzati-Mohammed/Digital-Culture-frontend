import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Divider
} from "@mui/material";
import {
  Dashboard,
  EmojiEvents,
  Category,
  ExpandMore,
  ChevronRight,
  Settings,
  HelpOutline
} from "@mui/icons-material";
import { categories, categoryImages } from "../services/categoryService.js"

const Sidebar = () => {
  const [openCatego, setOpenCatego] = useState(false);
  

  return (
    <Box
      sx={{
        width: 280,
        borderRight: '1px solid #f0f0f0',
        backgroundColor: 'white',
        padding: '24px 16px',
        overflowY: 'auto'
      }}
      
    >
      {/* Logo Section */}
      <Box sx={{ padding: '0 12px 24px 12px' }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 700, 
          letterSpacing: '-0.5px',
          color: '#6366f1' // Couleur principale
        }}>
          Digital Culture for All
        </Typography>
      </Box>

      {/* Overview Section */}
      <List disablePadding>
        <ListItem 
          button 
          sx={listItemStyle}
        >
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <Dashboard sx={iconStyle} />
          </ListItemIcon>
          <ListItemText 
            primary="App" 
            primaryTypographyProps={primaryTextStyle} 
          />
        </ListItem>

        <ListItem 
          button 
          sx={listItemStyle}
        >
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <EmojiEvents sx={iconStyle} />
          </ListItemIcon>
          <ListItemText 
            primary="Badges" 
            primaryTypographyProps={primaryTextStyle} 
          />
        </ListItem>

        {/* List Cours Section */}
        <ListItem
          button
          onClick={() => setOpenCatego(!openCatego)}
          sx={listItemStyle}
        >
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <Category sx={iconStyle} />
          </ListItemIcon>
          <ListItemText 
            primary="List des Domaines" 
            primaryTypographyProps={primaryTextStyle} 
          />
          {openCatego ? 
            <ExpandMore sx={{ color: '#94a3b8', fontSize: 20 }} /> : 
            <ChevronRight sx={{ color: '#94a3b8', fontSize: 20 }} />}
        </ListItem>

        <Collapse in={openCatego} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ pl: 3 }}>
            {categories.map((item) => (
              <ListItem 
                key={item}
                button 
                sx={{
                  ...nestedItemStyle,
                  '&:hover': {
                    backgroundColor: '#f8fafc',
                    borderLeft: '2px solid #e2e8f0'
                  }
                }}
              >
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: '#475569'
                  }} 
                  sx={{ pl: 2.5 }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider sx={{ my: 2, borderColor: '#f1f5f9' }} />

      {/* Settings Section */}
      <List disablePadding>
        <ListItem 
          button 
          sx={listItemStyle}
        >
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <Settings sx={iconStyle} />
          </ListItemIcon>
          <ListItemText 
            primary="Settings" 
            primaryTypographyProps={primaryTextStyle} 
          />
        </ListItem>

        <ListItem 
          button 
          sx={listItemStyle}
        >
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <HelpOutline sx={iconStyle} />
          </ListItemIcon>
          <ListItemText 
            primary="Aide" 
            primaryTypographyProps={primaryTextStyle} 
          />
        </ListItem>
      </List>
    </Box>
  );
};

// Styles réutilisables
const listItemStyle = {
  borderRadius: '8px',
  mb: '4px',
  '&:hover': {
    backgroundColor: '#f8fafc',
    borderLeft: '3px solid #e2e8f0'
  },
  '&.Mui-selected': {
    backgroundColor: '#f1f5f9',
    borderLeft: '3px solid #6366f1',
    '&:hover': { backgroundColor: '#f1f5f9' }
  }
};

const iconStyle = { 
  fontSize: 20, 
  color: '#64748b' 
};

const primaryTextStyle = { 
  fontSize: 14, 
  fontWeight: 600,
  color: '#1e293b'
};

const nestedItemStyle = {
  borderRadius: '6px',
  mb: '2px',
  pl: '24px',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '12px',
    height: '60%',
    width: '2px',
    bgcolor: '#cbd5e1'
  }
};

export default Sidebar;