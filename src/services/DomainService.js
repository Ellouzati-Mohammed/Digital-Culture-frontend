import axios from "axios";
import { API_ENDPOINTS } from "../api/api";

const domain = [
  { id: 1, domainTitle: "Littératie numérique (Digital Literacy)",level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 2, domainTitle: "Médias et communication numérique" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 3, domainTitle: "Art et design numérique" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 4, domainTitle: "Cybersécurité et éthique numérique" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 5, domainTitle: "Sociologie et anthropologie numérique",level:"Debutant" , domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 6, domainTitle: "Programmation et technologies émergentes",level:"Debutant" , domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 7, domainTitle: "Storytelling et création de contenu" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 8, domainTitle: "Économie numérique et e-commerce" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 9, domainTitle: "Propriété intellectuelle et droit numérique" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 10, domainTitle: "Éducation et pédagogie numérique" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 11, domainTitle: "Environnement et numérique" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
  { id: 12, domainTitle: "Recherche numérique et data science" ,level:"Debutant", domainImageUrl:'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg', domainDecription:'Apprenez le développement web moderne avec React et Node.js.',},
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

  
const DOMAINES_URL = API_ENDPOINTS.domaines;

export const getDomains = () => axios.get(DOMAINES_URL);
export const createDomain = (data) => axios.post(DOMAINES_URL, data);
export const updateDomain = (id, data) => axios.put(`${DOMAINES_URL}/${id}`, data);
export const deleteDomain = (id) => axios.delete(`${DOMAINES_URL}/${id}`);

export { domain,  selectedDomain };
