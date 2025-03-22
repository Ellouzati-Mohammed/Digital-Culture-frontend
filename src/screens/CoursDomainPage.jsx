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


const SelctedDomainInfo=({nbrCours,domain_Title,domain_Description,last_Update,publiched_Date,nbr_Enroll})=>{

  const timeDifference=TimeDifference(last_Update);

  return ( 
            <Box sx={{px:'32px',py:'24px',display:'flex',flexDirection:'column',backgroundColor:'#FFFFFF',boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",position: "relative",zIndex: 1}}>
              <Box sx={{mb:'12px'}}> 
                <Chip label="Intermediate" sx={{border:'none',color:'#1E40AF',backgroundColor:'#63B3ED',fontWeight:'500',py:'0px',pb:'2px',px:'4px',fontSize: '.875rem',fontFamily: 'inherit'}} />
                <Typography component="span" sx={{ color: '#64748B',pl:2,fontSize:'16px',fontFamily: 'inherit' }}>
                  {nbrCours} Cours
                </Typography>
              </Box>
              <Box sx={{mb:'15px'}}>
                <Typography variant="h1" sx={{fontWeight: '700',fontFamily: 'inherit',fontSize: '1.875rem'}}>
                  {domain_Title}
                </Typography>
              </Box>
              <Box sx={{mb:'18px'}}>
                <Typography variant="body1" component="p" color='rgb(75,85,99)' fontFamily={'inherit'}>
                  {domain_Description}
                </Typography>
              </Box>
              <Box sx={{display:'flex',flexDirection:'row',color:'#64748B'}}>
                <Box sx={{mr:3}}>
                    <Typography sx={{ display: "flex", alignItems: "center",fontSize:'0.9rem',fontFamily:'inherit' }}>
                      <AccessTimeIcon sx={{fontSize: "16px",mr:'4px'}}/>
                      Last updated {timeDifference} ago
                    </Typography>
                </Box>
                <Box sx={{mr:3}}>
                    <Typography sx={{ display: "flex", alignItems: "center",fontSize:'0.9rem',fontFamily:'inherit' }}>
                      <CalendarTodayIcon sx={{fontSize: "14px",mr:'4px'}}/>
                      Published {publiched_Date}
                    </Typography>
                </Box>
                <Box sx={{mr:3}}>
                    <Typography sx={{ display: "flex", alignItems: "center",fontSize:'0.9rem',fontFamily:'inherit' }}>
                      <PeopleOutlineIcon sx={{fontSize: "16px",mr:'4px'}}/>
                      {nbr_Enroll} enrolled
                    </Typography>
                    
                </Box>
              </Box>
            
            </Box>
  );
}

const Progression=({percent,number_Items})=>{

  const number_Items_Completed=(percent/100)*number_Items;

  return( 
          <Box sx={{backgroundColor:'#FFFFFF',p:'24px',mb:'24px',display:'flex',flexDirection:'column',borderRadius:3,boxShadow: "0px 1px 3px rgba(86, 86, 86, 0.1)"}}>
              <Box sx={{mb:'12px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Typography variant="h2" sx={{fontWeight: '600',fontFamily: 'inherit',fontSize: '1.25rem'}}>
                  Your Progress
                </Typography>
                <Typography variant="h2" sx={{fontWeight: '600',fontFamily: 'inherit',fontSize: '1.25rem'}}>
                  {percent}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={percent} 
                sx={{ 
                  height: 10, 
                  borderRadius: 5, 
                  backgroundColor: "#E5E7EB", 
                  "& .MuiLinearProgress-bar": { 
                    backgroundColor: "#8B5CF6", 
                    borderRadius: 5, 
                  } 
                }} 
            />
            <Typography variant="h2" sx={{fontWeight: '400',fontFamily: 'inherit',fontSize: '.875rem',color:'#64748B',mt:'12px'}}>
              {number_Items_Completed} of {number_Items} items completed
            </Typography>
          </Box>
        );
}


const Activitie =({type,estimated_time_minutes,activitie_title,activitie_subtitle,isCompleted})=>{

  
  const typeIcon = () => { //l'icon 

    switch (type) {
      case "Video":
        return <OndemandVideoIcon sx={{fontSize: 'inherit',mr:1}}/>;
      case "Article":
        return <ArticleOutlinedIcon sx={{fontSize: 'inherit',mr:1}} />;
      case "PDF":
        return <PictureAsPdfOutlinedIcon sx={{fontSize: 'inherit',mr:1}} />;
      case "Quiz":
        return <HelpOutlineIcon sx={{fontSize: 'inherit',mr:1}} />;
      default:
        return ;
    }
  };
  const completeIcon=(isCompleted)=>{
   if(isCompleted)
    return <TaskAltIcon sx={{fontSize:'27px',color:'#22C55E'}}/>;
   else
   return <RadioButtonUncheckedIcon sx={{fontSize:'27px'}}/>;
  }

  return(  
            <Box sx={{p:'1rem',border: '1px solid rgb(229,231,235)',color:'#64748B',backgroundColor: isCompleted ? "#F9FAFB" : "#FFFFFF",borderRadius:3,display:'flex',flexDirection:'row',alignItems:'center',mb:3,cursor:'pointer', transition: 'all 0.2s ', // Animation fluide
                '&:hover': {
                  boxShadow: "0px 2px 10px rgba(86, 86, 86, 0.14)",
                  ...(!isCompleted && {border:'1px solid #8B5CF6'}),//!!!!!!!!
                  '& h3': {
                    color: '#8B5CF6'
                  }
                }}}>

              {completeIcon(isCompleted)}
              
              <Box sx={{display:'flex',flexDirection:'column',pl:2,flexGrow: 1}}>
                <Box sx={{fontSize:'17px',display:'flex',flexDirection:'row',justifyContent:'space-between',mb:1}}>
                    <Box sx={{ display:'flex',alignItems:'center'}}>
                      {typeIcon(type)}
                      <Typography variant="span" sx={{fontFamily: 'inherit'}}>
                        {type}
                      </Typography>
                    </Box>
                    <Typography variant="span" sx={{fontFamily: 'inherit'}}>
                        {estimated_time_minutes}min
                    </Typography>
                </Box>
                  <Typography variant="h3" sx={{fontFamily: 'inherit',fontSize:' 1.125rem',fontWeight:'500',mb:1}}>
                    {activitie_title}
                  </Typography>
                  <Typography variant="p" sx={{fontFamily: 'inherit',fontSize:'.875rem'}}>
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
    disableGutters //seulement pour desactiver les attribut sx par defaut
    sx={{
      display:'flex',
      flex: 1,
      height: '100%',
      backgroundColor: '#ffffff',
      p: 0,
      overflow: 'auto',
      m:0,
    }}>
      <Box sx={{width:'100%',display:'flex',flexDirection:'column',fontFamily:'ui-sans-serif, system-ui, sans-serif'}}>
          <SelctedDomainInfo 
            nbrCours={10}
            domain_Title="Développement Web"
            domain_Description="Apprenez le développement web moderne avec React et Node.js."
            last_Update="12 Mars 2025"
            publiched_Date="10 Janvier 2024"
            nbr_Enroll={1500}
          />
          <Box sx={{p:'32px',display:'flex',flexDirection:'column',backgroundColor:'#F9FAFB',flexGrow: 1}}>
              <Progression percent={40} number_Items={8}/>
              <Box sx={{backgroundColor:'#FFFFFF',p:'24px',mb:'24px',display:'flex',flexDirection:'column',borderRadius:3,boxShadow: "0px 1px 3px rgba(86, 86, 86, 0.1)",}}>
                  <Typography variant="h2" sx={{fontWeight: '600',fontFamily: 'inherit',fontSize: '1.25rem',mb:'24px'}}>
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