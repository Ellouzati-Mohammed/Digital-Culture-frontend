import React, { useState } from "react";
import { Container,Card,CardMedia,Box, CardContent, ButtonGroup,Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { CloudDownload } from "@mui/icons-material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";
import { Lock } from "@mui/icons-material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { formContainerStyle, titleStyle, subtitleStyle, textFieldStyle, submitButtonStyle, linkStyle,inputLabel,inputIcon,inputStyle,MotivationLabel,AuthContainer} from "../styles/AuthStyle"

const PasswordInput = ({ password, setPassword, error }) => {
    return (
      <Box sx={{ marginBottom: 1 }}>
        <Typography component="span" sx={inputLabel}>Password</Typography>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error}
          helperText={error}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon sx={inputIcon} />
              </InputAdornment>
            ),
            sx: inputStyle,
          }}
          sx={textFieldStyle}
        />
      </Box>
    );
  };
  
  const EmailInput = ({ email, setEmail, error }) => {
    return (
      <Box sx={{ marginBottom: 1 }}>
        <Typography variant="span" sx={inputLabel}>Email</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon sx={inputIcon} />
              </InputAdornment>
            ),
            sx: inputStyle,
          }}
          sx={textFieldStyle}
        />
      </Box>
    );
  };
  const NormalInput = ({ label,placeholder,value, setValue, error }) => {
   return (
     <Box sx={{ marginBottom: 1 }}>
       <Typography variant="span" sx={inputLabel}>{label}</Typography>
       <TextField
         fullWidth
         variant="outlined"
         placeholder={placeholder}
         value={value}
         onChange={(e) => setValue(e.target.value)}
         error={!!error}
         helperText={error}
         InputProps={{
           startAdornment: (
             <InputAdornment position="start">
               <EmailOutlinedIcon sx={inputIcon} />
             </InputAdornment>
           ),
           sx: inputStyle,
         }}
         sx={textFieldStyle}
       />
     </Box>
   );
 };

export  {EmailInput,PasswordInput,NormalInput}