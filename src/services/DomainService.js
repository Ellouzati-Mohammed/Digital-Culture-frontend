
const domain = [
  { id: 1, title: "Littératie numérique (Digital Literacy)" },
  { id: 2, title: "Médias et communication numérique" },
  { id: 3, title: "Art et design numérique" },
  { id: 4, title: "Cybersécurité et éthique numérique" },
  { id: 5, title: "Sociologie et anthropologie numérique" },
  { id: 6, title: "Programmation et technologies émergentes" },
  { id: 7, title: "Storytelling et création de contenu" },
  { id: 8, title: "Économie numérique et e-commerce" },
  { id: 9, title: "Propriété intellectuelle et droit numérique" },
  { id: 10, title: "Éducation et pédagogie numérique" },
  { id: 11, title: "Environnement et numérique" },
  { id: 12, title: "Recherche numérique et data science" }
];
  // Liste d'images thématiques (remplacez par vos URLs)
  const domainImages = [
    // Littératie numérique
    'https://img.freepik.com/photos-gratuite/jeune-femme-utilisant-appareils-technologiques_23-2149207357.jpg',
    
    // Médias et communication
    'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg',
    
    // Art et design
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262',
    
    // Cybersécurité
    'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    
    // Sociologie numérique
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    
    // Programmation
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    
    // Storytelling
    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
    
    // E-commerce
    'https://images.pexels.com/photos/3182798/pexels-photo-3182798.jpeg',
    
    // Propriété intellectuelle
    'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg',
    
    // Éducation numérique
    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    
    // Environnement
    'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda',
    
    // Data Science
    'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg'
  ];
  
  const selectedDomain = {
    name: "Cybersécurité et éthique numérique",
    description: "Maîtrisez les fondamentaux de la sécurité informatique et des enjeux éthiques du numérique",
    stats: {
      courses: 15,
      duration: "28h",
      difficulty: "Intermédiaire"
    }
  };

export { domain, domainImages, selectedDomain };