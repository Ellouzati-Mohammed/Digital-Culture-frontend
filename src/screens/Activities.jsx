import React, { useEffect, useState } from "react";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

import { Container,Card,CardMedia,Box, CardContent, ButtonGroup,Button,Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { CloudDownload } from "@mui/icons-material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import{ vidioBoxStyle,
  quizBoxStyle,
  questionBoxStyle, 
  formControlLabelStyle,
  submitButtonStyle,
  activitieContainerStyle,
  cardBoxStyle,
  cardHeaderStyle,
  cardBodyStyle,
  buttonGroupStyle,
  resourceBoxHeaderStyle,
  pdfLinkBoxStyle,
  SelctedResponse,submitButtonStyleBox,NavButton,resourceBoxContainer,resourceIcon,pdfResource,QuizQuestion,disabledStyleQuiz} from "../styles/ActivitiesStyle"
  import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
  import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { adminDeleteButton, adminButtonContainer,adminModifyButton } from '../styles/ManagementStyle.js';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {headerManagementTitle,titleManagementtxt,addButton} from '../styles/ManagementStyle'
import ActivityManagement from "../components/admin/ActivityManagement/ActivitiesManagement.jsx";




const Video = ({ videoId,videoUrl,setShowNewActivityForm,onType,handleDelete,handleModify,onEdit }) => {
  

  return (<>
    <Box sx={vidioBoxStyle}>
      <iframe
        width="100%"
        height="100%"
        src={videoUrl} // Le lien de la vidéo est dynamique maintenant
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "12px" }}
      ></iframe>
      <Box sx={adminButtonContainer}>
        <Button onClick={(e) => handleModify(e, "video")} sx={adminModifyButton} startIcon={<EditOutlinedIcon />}>
          Modify
        </Button>
        <Button onClick={(e) => handleDelete(e, "video")} sx={adminDeleteButton} startIcon={<DeleteOutlinedIcon />}>
          Delete
        </Button>
      </Box>
    </Box>
    
    </>
  );
};

const Quiz = ({ quizId,question, options, correctAnswer,setShowNewActivityForm,onType,handleDelete,handleModify,onEdit }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Box sx={quizBoxStyle} component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" sx={QuizQuestion} gutterBottom>
        <Box sx={questionBoxStyle}>
          1
        </Box>
        {question}
      </Typography>
      
      <FormControl component="fieldset" fullWidth sx={isSubmitted ? disabledStyleQuiz : {}}>
        <RadioGroup value={selectedValue} onChange={handleChange}>
          {options.map((option) => (
            <Box key={option} sx={SelctedResponse(selectedValue, option, isSubmitted, correctAnswer)}>
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={option.charAt(0).toUpperCase() + option.slice(1)}
                componentsProps={{ typography: formControlLabelStyle }}
                sx={{ width: "100%" }}
              />
            </Box>
          ))}
        </RadioGroup>
        <Box sx={submitButtonStyleBox}>
          <Button type="submit" sx={submitButtonStyle}>Submit</Button>
         
            <Button onClick={(e) => handleModify(e, "quiz")} sx={adminModifyButton} startIcon={<EditOutlinedIcon />}>
              Modify
            </Button>
            <Button onClick={(e) => handleDelete(e, "quiz")} sx={adminDeleteButton} startIcon={<DeleteOutlinedIcon />}>
              Delete
            </Button>
          
        </Box>
        
      </FormControl>
    </Box>
  );
};
const Pdf=({pdfId,link,setShowNewActivityForm,onType,handleDelete,handleModify,onEdit})=>{

  
  

  return (
      <Box sx={pdfResource}>
          <Typography fontSize={16} fontWeight={500}>
            Support de cours :
          </Typography>
          <Link href={link} download sx={pdfLinkBoxStyle}>
            <CloudDownload sx={{ mr: 1 }} /> Télécharger le PDF
          </Link>
          <Box sx={adminButtonContainer}>
            <Button onClick={(e) => handleModify(e, "pdf")} sx={adminModifyButton} startIcon={<EditOutlinedIcon />}>
              Modify
            </Button>
            <Button onClick={(e) => handleDelete(e, "pdf")} sx={adminDeleteButton} startIcon={<DeleteOutlinedIcon />}>
              Delete
            </Button>
        </Box>
      </Box>
  )
}



