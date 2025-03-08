import React from "react";
import { Box, Typography } from "@mui/material";


// Composant personnalisé pour les statistiques
const UserStatsProgression = ({ title, value, color, icon }) => (
  <Box sx={{ 
    flex: 1, 
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: `${color}10`,
    display: "flex",
    
    alignItems: "center"
  }}>
    <Box sx={{ 
      width: 40,
      height: 40,
      borderRadius: "8px",
      backgroundColor: `${color}20`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mr: 2
    }}>
      <Typography variant="h5" sx={{ color }}>
        {icon}
      </Typography>
    </Box>
    <Box>
      <Typography variant="body2" sx={{ color: "#64748b" }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, color }}>
        {value}
      </Typography>
    </Box>
  </Box>
);


function GroupedUserStatsProgression(){
    return <Box sx={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 3
    }}> <UserStatsProgression 
    title="Cours terminés" 
    value="12" 
    color="#6366f1" 
    icon="📚"
    progress={75}
  />
  <UserStatsProgression 
    title="Badges obtenus" 
    value="3" 
    color="#10b981" 
    icon="🏅"
    progress={40}
  />
  <UserStatsProgression 
    title="Projets réalisés" 
    value="5" 
    color="#f59e0b" 
    icon="🛠️"
    progress={60}
  /></Box>
}
        

export default GroupedUserStatsProgression;