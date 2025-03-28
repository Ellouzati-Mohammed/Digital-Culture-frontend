import { Avatar, Box, Button, Container, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { 
   ProfileContainer, 
   ProfileBox, 
   HeaderProfiletop,
   HeaderProfilebot, 
   HeaderProfileIcon, 
   HeaderTextProfile, 
   HeaderH2, 
   HeaderSpan, 
   textFieldStyle, 
   inputStyle, 
   inputIcon, 
   AvatarBox, 
   AvatarStyle, 
   FullNameSpan, 
   EmailSpan, 
   ModificationBox, 
   InputLabel, 
   ButtonBox, 
   ButtonSubmit 
} from '../styles/ProfileStyle';
import {EmailInput, NormalInput} from "../components/ValidationInputs";



function Profile() {
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

    return (
        <Container sx={ProfileContainer}>
            <Box sx={ProfileBox}>
                <Box sx={HeaderProfiletop}>
                    <AccountCircleOutlinedIcon sx={HeaderProfileIcon}/>
                    <Box sx={HeaderTextProfile}>
                        <Typography component="h2" sx={HeaderH2}>
                            Mon Profil
                        </Typography>
                        <Typography component="span" sx={HeaderSpan}>
                            Gérez vos informations personnelles
                        </Typography>
                    </Box>
                </Box>
                <Box sx={HeaderProfilebot}>
                    <Box sx={AvatarBox}>
                        <Avatar
                            src="https://via.placeholder.com/150"
                            alt="User Avatar"
                            sx={AvatarStyle}
                        />
                        <Typography component="span" sx={FullNameSpan}>
                            Mohammed Ellouzati
                        </Typography>
                        <Typography component="span" sx={EmailSpan}>
                            MohammedEllouzati@gmail.com
                        </Typography>
                    </Box>

                    {/* Formulaire */}
                    <Box sx={ModificationBox} component="form" onSubmit={handleSubmit}>
                        <NormalInput label='Full Name' placeholder='Your Full Name' value={fullname} setValue={setFullname} error={errors.fullname} />
            

                         <EmailInput email={email} setEmail={setEmail} error={errors.email} />

                        <Box sx={ButtonBox}>
                            <Button sx={ButtonSubmit} type="submit">
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}


export default Profile;