function Activitie() {
  const [role, setRole] = useState('admin');
  const [showNewActivityForm, setShowNewActivityForm] = useState(false); // État pour afficher le formulaire
  const [currentType, setCurrentType] = useState(null);
  const [selectedResourceData, setselectedResourceData] = useState(null);

  const handleAddResource = (resourceData) => {
    console.log("Données du formulaire a ajouter:", resourceData);
  };

  const handleDelete = (e,type,id) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('delet  : '+type+' id : '+id)
  };

  const handleModify = (e,resourceData) => {
    setShowNewActivityForm(true);
    setselectedResourceData(resourceData);
    console.log('add : ', resourceData);
  };
  

  return (
    <Container disableGutters={true} sx={activitieContainerStyle}>
      <Box sx={headerManagementTitle}>
        <Typography variant="h3" sx={titleManagementtxt}>
          Gestion des Ressources
        </Typography>
        <Button variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />} onClick={() => setShowNewActivityForm(true)} sx={addButton}>
          Nouveau Ressource
        </Button>
      </Box>
      {role === "admin" && showNewActivityForm && (
          <ActivityManagement setShowNewActivityForm={setShowNewActivityForm} onSubmit={handleAddResource} />
      )}

      <Box sx={cardBoxStyle}>
        <Typography variant="h2" sx={cardHeaderStyle}>
          Introduction à JavaScript
        </Typography>
        <Typography variant="p" sx={cardBodyStyle}>
          Introduction à JavaScript
        </Typography>
        <ButtonGroup variant="outlined" aria-label="navigation buttons" sx={buttonGroupStyle}>
          <Button sx={NavButton} startIcon={<ArrowBack />}>Previous</Button>
          <Button sx={NavButton} endIcon={<ArrowForward />}>Next</Button>
        </ButtonGroup>
      </Box>

      {/* Titre "Video Lecture" */}
      <Box sx={resourceBoxContainer}>
        <Box sx={resourceBoxHeaderStyle}>
          <OndemandVideoIcon sx={resourceIcon('#60A5FA')} />
          <Typography fontSize={16} fontWeight={500}>
            Video Lecture
          </Typography>
        </Box>

        {/* Intégration de la vidéo YouTube */}
        <Video 
          videoId={1} 
          videoUrl="https://www.youtube.com/embed/4E90e13_-2A"
          handleDelete={(e)=>handleDelete(e,'video',2)}
          handleModify={(e) => handleModify(e, {
            id: 1, // Ajouter un ID unique
            type: 'video',
            videoUrl: "https://www.youtube.com/embed/4E90e13_-2A"
          })}
        />
        <Box sx={resourceBoxHeaderStyle}>
          <PictureAsPdfOutlinedIcon sx={resourceIcon('#EF4444')} />
          <Typography fontSize={16} fontWeight={500}>
            PDF and Article
          </Typography>
        </Box>
        
        <Pdf pdfId={2} link='https://fad.umi.ac.ma/mod/resource/view.php?id=41659' handleDelete={(e)=>handleDelete(e,'pdf',2)} handleModify={(e) => handleModify(e, {
            id: 5, // Ajouter un ID unique
            type: 'pdf',
            pdfUrl:'https://fad.umi.ac.ma/mod/resource/view.php?id=41659',
          })}/>

        <Box sx={resourceBoxHeaderStyle}>
          <HelpOutlineIcon sx={resourceIcon('#22C55E')} />
          <Typography fontSize={16} fontWeight={500}>
            Quiz
          </Typography>
        </Box>
        <Quiz quizId={4} question="Which of the following is NOT a JavaScript data type?" options={["string", "boolean", "float", "object"]} correctAnswer="float" handleDelete={(e)=>handleDelete(e,'quiz',5)} 
          handleModify={(e) => handleModify(e ,{
            id: 4,
            type: 'quiz',
            quizQuestion:'"Which of the following is NOT a JavaScript data type?',
            quizOptions:["string", "boolean", "float", "object"],
            quizCorrectAnswer : 'float'
          })} />
        <Quiz quizId={6} question="What is the result of 2 + '2' in JavaScript?" options={["22", "4", "undefined", "NaN"]} correctAnswer="22" handleDelete={(e)=>handleDelete(e,'quiz',5)} 
          handleModify={(e) => handleModify(e,{
            id: 4,
            type: 'quiz',
            quizQuestion:'"Which of the following is NOT a JavaScript data type?',
            quizOptions:["string", "boolean", "float", "object"],
            quizCorrectAnswer : 'float'
          })} />
        {role === 'admin' && showNewActivityForm && (
          <ActivityManagement 
            setShowNewActivityForm={setShowNewActivityForm} 
            onSubmit={selectedResourceData ? handleModify : handleAddResource}
            ActivitiesData={selectedResourceData}
          />
)}
      </Box>
    </Container>
  );
}

export default Activitie;

