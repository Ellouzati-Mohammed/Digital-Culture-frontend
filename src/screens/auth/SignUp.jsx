import React, { useState } from "react";

import { Container,Card,CardMedia,Box, CardContent, ButtonGroup,Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { ArrowForward, ArrowBack, Login } from "@mui/icons-material";
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
import  {EmailInput,NormalInput,PasswordInput} from "../../components/ValidationInputs";
import { API_ENDPOINTS } from "../../api/api";

const SignUpForm=()=>{
      const [formData, setFormData] = useState({password:"",email:"",fullname:""});
      const [errors, setErrors] = useState({ email: "", password: "",fullname :"" });
    
      const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!formData.email) newErrors.email = "L'email est requis";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Veuillez entrer une adresse email valide";
    
        if (!formData.password) newErrors.password = "Le mot de passe est requis";

        if (!formData.fullname) newErrors.fullname = "Le fullname est requis";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateForm();
    
        if (isValid) {
          
        }
      };
    return(
        <Box sx={formContainerStyle} component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" sx={titleStyle}>Sign Up</Typography>
          <Typography variant="span" sx={subtitleStyle}>Sign up to start learning</Typography>
     
             <NormalInput label='Full Name' placeholder='Your Full Name' 
                value={formData.fullname} 
                name="fullname"
                setValue={(e) => 
                  setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
                }
                error={errors.fullname} 
                icon={<PersonOutlinedIcon sx={inputIcon}/>}
              />
             <EmailInput email={formData.email} 
                setEmail={(newEmail) => 
                setFormData(prev => ({ ...prev, email: newEmail }))
                } 
                 error={errors.email} />
             <PasswordInput 
               password={formData.password} 
                setPassword={(newPassword) => 
                setFormData(prev => ({ ...prev, password: newPassword }))
                }  
                error={errors.password} />
             
             <Button type="submit" sx={submitButtonStyle}>
                Submit
             </Button>
             <Box sx={MotivationLabel}>
                <Typography variant="span" fontSize='1rem'>
                  Already have an account?
                </Typography>
                <Link to={'/'} style={linkStyle}>Sign In</Link>
             </Box>
         
        </Box>
      );
}


export default function SignUp(){
    return(
       <Container disableGutters maxWidth={false} sx={AuthContainer}>
         <SignUpForm/>
       </Container>
    );
}