import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import  { domain, domainImages } from "../services/DomainService.js";
import GroupedUserStatsProgression from "../statistics/UserStatistics/UserStatsProgression.jsx";
import { Link } from "react-router-dom";
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
} from '../styles/DomainCardStyle.js'

const DomainCard=(domainId,domainTitle,domainImg)=>{
        return <Box key={domainId} sx={CardContainerStyle} >
            <Box sx={HeaderSecCard(domainId,domainImages)}>
              <Box sx={HeaderSecCardContainer}>
                <Typography variant="h5" sx={DomainTitle}>
                  {domainTitle.split('(')[0].trim()}
                </Typography>
              </Box>
            </Box>

            <Box sx={MainDomainCard}>
              <Box sx={MainDomaineCardBox}>
                <Chip 
                  label={`${Math.floor(Math.random() * 15 + 5)} cours`}
                  size="small"
                  icon={<EmojiEvents />}
                  sx={NbrCoursChip}
                />
                <Chip
                  label={domainId % 3 === 0 ? "Débutant" : domainId % 3 === 1 ? "Intermédiaire" : "Avancé"}
                  size="small"
                  sx={LevelCoursChip}
                />
              </Box>
              
              <Typography variant="body2" sx={DomainDecriptionCard}>
                Maîtrisez les concepts clés du {domainTitle.toLowerCase()} grâce à des projets pratiques et des études de cas réels.
              </Typography>
            </Box>
          </Box> ;
}

function AllDomainsCard() {
  
  return (<>
  
      <Box sx={AllDomainBox}>
        {domain.map((domain, index) => (
          
         <Link 
         key={domain.id} 
         to={`/DomainsCours/${domain.id}`} 
         style={LinkCardDomain}
       >
         {DomainCard(index, domain.title)}
       </Link>
        ))}
      </Box>
      
    </>
  );
}

export default AllDomainsCard;