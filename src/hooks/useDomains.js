// src/hooks/useDomaines.js
import { useState } from 'react';
import { getDomaines, createDomaine, updateDomaine, deleteDomaine } from '../services/DomainService'; // Adaptez le chemin

// Hook personnalisé
const useDomaines = () => {
  const [domaines, setDomaines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const fetchDomaines = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getDomaines();
      setDomaines(response.data); 
    } catch (err) {
      setError(err.message || 'Erreur lors de la récupération des domaines');
    } finally {
      setLoading(false);
    }
  };


  const createNewDomaine = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createDomaine(data);
      setDomaines((prevDomaines) => [...prevDomaines, response.data]); // Ajouter le nouveau domaine à la liste
    } catch (err) {
      setError(err.message || 'Erreur lors de la création du domaine');
    } finally {
      setLoading(false);
    }
  };


  const updateExistingDomaine = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await updateDomaine(id, data);
      setDomaines((prevDomaines) =>
        prevDomaines.map((domaine) =>
          domaine.id === id ? { ...domaine, ...response.data } : domaine
        )
      );
    } catch (err) {
      setError(err.message || 'Erreur lors de la mise à jour du domaine');
    } finally {
      setLoading(false);
    }
  };


  const deleteExistingDomaine = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteDomaine(id);
      setDomaines((prevDomaines) => prevDomaines.filter((domaine) => domaine.id !== id)); 
    } catch (err) {
      setError(err.message || 'Erreur lors de la suppression du domaine');
    } finally {
      setLoading(false);
    }
  };

  return {
    domaines,
    loading,
    error,
    fetchDomaines,
    createNewDomaine,
    updateExistingDomaine,
    deleteExistingDomaine,
  };
};

export default useDomaines;
