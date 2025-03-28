import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import {
  AppBareStyle,
  FirstSec,
  Logo,
  LogoTitle,
  Navigation,
  SelectedButtonNavigation,
  ButtonNavigation,
  SecondSec,
  PersonalInfo,
  AvatarStyle,
  FullName,
  LogOutButton,
  LogOutIcon,
  BoxLogo
} from '../styles/NavBarStyle'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <AppBar sx={AppBareStyle}>
      <Toolbar>
        <Box sx={FirstSec}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box sx={BoxLogo}>
                <DesktopWindowsOutlinedIcon sx={Logo} />
                <Typography variant="h6" sx={LogoTitle}>
                  Digital-Culture
                </Typography>
              </Box>
          </Link>
          <Box sx={Navigation}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit" sx={SelectedButtonNavigation}>
              Home
            </Button>
          </Link>
            
            <Button color="inherit" sx={ButtonNavigation}>
              Plans
            </Button>
            <Button color="inherit" sx={ButtonNavigation}>
              About Us
            </Button>
          </Box>
        </Box>

        <Box sx={SecondSec}>
        <Link to="/Profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={PersonalInfo}>
              <Avatar
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                sx={AvatarStyle}
              />
              <Typography variant="body1" sx={FullName}>
                Mohammed Ellouzati
              </Typography>
            </Box>
        </Link>
          {/* Log Out Button */}
          <Button variant="outlined" sx={LogOutButton} >
            <LogoutIcon sx={LogOutIcon}/>
            Log Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;