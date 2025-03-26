import React from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  CssBaseline,
  Typography,
  Chip,
  LinearProgress,
  Card,
  CardContent,
  Grid,
  IconButton,
  useTheme
} from '@mui/material';
import {
  Home as HomeIcon,
  VideoLibrary as VideoIcon,
  Article as ArticleIcon,
  Quiz as QuizIcon,
  CheckCircle,
  RadioButtonUnchecked
} from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TimeDifference from '../services/TimeDifference';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Link } from "react-router-dom";
import {ActivityboxStyle,ActivityContainer,ActivityTime,ActivityTimeTxt,ActivityTiltleTxt,ActivitySubTiltleTxt,TaskIcon,RadioBut,CoursDomainContainer
  ,SelectedDomainContainer,SelectedDomainGlobalInfoText,SelectedDomainGlobalInfoItem,SelectedDomainchildrenContainer,SelectedDomainLevel,SelectedDomainnbrCours,
  SelectedDomainTitle,SelectedDomainDescription,SelectedDomainGlobalInfoContainer,CoursDomainSecContainer,AllCoursContainer,AllCoursSecContainer,HeaderTitle
  } from '../styles/CoursDomainPageStyle'

const SelctedDomainInfo=({nbrCours,domain_Title,domain_Description,last_Update,publiched_Date,nbr_Enroll})=>{

  const timeDifference=TimeDifference(last_Update);

  return ( 
            <Box sx={SelectedDomainContainer}>
              <Box sx={SelectedDomainchildrenContainer}> 
                <Chip label="Intermediate" sx={SelectedDomainLevel} />
                <Typography component="span" sx={SelectedDomainnbrCours}>
                  {nbrCours} Cours
                </Typography>
              </Box>
              <Box sx={SelectedDomainchildrenContainer}>
                <Typography variant="h1" sx={SelectedDomainTitle}>
                  {domain_Title}
                </Typography>
              </Box>
              <Box sx={SelectedDomainchildrenContainer}>
                <Typography variant="body1" component="p" sx={SelectedDomainDescription}>
                  {domain_Description}
                </Typography>
              </Box>
              <Box sx={SelectedDomainGlobalInfoContainer}>
                <Box sx={SelectedDomainGlobalInfoItem}>
                    <Typography sx={SelectedDomainGlobalInfoText}>
                      <AccessTimeIcon sx={{fontSize: "16px",mr:'4px'}}/>
                      Last updated {timeDifference} ago
                    </Typography>
                </Box>
                <Box sx={SelectedDomainGlobalInfoItem}>
                    <Typography sx={SelectedDomainGlobalInfoText}>
                      <CalendarTodayIcon sx={{fontSize: "14px",mr:'4px'}}/>
                      Published {publiched_Date}
                    </Typography>
                </Box>
                <Box sx={SelectedDomainGlobalInfoItem}>
                    <Typography sx={SelectedDomainGlobalInfoText}>
                      <PeopleOutlineIcon sx={{fontSize: "16px",mr:'4px'}}/>
                      {nbr_Enroll} enrolled
                    </Typography>
                    
                </Box>
              </Box>
            
            </Box>
  );
}

const Activitie =({type,estimated_time_minutes,activitie_title,activitie_subtitle,isCompleted})=>{

  const completeIcon=(isCompleted)=>{
   if(isCompleted)
    return <TaskAltIcon sx={TaskIcon}/>;
   else
   return <RadioButtonUncheckedIcon sx={RadioBut}/>;
  }

  return(  
            <Box sx={ActivityboxStyle(isCompleted)}>
              {completeIcon(isCompleted)}
              <Box sx={ActivityContainer}>
                <Box sx={ActivityTime}>
                    <Typography variant="span" sx={ActivityTimeTxt}>
                        {estimated_time_minutes}min
                    </Typography>
                </Box>
                  <Typography variant="h3" sx={ActivityTiltleTxt}>
                    {activitie_title}
                  </Typography>
                  <Typography variant="p" sx={ActivitySubTiltleTxt}>
                    {activitie_subtitle}
                  </Typography>
              </Box>
            </Box>
    );
}
export default function CoursDomain() {
  return (
    <Container 
    maxWidth='lg'
    disableGutters 
    sx={CoursDomainContainer}>
      <Box sx={CoursDomainSecContainer}>
          <SelctedDomainInfo 
            nbrCours={10}
            domain_Title="Développement Web"
            domain_Description="Apprenez le développement web moderne avec React et Node.js."
            last_Update="12 Mars 2025"
            publiched_Date="10 Janvier 2024"
            nbr_Enroll={1500}
          />
          <Box sx={AllCoursContainer}>
              
              <Box sx={AllCoursSecContainer}>
                  <Typography variant="h2" sx={HeaderTitle}>
                    Course Content
                  </Typography>
                  <Activitie type={'Article'} estimated_time_minutes={15} activitie_title={'Introduction to JavaScript'} activitie_subtitle={'An overview of JavaScript and its role in web development.'} isCompleted={true} />
                  <Activitie type={'Video'} estimated_time_minutes={15} activitie_title={'Introduction to JavaScript'} activitie_subtitle={'An overview of JavaScript and its role in web development.'} isCompleted={true} />
             
                  <Activitie type={'PDF'} estimated_time_minutes={15} activitie_title={'Introduction to JavaScript'} activitie_subtitle={'An overview of JavaScript and its role in web development.'} isCompleted={false} />
                  <Activitie type={'Quiz'} estimated_time_minutes={15} activitie_title={'Introduction to JavaScript'} activitie_subtitle={'An overview of JavaScript and its role in web development.'} isCompleted={true} />
             
              </Box>
          </Box>
      </Box>
     
    </Container>
  );
}