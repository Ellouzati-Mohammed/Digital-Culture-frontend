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
import { domain } from "../services/DomainService.js";
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
} from '../styles/SideBar.js';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openDomain, setOpenDomain] = useState(false);
  
  // Toggle domain list visibility
  const handleDomainToggle = () => {
    setOpenDomain((prevState) => !prevState);
  };

  return (
    <Box sx={SideBarContainer}>
      <Box sx={SideBarTitle}>
        <Typography variant="h6" sx={SideBarTitle}>
          Digital Culture for All
        </Typography>
      </Box>

      <List disablePadding>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem button sx={listItemStyle} aria-label="Go to domains page">
            <ListItemIcon sx={IconSideStyle}>
              <Dashboard sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Domains Page" primaryTypographyProps={primaryTextStyle} />
          </ListItem>
        </Link>

        <ListItem button onClick={handleDomainToggle} sx={listItemStyle} aria-expanded={openDomain}>
          <ListItemIcon sx={IconSideStyle}>
            <Category sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="List of Domains" primaryTypographyProps={primaryTextStyle} />
          {openDomain ? 
            <ExpandMore sx={FetchIcon} /> : 
            <ChevronRight sx={FetchIcon} />}
        </ListItem>

        <Collapse in={openDomain} timeout="auto" unmountOnExit>
          <List disablePadding sx={DomainList}>
            {domain.map((domainItem) => (
              <ListItem 
                key={domainItem.id} 
                button 
                sx={ListItemMap}
                component={Link}
                to={`/DomainsCours/${domainItem.id}`} 
                aria-label={`Go to ${domainItem.title} courses`}
              >
                <ListItemText 
                  primary={domainItem.title} 
                  {...listItemTextStyle} 
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider sx={DividerStyle} />

      <List disablePadding>
        <ListItem button sx={listItemStyle} aria-label="Go to settings">
          <ListItemIcon sx={IconSideStyle}>
            <Settings sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Settings" primaryTypographyProps={primaryTextStyle} />
        </ListItem>

        <ListItem button sx={listItemStyle} aria-label="Go to help">
          <ListItemIcon sx={IconSideStyle}>
            <HelpOutline sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Help" primaryTypographyProps={primaryTextStyle} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
