import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { NormalInput, SelectInput } from "../ValidationInputs";
import { formadminTitle, boxadminForm, adminButtonContainer, adminAnnulerButton, adminAddButton, GlobaladminFormContainer } from '../../styles/ManagementStyle.js';

function DomainMangement({ setShowNewDomainForm }) {
  const [formData, setFormData] = useState({
    domainName: "",
    description: "",
    niveau: "",
    imageUrl: ""
  });

  const [errors, setErrors] = useState({
    domainName: "",
    description: "",
    niveau: "",
    imageUrl: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setShowNewDomainForm(false);
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.domainName) {
      formErrors.domainName = "Le nom du domaine est requis";
      isValid = false;
    }

    if (!formData.description) {
      formErrors.description = "La description est requise";
      isValid = false;
    }

    if (!formData.niveau) {
      formErrors.niveau = "Le niveau est requis";
      isValid = false;
    }

    if (!formData.imageUrl) {
      formErrors.imageUrl = "L'URL de l'image est requise";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Formulaire soumis avec succès", formData);
    }
  };

  return createPortal(
    <Container maxWidth={false} disableGutters sx={GlobaladminFormContainer}>
      <Box component='form' sx={boxadminForm}>
        <Typography component='h2' sx={formadminTitle}>
          Ajouter un Domaine
        </Typography>
        <NormalInput
          label='Nom du Domaine'
          placeholder='Ex : Machine Learning'
          name='domainName'
          value={formData.domainName}
          setValue={handleChange}
          error={errors.domainName}
        />
        <NormalInput
          label='Description'
          placeholder='Ex : Machine Learning'
          name='description'
          value={formData.description}
          setValue={handleChange}
          error={errors.description}
          multiline={true}
        />
        <SelectInput
          label='Choisir un niveau'
          name='niveau'
          value={formData.niveau}
          setValue={handleChange}
          options={[
            { value: 1, label: 'Machine Learning' },
            { value: 2, label: 'Data Science' },
            { value: 3, label: 'AI' }
          ]}
          error={errors.niveau}
        />
        <NormalInput
          label="URL de l'image"
          placeholder='Ex : https://example.com/image.jpg'
          name='imageUrl'
          value={formData.imageUrl}
          setValue={handleChange}
          error={errors.imageUrl}
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
    document.body
  );
}

export default DomainMangement;
