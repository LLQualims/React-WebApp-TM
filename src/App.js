import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConnexionServeur from './pages/ConnexionServeur';
import Contact from './pages/Contact';
import Home from './pages/APPPage';
import Connexion from './pages/Connexion';
import APPFIC from './pages/APPFIC';

function App() {  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/connexion' element={<Connexion/>} />
          <Route path='/connexionserveur' element={<ConnexionServeur/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/appfic/:idappappareil' element={<APPFIC/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
