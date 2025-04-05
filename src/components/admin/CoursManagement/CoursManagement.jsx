import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NormalInput } from "../../ValidationInputs";
import { 
  formadminTitle, 
  boxadminForm, 
  adminButtonContainer, 
  adminAnnulerButton, 
  adminAddButton, 
  GlobaladminFormContainer 
} from '../../../styles/ManagementStyle';
import { INITIAL_COURS_STATE } from "../../../utils/constants.js";

function CoursManagement({ setShowNewCoursForm, CoursData, onSubmit }) {
  const [formData, setFormData] = useState(INITIAL_COURS_STATE);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (CoursData) {
      setFormData({
        ...INITIAL_COURS_STATE,
        ...CoursData
      });
    }
  }, [CoursData]);

  // Modification de la gestion du changement
  const handleChange = (eventOrValue) => {
    const { name, value } = eventOrValue.target ? 
      eventOrValue.target : 
      { name: eventOrValue.target?.name, value: eventOrValue.target?.value };
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.coursTitle.trim()) {
      newErrors.coursTitle = "Le nom du cours est requis";
      isValid = false;
    }

    if (!formData.coursSubtitle.trim()) {
      newErrors.coursSubtitle = "La description est requise";
      isValid = false;
    }
    
    const duration = Number(formData.estimated_time_minutes);
    if (!duration) {
      newErrors.estimated_time_minutes = "La durée estimée est requise";
      isValid = false;
    } else if (duration < 1) {
      newErrors.estimated_time_minutes = "La durée doit être supérieure à 0";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit({
      ...formData,
      estimated_time_minutes: Number(formData.estimated_time_minutes)
    });
    //ici on ajout se qu'on veuut si
  };

  const handleCancel = () => {
   
      setShowNewCoursForm(false);
    
  };

  return createPortal(
    <Container maxWidth={false} disableGutters sx={GlobaladminFormContainer}>
      <Box component='form' sx={boxadminForm} onSubmit={handleSubmit}>
        <Typography component='h2' sx={formadminTitle}>
          {CoursData ? 'Modifier le Cours' : 'Ajouter un Cours'}
        </Typography>

        {/* Modification des props passés à NormalInput */}
        <NormalInput
          label='Nom du Cours'
          placeholder='Ex : Machine Learning'
          name='coursTitle'
          value={formData.coursTitle}
          setValue={handleChange} // Changé de onChange à setValue
          error={errors.coursTitle}
        />

        <NormalInput
          label='Description du cours'
          placeholder='Ex : Cours complet sur le Machine Learning'
          name='coursSubtitle'
          value={formData.coursSubtitle}
          setValue={handleChange} // Changé de onChange à setValue
          error={errors.coursSubtitle}
          multiline
          minRows={3}
        />

        <NormalInput
          label='Durée estimée (minutes)'
          placeholder='Ex : 120'
          name='estimated_time_minutes'
          value={formData.estimated_time_minutes}
          setValue={handleChange} // Changé de onChange à setValue
          error={errors.estimated_time_minutes}
          type="number"
          inputProps={{ min: 1 }}
        />

        <Box sx={adminButtonContainer}>
          <Button 
            type="button"
            sx={adminAnnulerButton} 
            onClick={handleCancel}
          >
            Annuler
          </Button>
          <Button 
            type="submit"
            sx={adminAddButton}
          >
            {CoursData ? 'Modifier' : 'Ajouter'}
          </Button>
        </Box>
      </Box>
    </Container>,
    document.body
  );
}

export default CoursManagement;