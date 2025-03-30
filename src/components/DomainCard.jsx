import React, { useCallback } from "react";
import { Box, Typography, Chip, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { domain,domainImages } from "../services/DomainService.js";
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

const DomainCard = React.memo(({ domainId, domainTitle, role }) => {


  const handleDelete = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleModify = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  return (
    <Box key={domainId} sx={CardContainerStyle}>
      <Box sx={HeaderSecCard(domainId, domainImages)}>
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
            label={domainId % 3 === 0 ? "Beginner" : domainId % 3 === 1 ? "Intermediate" : "Advanced"}
            size="small"
            sx={LevelCoursChip}
          />
        </Box>

        <Typography variant="body2" sx={DomainDecriptionCard}>
          Master key concepts of {domainTitle.toLowerCase()} through hands-on projects and real-life case studies.
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
function AllDomainsCard({ role }) {
  return (
    <Box sx={AllDomainBox}>
      {domain.map((domainItem) => (
        <Link 
          key={domainItem.id} 
          to={`/DomainsCours/${domainItem.id}`} 
          style={LinkCardDomain}
        >
          <DomainCard domainId={domainItem.id} domainTitle={domainItem.title} role={role} />
        </Link>
      ))}
    </Box>
  );
}

export default AllDomainsCard;
