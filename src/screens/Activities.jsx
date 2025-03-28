import React, { useState } from "react";
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

const Vidio=()=>{
     return (
      <Box
        sx={vidioBoxStyle}
      >
          <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4E90e13_-2A" // Remplace par ton lien YouTube
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "12px" }} // Arrondir les bords comme l'image
        ></iframe>
     </Box>

    ) ;
}

const Quiz=()=>{
  const [selectedValue, setSelectedValue] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const trueValue='string'; //ici le correct response

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
     setIsSubmitted(true);
  };
  return (
    <Box sx={quizBoxStyle} component="form" onSubmit={handleSubmit} >
        <Typography variant="h6" sx={QuizQuestion} gutterBottom>
          <Box sx={questionBoxStyle}>
            1
          </Box>
          Which of the following is NOT a JavaScript data type?
        </Typography>
        <FormControl component="fieldset" fullWidth sx={isSubmitted?disabledStyleQuiz:{}}>
            <RadioGroup value={selectedValue} onChange={handleChange}>
              {["string", "boolean", "float", "object"].map((option) => (
                <Box
                  key={option}
                  sx={SelctedResponse(selectedValue, option, isSubmitted, trueValue)}
                >
                  <FormControlLabel value={option} control={<Radio />} label={option.charAt(0).toUpperCase() + option.slice(1)} componentsProps={{ typography: formControlLabelStyle }} sx={{ width: "100%"}} />
                </Box>
                
              ))}
              
            </RadioGroup>
            <Box sx={submitButtonStyleBox}>
              <Button type="submit" sx={submitButtonStyle}>
                submit
              </Button>
            </Box>
        </FormControl>
    </Box>
  );
}
function Activitie() {
 
  return (
    <Container
      disableGutters={true}
      sx={activitieContainerStyle}
    >
      <Box sx={cardBoxStyle}>
        <Typography variant="h2"sx={cardHeaderStyle}>
          Introduction à JavaScript
        </Typography>
        <Typography variant="p"sx={cardBodyStyle}>
          Introduction à JavaScript
        </Typography>
        <ButtonGroup variant="outlined" aria-label="navigation buttons" sx={buttonGroupStyle}>
          <Button sx={NavButton} startIcon={<ArrowBack />}>Previous</Button>
          <Button sx={NavButton}  endIcon={<ArrowForward />}>Next</Button>
        </ButtonGroup>

      </Box>
      {/* Titre "Video Lecture" */}
      <Box sx={resourceBoxContainer}>
          <Box
            sx={resourceBoxHeaderStyle}
          >
            <OndemandVideoIcon sx={resourceIcon('#60A5FA')} />
            <Typography fontSize={16} fontWeight={500}>
              Video Lecture
            </Typography>
          </Box>

          {/* Intégration de la vidéo YouTube */}
          <Vidio/>
          
          <Box
            sx={resourceBoxHeaderStyle}
          >
            <PictureAsPdfOutlinedIcon sx={resourceIcon('#EF4444')} />
            <Typography fontSize={16} fontWeight={500}>
              PDF and Article
            </Typography>
          </Box>
          <Box sx={pdfResource}>
            <Typography fontSize={16} fontWeight={500}>
               Support de cours :
            </Typography>
            <Link
              href="https://fad.umi.ac.ma/mod/resource/view.php?id=41659" // Remplace par le vrai chemin du fichier
              download
              sx={pdfLinkBoxStyle}
            >
              <CloudDownload sx={{ mr: 1 }} /> Télécharger le PDF
            </Link>
          </Box>
          <Box
            sx={resourceBoxHeaderStyle}
          >
            <HelpOutlineIcon sx={resourceIcon('#22C55E')}/>
            <Typography fontSize={16} fontWeight={500}>
              Quize
            </Typography>
          </Box>
          <Quiz/>
          <Quiz/>
         
      </Box>     
    </Container>
  );
}
export default Activitie;

