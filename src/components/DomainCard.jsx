import React, { useCallback, useState } from "react";
import { Box, Typography, Chip, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { domain} from "../services/DomainService.js";
import { 
  CardContainerStyle, 
  HeaderSecCard, 
  HeaderSecCardContainer, 
  DomainTitle, 
  MainDomainCard, 
  MainDomaineCardBox, 
  NbrCoursChip, 
  LevelCoursChip, 
  DomainDecriptionCard, 
  AllDomainBox, 
  LinkCardDomain 
} from '../styles/DomainCardStyle.js';
import { adminDeleteButton, adminButtonContainer, adminModifyButton } from '../styles/ManagementStyle.js';
import DomainManagement from "./admin/DomainManagement/DomainManagement.jsx";
import { role } from "../services/UserRole.js";

const DomainCard = React.memo(({ domainId, domainTitle ,domainDecription,level,domainImageUrl,setShowNewDomainForm, onEdit}) => {

  const handleDelete = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('delet Domaine ID:', domainId);
  }, []);

  const handleModify = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit({ id: domainId , domainTitle: domainTitle , domainDecription : domainDecription,level : level , domainImageUrl: domainImageUrl });
    setShowNewDomainForm(true);
  }, []);
  
  return (
    <Box key={domainId} sx={CardContainerStyle}>
      <Box sx={HeaderSecCard(domainImageUrl)}>
        <Box sx={HeaderSecCardContainer}>
          <Typography variant="h5" sx={DomainTitle}>
            {domainTitle.split('(')[0].trim()}
          </Typography>
        </Box>
      </Box>

      <Box sx={MainDomainCard}>
        <Box sx={MainDomaineCardBox}>
          <Chip
            label={`${Math.floor(Math.random() * 15 + 5)} courses`}
            size="small"
            icon={<EmojiEvents />}
            sx={NbrCoursChip}
          />
          <Chip
            label={level}
            size="small"
            sx={LevelCoursChip}
          />
        </Box>

        <Typography variant="body2" sx={DomainDecriptionCard}>
          {domainDecription}
        </Typography>

        {role.toLowerCase() === "admin" && (
          <Box sx={adminButtonContainer}>
            <Button onClick={handleModify} sx={adminModifyButton} startIcon={<EditOutlinedIcon />}>
              Modify
            </Button>
            <Button onClick={handleDelete} sx={adminDeleteButton} startIcon={<DeleteOutlinedIcon />}>
              Delete
            </Button>
          </Box>
        )}
      </Box>

    </Box>
  );
});

// AllDomainsCard Component
function AllDomainsCard() {
  
  const [domains, setDomains] = useState(domain); // Initialisation des domaines
  const [showNewDomainForm, setShowNewDomainForm] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);// le role de cet useState et de recupere le domaine quonveut modifier



  const handleModifyDomain = (formData) => {
    console.log("les nv Données du formulaire modifier:", formData);
  };
 
  return (
    <Box sx={AllDomainBox}>
      {domains.map((domainItem) => (
        <Link key={domainItem.id} to={`/DomainsCours/${domainItem.id}`} style={LinkCardDomain}>
          <DomainCard 
            domainId={domainItem.id} 
            domainTitle={domainItem.domainTitle}
            level={domainItem.level}
            domainImageUrl={domainItem.domainImageUrl}
            domainDecription={domainItem.domainDecription}
           
            setShowNewDomainForm={setShowNewDomainForm}
            onEdit={setSelectedDomain}
          />
        </Link>
      ))}

      {showNewDomainForm && (
        <DomainManagement 
          setShowNewDomainForm={setShowNewDomainForm} 
          onSubmit={handleModifyDomain} 
          domainData={selectedDomain}
        />
      )}
    </Box>
  );
}

export default AllDomainsCard;
