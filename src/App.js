import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HojasVidaPage from './pages/VidaEstudiantil/HojasVidaPage';
import HojaVidaDetallePage from './pages/VidaEstudiantil/HojaVidaDetallePage';
import MensajeriaPage from './pages/Mensajeria/MensajeriaPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hojas-vida" element={<HojasVidaPage />} />
        <Route path="/hojas-vida/:hojaId" element={<HojaVidaDetallePage />} />
        <Route path="/mensajeria" element={<MensajeriaPage />} />
        <Route path="/" element={<HojasVidaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;