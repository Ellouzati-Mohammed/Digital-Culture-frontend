import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { NormalInput, SelectInput } from "../ValidationInputs";
import { inputStyle } from '../../styles/AuthStyle';

import { formadminTitle, boxadminForm, adminButtonContainer, adminAnnulerButton, adminAddButton, GlobaladminFormContainer } from '../../styles/ManagementStyle.js';

function CoursManagement({ setShowNewCoursForm }) {
  const [formData, setFormData] = useState({
    CoursName: "",
    Description: "",
    Niveau: "",
    ImageUrl: ""
  });

  const [errors, setErrors] = useState({
    CoursName: "",
    Description: "",
    Niveau: "",
    ImageUrl: ""
  });

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

    if (!formData.CoursName) {
      formErrors.CoursName = "Le nom du cours est requis";
      isValid = false;
    }

    if (!formData.Description) {
      formErrors.Description = "La description est requise";
      isValid = false;
    }

    if (!formData.Niveau) {
      formErrors.Niveau = "Le niveau est requis";
      isValid = false;
    }

    if (!formData.ImageUrl) {
      formErrors.ImageUrl = "L'URL de l'image est requise";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Soumettre les données
      console.log("Formulaire soumis avec succès", formData);
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
          name='CoursName'
          value={formData.CoursName}
          setValue={handleChange}
          error={errors.CoursName}
        />
        <NormalInput
          label='Description'
          placeholder='Ex : Cours sur Machine Learning'
          name='Description'
          value={formData.Description}
          setValue={handleChange}
          error={errors.Description}
          multiline={true}
        />
        <SelectInput
          label='Choisir un niveau'
          placeholder='Choisir un niveau'
          name='Niveau'
          value={formData.Niveau}
          setValue={handleChange}
          options={[
            { value: 1, label: 'Machine Learning' },
            { value: 2, label: 'Data Science' },
            { value: 3, label: 'AI' }
          ]}
          error={errors.Niveau}
        />
        <NormalInput
          label='URL de l image'
          placeholder='Ex : https://imageurl.com'
          name='ImageUrl'
          value={formData.ImageUrl}
          setValue={handleChange}
          error={errors.ImageUrl}
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
