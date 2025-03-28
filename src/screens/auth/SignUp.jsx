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
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Lock } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { formContainerStyle, titleStyle, subtitleStyle, textFieldStyle, submitButtonStyle, linkStyle,inputLabel,inputIcon,inputStyle,MotivationLabel,AuthContainer} from "../../styles/AuthStyle"
import  {EmailInput,NormalInput,PasswordInput} from "../../components/ValidationInputs";


const SignUpForm=()=>{
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [fullname, setFullname] = useState("");
      const [errors, setErrors] = useState({ email: "", password: "",fullname :"" });
    
      const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email) newErrors.email = "L'email est requis";
        else if (!emailRegex.test(email)) newErrors.email = "Veuillez entrer une adresse email valide";
    
        if (!password) newErrors.password = "Le mot de passe est requis";

        if (!fullname) newErrors.fullname = "Le fullname est requis";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm();
    
        if (isValid) {
          console.log("Formulaire valide, soumission...");
          // Ici, on peut ajouter l'appel API pour soumettre le formulaire
        }
      };
    return(
        <Box sx={formContainerStyle} component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" sx={titleStyle}>Sign Up</Typography>
          <Typography variant="span" sx={subtitleStyle}>Sign up to start learning</Typography>
     
             <NormalInput label='Full Name' placeholder='Your Full Name' value={fullname} setValue={setFullname} error={errors.fullname} />
             <EmailInput email={email} setEmail={setEmail} error={errors.email} />
             <PasswordInput password={password} setPassword={setPassword} error={errors.password} />
             
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