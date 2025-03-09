// screens/DomainPage.js
import React from 'react';
import { 
  Box, 
  Typography, 
  Chip, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Container,
  Grid,
  Divider,
  Avatar
} from '@mui/material';
import { 
  ArrowBack,
  Schedule,
  School,
  EmojiEvents,
  CheckCircle,
  Article,
  PlayCircle,
  VideoLibrary
} from '@mui/icons-material';

const DomainPage = () => {
  // Données de démonstration
  const domain = {
    name: "Cybersécurité et éthique numérique",
    description: "Maîtrisez les fondamentaux de la sécurité informatique et des enjeux éthiques du numérique",
    stats: {
      courses: 15,
      duration: "28h",
      difficulty: "Intermédiaire"
    }
  };

  const courses = [
    { 
      title: "Introduction à la cybersécurité", 
      duration: "2h30", 
      lessons: 12,
      difficulty: "Débutant",
      badge: "Nouveau",
      type: "video"
    },
    { 
      title: "Cryptographie moderne", 
      duration: "4h", 
      lessons: 18,
      difficulty: "Avancé",
      type: "article"
    },
    { 
      title: "Ethique des données", 
      duration: "3h15", 
      lessons: 15,
      difficulty: "Intermédiaire",
      badge: "Certifié",
      type: "course"
    }
  ];

  return (
    <Container 
      maxWidth="lg"
      sx={{ 
        flex: 1,
        height: '100%',
        backgroundColor: '#ffffff',
        py: 3,
        overflow: 'auto'
      }}
    >
    

      {/* En-tête du domaine */}
      <Box sx={{
        bgcolor: 'background.paper',
        borderRadius: 4,
        p: 4,
        mb: 4,
        boxShadow: 3,
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
      }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ 
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <VideoLibrary sx={{ color: '#6366f1', fontSize: 40 }} />
              {domain.name}
            </Typography>
            
            <Typography variant="body1" sx={{ 
              color: 'text.secondary', 
              mb: 3,
              fontSize: '1.1rem'
            }}>
              {domain.description}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip 
                icon={<Schedule sx={{ color: '#6366f1' }} />} 
                label={`${domain.stats.duration} total`}
                sx={{ bgcolor: '#eef2ff' }}
              />
              <Chip
                icon={<School sx={{ color: '#10b981' }} />} 
                label={domain.stats.difficulty}
                sx={{ bgcolor: '#f0fdf4' }}
              />
              <Chip
                icon={<EmojiEvents sx={{ color: '#d97706' }} />} 
                label={`${domain.stats.courses} cours`}
                sx={{ bgcolor: '#ffedd5' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Liste des Cours */}
      <List sx={{ 
        bgcolor: 'background.paper', 
        borderRadius: 4,
        boxShadow: 3
      }}>
        {courses.map((course, index) => (
          <React.Fragment key={course.title}>
            <ListItem 
              sx={{ 
                py: 3,
                '&:hover': { 
                  backgroundColor: 'action.hover',
                  borderRadius: 2
                }
              }}
            >
              <ListItemIcon>
                <Avatar sx={{ 
                  bgcolor: '#eef2ff', 
                  color: '#6366f1',
                  width: 48,
                  height: 48
                }}>
                  {course.type === 'video' ? <PlayCircle /> : <Article />}
                </Avatar>
              </ListItemIcon>
              
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h6">{course.title}</Typography>
                    {course.badge && (
                      <Chip 
                        label={course.badge} 
                        size="small" 
                        sx={{ 
                          bgcolor: theme => theme.palette.mode === 'light' ? '#ffedd5' : '#2d1a04',
                          color: '#ea580c'
                        }}
                      />
                    )}
                  </Box>
                }
                secondary={
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2, 
                    mt: 1 
                  }}>
                    <Chip 
                      icon={<Schedule fontSize="small" />}
                      label={course.duration}
                      variant="outlined"
                      size="small"
                    />
                    <Chip 
                      label={`${course.lessons} leçons`} 
                      size="small"
                      sx={{ bgcolor: '#f3f4f6' }}
                    />
                    <Chip 
                      label={course.difficulty}
                      size="small"
                      sx={{ 
                        bgcolor: '#eef2ff',
                        color: '#6366f1'
                      }}
                    />
                  </Box>
                }
              />
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                ml: 2
              }}>
                <Button 
                  variant="contained" 
                  startIcon={<CheckCircle />}
                  sx={{ 
                    bgcolor: '#6366f1',
                    '&:hover': { bgcolor: '#4f46e5' }
                  }}
                >
                  Démarrer
                </Button>
              </Box>
            </ListItem>
            {index < courses.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default DomainPage;