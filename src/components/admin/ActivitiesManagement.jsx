import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NormalInput, SelectInput } from "../ValidationInputs";
import { inputStyle } from '../../styles/AuthStyle';

import { formadminTitle, boxadminForm, adminButtonContainer, adminAnnulerButton, adminAddButton, GlobaladminFormContainer } from '../../styles/ManagementStyle.js';
import { type } from "@testing-library/user-event/dist/type/index.js";


const RESOURCE_TYPES = {
  VIDEO: 'video',
  PDF: 'pdf',
  QUIZ: 'quiz'
};

const INITIAL_STATE = {
  type: RESOURCE_TYPES.VIDEO,
  video: { videoUrl: '' },
  pdf: { pdfTitle: '', pdfUrl: '' },
  quiz: { 
    quizQuestion: '', 
    quizOptions: Array(4).fill(''), 
    quizCorrectAnswer: '' 
  }
};

function ActivityManagement({ setShowNewActivityForm ,ActivitiesData ,onSubmit}) {
  const isEditMode = !!ActivitiesData;
  const [formData, setFormData] = useState(useState(INITIAL_STATE));
  const [errors, setErrors] = useState(useState(INITIAL_STATE));


  const handleResourceChange = (type) => {
    setFormData(prev => ({ ...prev, type }));
  };

   useEffect(() => {
    if (isEditMode) {
      setFormData({
        type: ActivitiesData.type,
        [ActivitiesData.type]: ActivitiesData
      });
    }
  }, [ActivitiesData, isEditMode]);

  const handleChange = (event) => { 
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [prev.type]: { 
        ...prev[prev.type],
        [name]: value
      }
    }));
  };
  
  const handleQuizeOptionChange = (event,index) => {
    const { name, value }=event.target;
    setFormData((prev) => ({
      ...prev,
      quiz: {
        ...prev.quiz,
        quizOptions: prev.quiz.quizOptions.map((opt, i) => 
          i === index ? value : opt),
      },
    }));
  };


  const handleCancel = () => {
    setShowNewActivityForm(false);
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
 
    if (!formData.type) {
      alert('undefined Resource')
      return false;
    }

   
    if (formData.type === "video" && !formData.video.videoUrl) {
      formErrors.videoUrl = "L'URL de la vidéo est requise";
      isValid = false;
    }
    // Validation pour le PDF
    if (formData.type === "pdf") {
      if (!formData.pdf.pdfTitle) {
        formErrors.pdfTitle = "Le titre du PDF est requis";
        isValid = false;
      }
      if (!formData.pdf.pdfUrl) {
        formErrors.pdfUrl = "L'URL du PDF est requise";
        isValid = false;
      }
    }
    
    // Validation pour le Quiz
    if (formData.type === "quiz") {
      if (!formData.quiz.quizQuestion) {
        formErrors.quizQuestion = "La question du quiz est requise";
        isValid = false;
      }

      // Vérification que toutes les options sont remplies
      formErrors.quizOptions = formData.quiz.quizOptions.map((option, index) => {
        if (!option.trim()) {
          isValid = false;
          return `L'option ${index + 1} est requise`;
        }
        return null;
      });

      // Vérification d'une réponse correcte
      if (!formData.quiz.quizCorrectAnswer) {
        formErrors.quizCorrectAnswer = "La réponse correcte est requise";
        isValid = false;
      } 
    }

   setErrors({
    ...errors,
    type: formData.type,
    [formData.type] : formErrors
     
  });
  
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({ 
        type: formData.type,         // "video", "pdf", "quiz"
        ...formData[formData.type]  // { videoUrl }, { pdfTitle, pdfUrl }, etc.
      }); // envoyer seulement les donner dun seul resource
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
        {isEditMode ? 'Modifier la Ressource' : 'Ajouter une Ressource'}
        </Typography>
        <Box sx={{display:'flex',flexDirection:'row',backgroundColor:'#F1F5F9',fontSize:'.5rem',fontWeight:'500',justifyContent:'space-between'}}>
            <Button sx={{backgroundColor:'#FFFFFF',flexGrow:1,m:'.5rem',color:'black',transform: 'none'}} onClick={()=>handleResourceChange('video')}>video</Button>
            <Button sx={{flexGrow:1,m:'.5rem',color:'black',transform: 'none'}} onClick={()=>handleResourceChange('pdf')}>Pdf</Button>
            <Button sx={{flexGrow:1,m:'.5rem',color:'black',transform: 'none'}} onClick={()=>handleResourceChange('quiz')}>Quiz</Button>
        </Box>

        {formData.type==='video'&&
        <>
          <NormalInput
                    label='Url video'
                    placeholder='Ex : Machine Learning'
                    name='videoUrl'
                    value={formData.video.videoUrl}
                    setValue={handleChange}
                    error={errors.video.videoUrl}
          />
        </>
        }
        {formData.type==='pdf'&&
        <>
          <NormalInput
                    label='Pdf Title'
                    placeholder='Ex : JavaScript coockies'
                    name='pdfTitle'
                    value={formData.pdf.pdfTitle}
                    setValue={handleChange}
                    error={errors.pdf.pdfTitle}
          />
          <NormalInput
                    label='Url Pdf'
                    placeholder='Ex : '
                    name='pdfUrl'
                    value={formData.pdf.pdfUrl}
                    setValue={handleChange}
                    error={errors.pdf.pdfUrl}
          />
        </>
        }
        {formData.type==='quiz'&&
        <Box sx={{width:'100%'}}>
          <NormalInput
                    label='Quiz Question'
                    placeholder='Ex : Qu elle est le role de cookies'
                    name='quizQuestion'
                    value={formData.quiz.quizQuestion}
                    setValue={handleChange}
                    error={errors.quiz?.quizQuestion}
          />
          <Box sx={{Width: "100%",border:'solid 1px #CBD5E1',borderRadius:2,p:2}}>

            {formData.quiz.quizOptions.map((option, index) => (
              <NormalInput
               
                label={`Quiz Response ${index + 1}`}
                placeholder="Ex : Une option de réponse"
                name={`quizOptions${index}`}
                value={formData.quiz.quizOptions[index]}
                setValue={(event)=> handleQuizeOptionChange(event,index)}
                error={errors.quiz?.quizOptions?.[index]}
              />
            ))}
            <SelectInput
                    label='Choisir la repose correct'
                    placeholder='coisir un la quizCorrectAnswer'
                    name='quizCorrectAnswer'
                    value={formData.quiz.quizCorrectAnswer}
                    setValue={handleChange}
                    options={formData.quiz.quizOptions
                      .filter(opt => opt) // Filtrer les options vides
                      .map((opt, index) => ({ 
                        value: opt, 
                        label: opt || `Option ${index + 1}` 
                      }))}
                      error={errors.quiz?.quizCorrectAnswer}
          />
          </Box>
        </Box>
        }
        <Box sx={adminButtonContainer}>
          <Button sx={adminAnnulerButton} onClick={handleCancel}>
            Annuler
          </Button>
          <Button sx={adminAddButton} onClick={handleSubmit}>
            {isEditMode ? 'Modifier' : 'Ajouter'}
          </Button>
        </Box>
      </Box>
    </Container>,
    document.body // Rend indépendant du parent en le mettant dans <body>
  );
}

export default ActivityManagement;
