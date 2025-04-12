import AllDomainsCard from "../components/DomainCard";

import { Box, Typography, Chip,Button } from "@mui/material";
import {HomeBox,WelcomCardMotivation,WelcomCardMotivationBox,WelcomCardMotivationTitle,WelcomCardMotivationText} from '../styles/HomeStyle'
import React, { lazy, useEffect, useMemo, useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {headerManagementTitle,titleManagementtxt,addButton} from '../styles/ManagementStyle'
import DomainMangement from "../components/admin/DomainManagement/DomainManagement";
import { role } from "../services/UserRole";
import useDomaines from "../hooks/useDomains";


function HomeScreen(){

  const [showNewDomainForm, setShowNewDomainForm] = useState(false); // État pour afficher le formulaire
  const { domaines, loading, fetchDomaines,updateExistingDomaine,createNewDomaine,deleteExistingDomaine } = useDomaines();

  const handleAddDomain = async (formData) => {

    try {
      await createNewDomaine(formData); 
      await fetchDomaines();
      setShowNewDomainForm(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du domaine : ", error);
    }
  };

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
            {role === "admin" && (
              <Box sx={headerManagementTitle}> 
                <Typography variant="h3" sx={titleManagementtxt}>
                  Gestion des Domaines
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                  sx={addButton}
                  onClick={() => setShowNewDomainForm(true)}
                >
                  Nouveau Domaine
                </Button>
              </Box>
            )}

            {role === "admin" && showNewDomainForm && (
              <DomainMangement 
                setShowNewDomainForm={setShowNewDomainForm} 
                onSubmit={handleAddDomain} 
              />
            )}
            <AllDomainsCard domaines={domaines}
  fetchDomaines={fetchDomaines}
  deleteExistingDomaine={deleteExistingDomaine}
  updateExistingDomaine={updateExistingDomaine}
  loading={loading}/>
        </Box>
    )
}
export default HomeScreen;