import QrCode from '../components/QRCode/QrCode.jsx'

export default function ConnexionServeur(){
    return (
      <>
      <img src={require("../assets/TM_Titre.png")} className="Logo" alt="logo" />
        <h2>Connexion QRCode page</h2>
        <QrCode/>
      </>
    )    
    
}