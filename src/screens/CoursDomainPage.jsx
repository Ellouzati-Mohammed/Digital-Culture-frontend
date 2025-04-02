import React, { useCallback, useState } from "react";
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
  useTheme,
  Button
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
import {CoursboxStyle,CoursContainer,CoursTime,CoursTimeTxt,CoursTiltleTxt,CoursSubTiltleTxt,TaskIcon,RadioBut,CoursDomainContainer
  ,SelectedDomainContainer,SelectedDomainGlobalInfoText,SelectedDomainGlobalInfoItem,SelectedDomainchildrenContainer,SelectedDomainLevel,SelectedDomainnbrCours,
  SelectedDomainTitle,SelectedDomainDescription,SelectedDomainGlobalInfoContainer,CoursDomainSecContainer,AllCoursContainer,AllCoursSecContainer,HeaderTitle
  } from '../styles/CoursDomainPageStyle'
  import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
  import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { adminDeleteButton, adminButtonContainer,adminModifyButton } from '../styles/ManagementStyle.js';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {headerManagementTitle,titleManagementtxt,addButton} from '../styles/ManagementStyle'
import CoursMangement from '../components/admin/CoursManagement.jsx';


const SelctedDomainInfo = ({ nbrCours, domain_Title, domain_Description, last_Update, publiched_Date, nbr_Enroll }) => {

  const timeDifference = TimeDifference(last_Update);

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
            <AccessTimeIcon sx={{ fontSize: "16px", mr: '4px' }} />
            Last updated {timeDifference} ago
          </Typography>
        </Box>
        <Box sx={SelectedDomainGlobalInfoItem}>
          <Typography sx={SelectedDomainGlobalInfoText}>
            <CalendarTodayIcon sx={{ fontSize: "14px", mr: '4px' }} />
            Published {publiched_Date}
          </Typography>
        </Box>
        <Box sx={SelectedDomainGlobalInfoItem}>
          <Typography sx={SelectedDomainGlobalInfoText}>
            <PeopleOutlineIcon sx={{ fontSize: "16px", mr: '4px' }} />
            {nbr_Enroll} enrolled
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const Cours = ({ coursId, estimated_time_minutes, coursTitle, coursSubtitle , setShowNewCoursForm , onEdit}) => {

   const handleDelete = useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('delet Cours ID:', coursId);
    }, []);
  
    const handleModify = useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
      onEdit({ id: coursId , coursTitle: coursTitle , coursSubtitle : coursSubtitle , estimated_time_minutes :estimated_time_minutes});
      setShowNewCoursForm(true);
    }, []);

  return (
    <Link to={`/DomainsCours/Activities/${coursId}`} style={{ textDecoration: 'none' }}>
      <Box sx={CoursboxStyle}>
        <Box sx={CoursContainer}>
          <Box sx={CoursTime}>
            <Typography variant="span" sx={CoursTimeTxt}>
              {estimated_time_minutes}min
            </Typography>
          </Box>
          <Typography variant="h3" sx={CoursTiltleTxt}>
            {coursTitle}
          </Typography>
          <Typography variant="p" sx={CoursSubTiltleTxt}>
            {coursSubtitle}
          </Typography>
        </Box>
        <Box sx={adminButtonContainer}>
          <Button onClick={handleModify} sx={adminModifyButton} startIcon={<EditOutlinedIcon />}>
            Modify
          </Button>
          <Button onClick={handleDelete} sx={adminDeleteButton} startIcon={<DeleteOutlinedIcon />}>
            Delete
          </Button>
        </Box>
      </Box>
    </Link>
  );
};
function AllCoursCard() {
  const role='admin'
  const [showNewCoursForm, setShowNewCoursForm] = useState(false);
  const [selectedCours, setSelectedCours] = useState(null);// le role de cet useState et de recupere le Course quonveut modifier

  const handleModifyDomain = (formData) => {
    console.log("les nv Données du formulaire modifier:", formData);
  };

  return(
        <Box sx={AllCoursContainer}>
          <Box sx={AllCoursSecContainer}>
            <Typography variant="h2" sx={HeaderTitle}>
              Course Content
            </Typography>
            <Cours
              
              coursId={1}
              estimated_time_minutes={15}
              coursTitle="Introduction to JavaScript"
              coursSubtitle="An overview of JavaScript and its role in web development."
              onEdit={setSelectedCours}
              setShowNewCoursForm={setShowNewCoursForm}
            />
            <Cours
              
              coursId={2}
              estimated_time_minutes={15}
              coursTitle="Introduction to JavaScript"
              coursSubtitle="An overview of JavaScript and its role in web development."
              onEdit={setSelectedCours}
              setShowNewCoursForm={setShowNewCoursForm}
            />
            <Cours
              
              coursId={3}
              estimated_time_minutes={15}
              coursTitle="Introduction to JavaScript"
              coursSubtitle="An overview of JavaScript and its role in web development."
              onEdit={setSelectedCours}
              setShowNewCoursForm={setShowNewCoursForm}
            />
            
          </Box>
          {role === "admin" && showNewCoursForm && (
                <CoursMangement 
                   setShowNewCoursForm={setShowNewCoursForm} 
                   onSubmit={handleModifyDomain}
                   CoursData={selectedCours}
                />
            )}
         </Box>
  )
}
export default function CoursDomain() {
  const [role, setRole] = useState('admin');
  const [showNewCoursForm, setShowNewCoursForm] = useState(false);
  
  const handleAddCours = (formData) => {
    console.log("Données du formulaire a ajouter:", formData);
  };
  

  return (
    <Container maxWidth="lg" disableGutters sx={CoursDomainContainer}>
      <Box sx={CoursDomainSecContainer}>
        <Box sx={headerManagementTitle}>
          <Typography variant="h3" sx={titleManagementtxt}>
            Gestion des Cours
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineOutlinedIcon />}
            sx={addButton}
            onClick={() => setShowNewCoursForm(true)}
          >
            Nouveau Cours
          </Button>
        </Box>
        {role === "admin" && showNewCoursForm && (
          <CoursMangement setShowNewCoursForm={setShowNewCoursForm}
          onSubmit={handleAddCours}
          />
        )}
        <SelctedDomainInfo
          nbrCours={10}
          domain_Title="Développement Web"
          domain_Description="Apprenez le développement web moderne avec React et Node.js."
          last_Update="12 Mars 2025"
          publiched_Date="10 Janvier 2024"
          nbr_Enroll={1500}
        />
        <AllCoursCard />
      </Box>
    </Container>
  );
}
