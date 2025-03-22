import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: "1px solid #e0e0e0",
       backgroundColor :"#FFFFFF"
      }}
    >
      <Toolbar>
        {/* Logo and Navigation Links */}
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1, gap: 3 }}>
          {/* Logo */}
          <Avatar src="logo.png" sx={{ bgcolor: "#4285F4" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Digital-Culture
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 3, ml: 5 }}>
            <Button color="inherit" sx={{ fontWeight: "bold", color: "#333" }}>
              Home
            </Button>
            <Button color="inherit" sx={{ color: "#666" }}>
              Classes
            </Button>
            <Button color="inherit" sx={{ color: "#666" }}>
              Plans
            </Button>
            <Button color="inherit" sx={{ color: "#666" }}>
              About Us
            </Button>
          </Box>
        </Box>

        {/* User Info Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Avatar */}
          <Avatar
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            sx={{
              width: 35,
              height: 35,
              border: "2px solid #4caf50",
            }}
          />
          {/* Name */}
          <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
            Mohammed Ellouzati
          </Typography>
          {/* Log Out Button */}
          <Button
            variant="outlined"
            sx={{
              color: "gray",
              borderColor: "gray",
              textTransform: "none",
            }}
          >
            <LogoutIcon sx={{fontSize:18,mr:1}}/>
            Log Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
const Navbar2 = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: "1px solid #e0e0e0",
       backgroundColor :"#FFFFFF",
       px:" 2rem",
       fontFamily:'ui-sans-serif, system-ui, sans-serif'
      }}
    >
      <Toolbar>
        {/* Logo and Navigation Links */}
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          {/* Logo */}
          <DesktopWindowsOutlinedIcon sx={{ color: "#4285F4",mr:1 }} />
          <Typography variant="h6" sx={{ fontWeight: "600", color: "#333",fontFamily: 'inherit',fontSize:'1.125rem' }}>
            Digital-Culture
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 3, ml: 5,fontweight: '500',fontSize:'.875rem' }}>
            <Button color="inherit" sx={{ fontWeight: "bold", color: "#333",fontFamily: 'inherit' }}>
              Home
            </Button>
            <Button color="inherit" sx={{ color: "#666",fontFamily: 'inherit' }}>
              Classes
            </Button>
            <Button color="inherit" sx={{ color: "#666",fontFamily: 'inherit' }}>
              Plans
            </Button>
            <Button color="inherit" sx={{ color: "#666",fontFamily: 'inherit' }}>
              About Us
            </Button>
          </Box>
        </Box>

        {/* User Info Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>
          {/* Avatar */}
          <Box sx={{display: "flex",flexDirection:'row',alignItems: "center"}}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              sx={{
                width: '2rem',
                fontweight: 500,
                fontSize:'.875rem',
                height: '2rem',
                mr:1
              }}
            />
            {/* Name */}
            <Typography variant="body1" sx={{ color: "#333",fontFamily: 'inherit',fontSize:'.875rem',fontWeight:500 }}>
              Mohammed Ellouzati
            </Typography>
          </Box>
          {/* Log Out Button */}
          <Button
            variant="outlined"
            sx={{
              color: "gray",
              borderColor: "gray",
              textTransform: "none",
            }}
          >
            <LogoutIcon sx={{fontSize:18,mr:1}}/>
            Log Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


export  {Navbar,Navbar2};