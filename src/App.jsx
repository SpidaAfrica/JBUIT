import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhatsAppChatWidget from './components/WhatsAppChatWidget';
import TrainingLandingPage from './pages/Academy';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Academy" element={<TrainingLandingPage />} />
      </Routes>
      <WhatsAppChatWidget/>
    </>
  );
}
