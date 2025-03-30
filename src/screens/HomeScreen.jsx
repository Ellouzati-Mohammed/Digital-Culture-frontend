import AllDomainsCard from "../components/DomainCard";

import { Box, Typography, Chip,Button } from "@mui/material";
import {HomeBox,WelcomCardMotivation,WelcomCardMotivationBox,WelcomCardMotivationTitle,WelcomCardMotivationText} from '../styles/HomeStyle'
import React, { lazy, useEffect, useMemo, useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {headerManagementTitle,titleManagementtxt,addButton} from '../styles/ManagementStyle'
import DomainMangement from "../components/admin/DomainManagement";


function HomeScreen(){
  const [role, setRole] = useState('admin');
  const [showNewDomainForm, setShowNewDomainForm] = useState(false); // État pour afficher le formulaire

    return (
        <Box sx={HomeBox}>
            {!(role.toLowerCase()==='admin') && <Box sx={WelcomCardMotivation}>
              <Box sx={WelcomCardMotivationBox}>
                <Typography variant="h2" sx={WelcomCardMotivationTitle}>
                  Explorez le Monde Numérique
                </Typography>
                <Typography variant="h5" sx={WelcomCardMotivationText}>
                  10 Domaines de Connaissance à Découvrir
                </Typography>
              </Box>
            </Box>}

            <Box sx={headerManagementTitle}> 
                <Typography variant="h3" sx={titleManagementtxt}>
                Gestion des Domaines
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineOutlinedIcon/>}
                  sx={addButton}
                  onClick={() => setShowNewDomainForm(true)}
                >
                  Nouveau Domaine
                </Button>
            </Box>
            {role === "admin" && showNewDomainForm && (
                <DomainMangement setShowNewDomainForm={setShowNewDomainForm} />
            )}
            <AllDomainsCard role={role}/>
        </Box>
    )
}
export default HomeScreen;