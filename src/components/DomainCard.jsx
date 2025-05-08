import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography, Chip, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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
} from "../styles/DomainCardStyle.js";
import { adminDeleteButton, adminButtonContainer, adminModifyButton } from "../styles/ManagementStyle.js";
import DomainManagement from "./admin/DomainManagement/DomainManagement.jsx";
import useDomaines from "../hooks/useDomains.js";
import { useAuth } from '../hooks/useAuth';



// DomainCard Component
const DomainCard = React.memo(
  ({
    domainId,
    domain_title,
    domain_description,
    level,
    domain_image_url,
    setShowNewDomainForm,
    onEdit,
    onDelete
  }) => {
    const [courseCount] = useState(40); 
    const { role } = useAuth();

    const handleDelete = useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
      onDelete(domainId, domain_title);
    }, [domainId, onDelete,domain_title]);

    

    const handleModify = useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
      onEdit({
        id: domainId,
        domain_title: domain_title,
        domain_description: domain_description,
        level: level,
        domain_image_url: domain_image_url,
      });
      setShowNewDomainForm(true);
    }, [domainId, domain_title, domain_description, level, domain_image_url, setShowNewDomainForm, onEdit]);


    return (
      <Box key={domainId} sx={CardContainerStyle} >
        <Box sx={HeaderSecCard(domain_image_url)}>
          <Box sx={HeaderSecCardContainer}>
            <Typography variant="h5" sx={DomainTitle}>
              {domain_title.split("(")[0].trim()}
            </Typography>
          </Box>
        </Box>

        <Box sx={MainDomainCard}>
          <Box sx={MainDomaineCardBox}>
            <Chip
              label={`${courseCount} courses`}
              size="small"
              icon={<EmojiEvents />}
              sx={NbrCoursChip}
            />
            <Chip label={level} size="small" sx={LevelCoursChip} />
          </Box>

          <Typography variant="body2" sx={DomainDecriptionCard}>
            {domain_description}
          </Typography>

          {/** Only show buttons for admin */}
          {role.toLowerCase() === "admin" && (
            <Box sx={adminButtonContainer}>
              <Button
                onClick={handleModify}
                sx={adminModifyButton}
                startIcon={<EditOutlinedIcon />}
              >
                Modify
              </Button>
              <Button
                onClick={handleDelete}
                sx={adminDeleteButton}
                startIcon={<DeleteOutlinedIcon />}
              >
                Delete
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    );
  },
  (prevProps, nextProps) => {
    // Avoid unnecessary re-renders when props do not change
    return (
      prevProps.domainId === nextProps.domainId &&
      prevProps.domain_title === nextProps.domain_title &&
      prevProps.domain_description === nextProps.domain_description &&
      prevProps.level === nextProps.level &&
      prevProps.domain_image_url === nextProps.domain_image_url
    );
  }
);

// AllDomainsCard Component
function AllDomainsCard( 
  {domaines, 
  fetchDomaines, 
  deleteExistingDomaine, 
  updateExistingDomaine,
loading} ) {
  const [showNewDomainForm, setShowNewDomainForm] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const [deleteConfirmation,setDeleteConfirmation] = useState({
    isOpen: false,
    domainId: null,
    domainTitle:''
  }); 

  useEffect(() => {
    fetchDomaines(); // Chargement unique des domaines au montage
  }, [fetchDomaines]);


  const handleDeleteRequest = useCallback((domainId, domainTitle) => {
    setDeleteConfirmation({
      isOpen: true,
      domainId,
      domainTitle
    });
  }, []);

  const handleModifyDomain = useCallback(async (formData) => {
   
    try {
      await updateExistingDomaine(formData.id,formData); 
      await fetchDomaines();
      setShowNewDomainForm(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du domaine : ", error);
    }
  }, [fetchDomaines, setShowNewDomainForm]);
  
  const handleConfirmDelete = useCallback(async () => {
    if (deleteConfirmation.domainId) {
      try {
        await deleteExistingDomaine(deleteConfirmation.domainId);
        //await fetchDomaines();
      } finally {
        setDeleteConfirmation({ isOpen: false, domainId: null,domainTitle:'' });
      }
    }
  }, [deleteConfirmation]);
  const handleCancelDelete = useCallback(() => {
    setDeleteConfirmation({ isOpen: false, domainId: null ,domainTitle:''});
  }, []);

  return (
    
    <Box sx={AllDomainBox}>
       <Dialog open={deleteConfirmation.isOpen} onClose={handleCancelDelete} >
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer le domaine "{deleteConfirmation.domainTitle}" ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Annuler</Button>
          <Button 
            onClick={handleConfirmDelete} 
            color="error"
            disabled={loading}
          >
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
      {domaines.map((domainItem) => (
        <Link
          key={domainItem.id}
          to={`/DomainsCours/${domainItem.id}`}
          style={LinkCardDomain}
        >
          <DomainCard
            domainId={domainItem.id}
            domain_title={domainItem.domain_title}
            level={domainItem.level}
            domain_image_url={domainItem.domain_image_url}
            domain_description={domainItem.domain_description}
            setShowNewDomainForm={setShowNewDomainForm}
            onEdit={setSelectedDomain}
            onDelete={handleDeleteRequest}
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