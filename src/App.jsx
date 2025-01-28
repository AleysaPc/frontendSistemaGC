import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; //Biblioteca para multiples rutas 1
import {RegRecibidoPage} from './pages/RegRecibidoPage'; //2
import { RegRecibidoFormPage } from './pages/RegRecibidoFormPage';//3
import { Navigation } from './components/Navigation';//4


function App() {
  return (

    <BrowserRouter>
      <Navigation/> 
      <Routes>
        <Route path="/" element={<Navigate to="/registro-recibido" />} />
        <Route path="/registro-recibido" element={<RegRecibidoPage />} />
        <Route path="/registro-recibido-form" element={<RegRecibidoFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;