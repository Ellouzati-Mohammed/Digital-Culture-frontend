import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import  { categories, categoryImages } from "../services/categoryService.js";
import GroupedUserStatsProgression from "../statistics/UserStatistics/UserStatsProgression.jsx";

const CategoryCard=(categoryId,categoryTitle,categoryImg)=>{
        return <Box 
            key={categoryId}
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              overflow: 'hidden',
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              boxShadow: 3,
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6
              }
            }}
          >
            <Box sx={{
              height: '200px',
              background: `url(${categoryImages[categoryId]}) center/cover`,
              position: 'relative'
            }}>
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                p: 3
              }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                  {categoryTitle.split('(')[0].trim()}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 2,
                gap: 1
              }}>
                <Chip 
                  label={`${Math.floor(Math.random() * 15 + 5)} cours`}
                  size="small"
                  icon={<EmojiEvents sx={{ color: "#f59e0b", fontSize: "16px" }}/>}
                  sx={{ 
                    backgroundColor: '#fff3e0',
                    color: '#f59e0b',
                    fontWeight: 600
                  }}
                />
                <Chip
                  label={categoryId % 3 === 0 ? "Débutant" : categoryId % 3 === 1 ? "Intermédiaire" : "Avancé"}
                  size="small"
                  sx={{ 
                    backgroundColor: '#eef2ff',
                    color: '#6366f1',
                    fontWeight: 600
                  }}
                />
              </Box>
              
              <Typography variant="body2" sx={{ 
                color: "#64748b", 
                height: "60px",
                overflow: "hidden",
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical'
              }}>
                Maîtrisez les concepts clés du {categoryTitle.toLowerCase()} grâce à des projets pratiques et des études de cas réels.
              </Typography>
            </Box>
          </Box> ;
}

function AllCategoriesCard() {
  return (<>
  

      <Box sx={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "24px"
      }}>
        {categories.map((category, index) => (
          CategoryCard(index,category)
        ))}
      </Box>

      
    </>
  );
}

export default AllCategoriesCard;