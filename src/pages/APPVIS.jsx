import ListAPP from '../components/List/ListAPP.jsx'
import './APPVIS.css';

export default function APPVIS(){
    return (
      <>
      <img src={require("../assets/Images/APP_Titre-128-1.png")} className="titre" alt="titre" />
        <h2>Liste des appareils</h2>
        <ListAPP/>
      </>
    )    
}