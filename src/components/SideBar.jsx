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
import { 
  listItemStyle, 
  iconStyle, 
  primaryTextStyle, 
  nestedItemStyle, 
  SideBarContainer, 
  SideBarBoxTitle, 
  SideBarTitle, 
  IconSideStyle, 
  FetchIcon, 
  DomainList, 
  ListItemMap, 
  listItemTextStyle, 
  DividerStyle 
} from '../styles/SideBar.js'



const Sidebar = () => {
  const [openCatego, setOpenCatego] = useState(false);
  
  return (
    <Box sx={SideBarContainer}>
      <Box sx={SideBarTitle}>
        <Typography variant="h6" sx={SideBarTitle}>
          Digital Culture for All
        </Typography>
      </Box>

      <List disablePadding>
        <ListItem button  sx={listItemStyle}>
          <ListItemIcon sx={IconSideStyle}>
            <Dashboard sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="App" primaryTypographyProps={primaryTextStyle} />
        </ListItem>

        <ListItem button sx={listItemStyle}>
          <ListItemIcon sx={IconSideStyle}>
            <EmojiEvents sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Badges"  primaryTypographyProps={primaryTextStyle} />
        </ListItem>

        <ListItem button onClick={() => setOpenCatego(!openCatego)} sx={listItemStyle} >
          <ListItemIcon sx={IconSideStyle}>
            <Category sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="List des Domaines" primaryTypographyProps={primaryTextStyle} />
          {openCatego ? 
            <ExpandMore sx={FetchIcon} /> : 
            <ChevronRight sx={FetchIcon} />}
        </ListItem>

        <Collapse in={openCatego} timeout="auto" unmountOnExit>
          <List disablePadding sx={DomainList}>
            {categories.map((item) => (
              <ListItem 
                key={item}
                button 
                sx={ListItemMap}
              >
                <ListItemText 
                  primary={item} 
                  {...listItemTextStyle} 
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider sx={DividerStyle} />

      <List disablePadding>
        <ListItem 
          button 
          sx={listItemStyle}
        >
          <ListItemIcon sx={IconSideStyle}>
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
          <ListItemIcon sx={IconSideStyle}>
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

export default Sidebar;