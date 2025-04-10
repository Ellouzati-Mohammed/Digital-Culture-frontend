import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NormalInput, SelectInput } from "../../ValidationInputs.jsx";
import { formadminTitle, boxadminForm, adminButtonContainer, adminAnnulerButton, adminAddButton, GlobaladminFormContainer } from '../../../styles/ManagementStyle.js';

function DomainMangement({ setShowNewDomainForm , domainData , onSubmit}) {
  
  const [formData, setFormData] = useState({
    domainTitle: "",
    domainDecription: "",
    level: "",
    domainImageUrl: "",
  });

  const [errors, setErrors] = useState({
    domainTitle: "",
    domainDecription: "",
    level: "",
    domainImageUrl: ""
  });

  useEffect(() => {
    if (domainData) {
      setFormData({
        domainTitle: domainData.domainTitle || "",
        domainDecription: domainData.domainDecription || "",
        level: domainData.level || "",
        domainImageUrl: domainData.domainImageUrl || "",
      });
    }
  }, [domainData]);

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

    if (!formData.domainTitle) {
      formErrors.domainTitle = "Le nom du domaine est requis";
      isValid = false;
    }

    if (!formData.domainDecription) {
      formErrors.domainDecription = "La domainDecription est requise";
      isValid = false;
    }

    if (!formData.level) {
      formErrors.level = "Le level est requis";
      isValid = false;
    }

    if (!formData.domainImageUrl) {
      formErrors.domainImageUrl = "L'URL de l'image est requise";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
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
          name='domainTitle'
          value={formData.domainTitle}
          setValue={handleChange}
          error={errors.domainTitle}
        />
        <NormalInput
          label='domainDecription'
          placeholder='Ex : Machine Learning'
          name='domainDecription'
          value={formData.domainDecription}
          setValue={handleChange}
          error={errors.domainDecription}
          multiline={true}
        />
        <SelectInput
          label='Choisir un level'
          placeholder='coisir un level'
          name='level'
          value={formData.level}
          setValue={handleChange}
          options={[
            { value: 1, label: 'Machine Learning' },
            { value: 2, label: 'Data Science' },
            { value: 3, label: 'AI' }
          ]}
          error={errors.level}
        />
        <NormalInput
          label="URL de l'image"
          placeholder='Ex : https://example.com/image.jpg'
          name='domainImageUrl'
          value={formData.domainImageUrl}
          setValue={handleChange}
          error={errors.domainImageUrl}
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
