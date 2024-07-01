import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListAPP.css';
import { useNavigate } from 'react-router-dom';

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const sortedData = [...data].sort((a, b) => {
    // Comparer les numéros d'appareil de manière alphabétique
    return a.numeroAppareil.localeCompare(b.numeroAppareil);
  });


  const handleClick = (idappAppareil) => {
    navigate(`/appfic/${idappAppareil}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.39.68:7293/8.1b/app/appareil/vis', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJJZCI6ImI2NGQ5N2RkLTE4YTAtNDJkMi1hZTNkLWViM2Q5ZDRlYTQ5MCIsInN1YklkIjoiNzYiLCJzdWIiOiJLUCIsImp0aSI6IjFkZGEyODRmLTZjZTQtNGRlMC04NDEzLTk1NGI2YWI2YWM0MCIsIlByb2ZpbEVRTSI6IjYiLCJQcm9maWxMQUIiOiIxMCIsIm5iZiI6MTcxOTQ5ODE1OSwiZXhwIjoyMDE5NTAxNzU5LCJpYXQiOjE3MTk0OTgxNTksImlzcyI6IklOT0tZIiwiYXVkIjoiUVVBTElNUyJ9.TaF3QoT2AooxmPD6l_vXWFCnKDguU0pGiaGymo4_6mg'
          }
        });
        // Vérifiez si la propriété 'contenu' est un tableau
        if (Array.isArray(response.data.contenu)) {
          setData(response.data.contenu);
        } else {
          throw new Error('Les données récupérées ne sont pas un tableau');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='tabAPP'>
      <ul className='list'>
        {sortedData.map((item) => (
           <button key={item.idappAppareil}  onClick={() => handleClick(item.idappAppareil)} className='list-item-button' type="button">
           <img src={require(`../../assets/Images/APP_Statut${item.idappStatut}-128-1.png`)} alt={`Image of ${item.idappStatut}`} className="item-image" />
           <div className='contenu'>
             <p><strong>{item.numeroAppareil}</strong></p>
             <p>{item.designationAppareil}</p>
           </div>
         </button>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
