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
import { domain, domainImages } from "../services/DomainService.js"
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

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openDomain, setOpenDomain] = useState(false);
  
  return (
    <Box sx={SideBarContainer}>
      <Box sx={SideBarTitle}>
        <Typography variant="h6" sx={SideBarTitle}>
          Digital Culture for All
        </Typography>
      </Box>

      <List disablePadding>
        <Link to='/'  style={{ textDecoration: "none" }} >
          <ListItem button  sx={listItemStyle}>
            <ListItemIcon sx={IconSideStyle}>
              <Dashboard sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Domains Page" primaryTypographyProps={primaryTextStyle} />
          </ListItem>
        </Link>

        <ListItem button onClick={() => setOpenDomain(!openDomain)} sx={listItemStyle} >
          <ListItemIcon sx={IconSideStyle}>
            <Category sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="List des Domaines" primaryTypographyProps={primaryTextStyle} />
          {openDomain ? 
            <ExpandMore sx={FetchIcon} /> : 
            <ChevronRight sx={FetchIcon} />}
        </ListItem>

        <Collapse in={openDomain} timeout="auto" unmountOnExit>
          <List disablePadding sx={DomainList}>
            {domain.map((domain) => (
              <ListItem 
                key={domain.id}
                button 
                sx={ListItemMap}
              >
                 <Link 
                    to={`/DomainsCours/${domain.id}`} 
                    style={{ textDecoration: "none" }} 
                  >
                    <ListItemText 
                      primary={domain.title} 
                      {...listItemTextStyle} 
                    />
                </Link>
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