import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NormalInput, SelectInput } from "../ValidationInputs";
import { inputStyle } from '../../styles/AuthStyle';

import { formadminTitle, boxadminForm, adminButtonContainer, adminAnnulerButton, adminAddButton, GlobaladminFormContainer } from '../../styles/ManagementStyle.js';

function CoursManagement({ setShowNewCoursForm ,CoursData , onSubmit }) {
  const [formData, setFormData] = useState({
    coursTitle: "",
    coursSubtitle: "",
    estimated_time_minutes: ""
  });

  const [errors, setErrors] = useState({
    coursTitle: "",
    coursSubtitle: "",
    estimated_time_minutes: ""
  });

  useEffect(() => {
    if (CoursData) {
      setFormData({
        coursTitle: CoursData.coursTitle || "",
        coursSubtitle: CoursData.coursSubtitle || "",
        estimated_time_minutes: CoursData.estimated_time_minutes || "",
      });
    }
  }, [CoursData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setShowNewCoursForm(false);
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.coursTitle) {
      formErrors.coursTitle = "Le nom du cours est requis";
      isValid = false;
    }

    if (!formData.coursSubtitle) {
      formErrors.coursSubtitle = "La coursSubtitle est requise";
      isValid = false;
    }
    
    if (!formData.estimated_time_minutes) {
      formErrors.estimated_time_minutes = "Le estimated_time_minutes est requise";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData)
    }
  };

  return createPortal(
    <Container
      maxWidth={false}
      disableGutters
      sx={GlobaladminFormContainer}
    >
      <Box component='form' sx={boxadminForm}>
        <Typography component='h2' sx={formadminTitle}>
          Ajouter un Cours
        </Typography>
        <NormalInput
          label='Nom du Cours'
          placeholder='Ex : Machine Learning'
          name='coursTitle'
          value={formData.coursTitle}
          setValue={handleChange}
          error={errors.coursTitle}
        />
        <NormalInput
          label='coursSubtitle'
          placeholder='Ex : Cours sur Machine Learning'
          name='coursSubtitle'
          value={formData.coursSubtitle}
          setValue={handleChange}
          error={errors.coursSubtitle}
          multiline={true}
        />
        <NormalInput
          label='estimated_time_minutes'
          placeholder='Ex : 15 min'
          name='estimated_time_minutes'
          value={formData.estimated_time_minutes}
          setValue={handleChange}
          error={errors.estimated_time_minutes}
        />
        
        <Box sx={adminButtonContainer}>
          <Button sx={adminAnnulerButton} onClick={handleCancel}>
            Annuler
          </Button>
          <Button sx={adminAddButton} onClick={handleSubmit}>
            Ajouter
          </Button>
        </Box>
      </Box>
    </Container>,
    document.body // Rend indépendant du parent en le mettant dans <body>
  );
}

export default CoursManagement;
