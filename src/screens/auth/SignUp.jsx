import React from "react";

import { Container,Card,CardMedia,Box, CardContent, ButtonGroup,Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { CloudDownload } from "@mui/icons-material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Lock } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { formContainerStyle, titleStyle, subtitleStyle, textFieldStyle, submitButtonStyle, linkStyle,inputLabel,inputIcon,inputStyle,MotivationLabel,AuthContainer} from "../../styles/AuthStyle"


const SignInForm=()=>{
    return(
        <Box sx={formContainerStyle}>
          <Typography variant="h5" sx={titleStyle}>Sign Up</Typography>
          <Typography variant="span" sx={subtitleStyle}>Sign up to start learning</Typography>
          <form >
             <Box sx={{mb:1}}>
             <Typography variant="span" sx={inputLabel}>Full Name</Typography>
                   <TextField
                   fullWidth
                   variant="outlined"
                   placeholder="Your Full Name"
                   InputProps={{
                      startAdornment: (
                      <InputAdornment position="start">
                         <PersonOutlineOutlinedIcon sx={inputIcon} />
                      </InputAdornment>
                      ),
                      sx:inputStyle
                   }}
                   sx={textFieldStyle}
                   />
             </Box>
             <Box sx={{mb:1}}>
               <Typography variant="span" sx={inputLabel}>Email</Typography>
                     <TextField
                     fullWidth
                     variant="outlined"
                     placeholder="your@email.com"
                     InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                           <EmailOutlinedIcon sx={inputIcon} />
                        </InputAdornment>
                        ),
                        sx:inputStyle
                     }}
                     sx={textFieldStyle}
                     />
               </Box>
             <Box sx={{mb:1}}>
                <Typography component="span" sx={inputLabel}>
                Password
                </Typography>
    
                {/* Champ de texte avec icône */}
                <TextField
                fullWidth
                variant="outlined"
                type="password"
                placeholder="••••••••"
                InputProps={{
                   startAdornment: (
                      <InputAdornment position="start">
                      <LockOutlinedIcon sx={inputIcon} />
                      </InputAdornment>
                   ),
                   sx: inputStyle, // Supprime le padding du champ
                }}
                sx={textFieldStyle}
                />
             </Box>
             <Button sx={submitButtonStyle}>
                Submit
             </Button>
             <Box sx={MotivationLabel}>
                <Typography variant="span" fontSize='1rem'>
                  Already have an account?
                </Typography>
                <Link to={'/'} style={linkStyle}>Sign In</Link>
             </Box>
          </form>
        </Box>
      );
}


export default function SignIn(){
    return(
       <Container disableGutters maxWidth={false} sx={AuthContainer}>
         <SignInForm/>
       </Container>
    );
}