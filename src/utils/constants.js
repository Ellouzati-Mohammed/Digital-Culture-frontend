export const RESOURCE_TYPES = {
    VIDEO: 'video',
    PDF: 'pdf',
    QUIZ: 'quiz'
  };
  
  export const INITIAL_ACTIVITIES_RESOURCE_STATE = {
    type: RESOURCE_TYPES.VIDEO,
    video: { videoUrl: '' },
    pdf: { pdfTitle: '', pdfUrl: '' },
    quiz: { 
      quizQuestion: '', 
      quizOptions: Array(4).fill(''), 
      quizCorrectAnswer: '' 
    }
  };

  export const INITIAL_COURS_STATE = {
    id:null,
    cours_title: "",
    cours_description: "",
    duration: ""
  };
  
