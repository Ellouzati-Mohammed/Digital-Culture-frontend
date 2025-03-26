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
import { Lock } from "@mui/icons-material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { formContainerStyle, titleStyle, subtitleStyle, textFieldStyle, submitButtonStyle, linkStyle,inputLabel,inputIcon,inputStyle,MotivationLabel,AuthContainer} from "../../styles/AuthStyle"

const SignUpForm = () => {
  return (
    <Box sx={formContainerStyle}>
      <Typography variant="h5" sx={titleStyle}>Sign In</Typography>
      <Typography variant="span" sx={subtitleStyle}>Log in to access your courses</Typography>
      <form>
        <Box sx={{ marginBottom: 1 }}>
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
              sx: inputStyle
            }}
            sx={textFieldStyle}
          />
        </Box>
        <Box sx={{ marginBottom: 1 }}>
          <Typography component="span" sx={inputLabel}>Password</Typography>
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
              sx: inputStyle,
            }}
            sx={textFieldStyle}
          />
        </Box>
        <Button sx={submitButtonStyle}>Submit</Button>
        <Box sx={MotivationLabel}>
          <Typography variant="span" fontSize='1rem'>
            Don't have an account yet?
          </Typography>
          <Link to={'/'} style={linkStyle}>Sign Up</Link>
        </Box>
      </form>
    </Box>
  );
};

export default function SignUp() {
  return (
    <Container disableGutters maxWidth={false} sx={AuthContainer}>
      <SignUpForm />
    </Container>
  );
}