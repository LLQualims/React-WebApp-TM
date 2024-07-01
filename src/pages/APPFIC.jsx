import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import DATFIC from '../components/FIC/APP/FICAPP';
import HistoriqueList from '../components/FIC/APP/FICHISTORIQUE';
 
export default function APPFIC(){
  const { idappAppareil } = useParams();
  return (
    <>
      <Header />
      <DATFIC/>
      <HistoriqueList/>
    </>
  )    
  
}