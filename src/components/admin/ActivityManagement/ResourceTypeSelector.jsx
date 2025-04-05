import { Box, Button } from "@mui/material";
import { RESOURCE_TYPES } from "../../../utils/constants";

const ResourceTypeSelector = ({ currentType, onTypeChange }) => {
  return (
    <Box sx={{
      display: 'flex',
      gap: 1,
      backgroundColor: '#F1F5F9',
      padding: 1,
      borderRadius: 1
    }}>
      {Object.values(RESOURCE_TYPES).map(type => (
        <Button
          key={type}
          variant={currentType === type ? 'contained' : 'text'}
          onClick={() => onTypeChange(type)}
          sx={{
            flexGrow: 1,
            textTransform: 'capitalize',
            backgroundColor: currentType === type ? '#FFFFFF' : 'transparent',
            color: '#000000',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: currentType === type ? '#F0F0F0' : '#E8E8E8'
            }
          }}
        >
          {type}
        </Button>
      ))}
    </Box>
  );
};

export default ResourceTypeSelector;