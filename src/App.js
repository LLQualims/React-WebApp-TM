import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConnexionServeur from './pages/ConnexionServeur';
import Contact from './pages/Contact';
import APPVIS from './pages/APPVIS';
import Connexion from './pages/Connexion';
import APPFIC from './pages/APPFIC';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles'; 

function App() {  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<APPVIS/>} />
            <Route path='/home' element={<APPVIS/>} />
            <Route path='/connexion' element={<Connexion/>} />
            <Route path='/connexionserveur' element={<ConnexionServeur/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/appfic/:idappAppareil' element={<APPFIC/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
