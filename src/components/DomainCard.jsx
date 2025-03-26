import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import  { categories, categoryImages } from "../services/categoryService.js";
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

const CategoryCard=(categoryId,categoryTitle,categoryImg)=>{
        return <Box key={categoryId} sx={CardContainerStyle} >
            <Box sx={HeaderSecCard(categoryId,categoryImages)}>
              <Box sx={HeaderSecCardContainer}>
                <Typography variant="h5" sx={DomainTitle}>
                  {categoryTitle.split('(')[0].trim()}
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
                  label={categoryId % 3 === 0 ? "Débutant" : categoryId % 3 === 1 ? "Intermédiaire" : "Avancé"}
                  size="small"
                  sx={LevelCoursChip}
                />
              </Box>
              
              <Typography variant="body2" sx={DomainDecriptionCard}>
                Maîtrisez les concepts clés du {categoryTitle.toLowerCase()} grâce à des projets pratiques et des études de cas réels.
              </Typography>
            </Box>
          </Box> ;
}

function AllDomainsCard() {
  return (<>
  
      <Box sx={AllDomainBox}>
        {categories.map((category, index) => (
         <Link 
         key={category.id} 
         to={`/cours-domain`} 
         style={LinkCardDomain}
       >
         {CategoryCard(index, category)}
       </Link>
        ))}
      </Box>
      
    </>
  );
}

export default AllDomainsCard;