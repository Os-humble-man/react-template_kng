import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import EventForm from './pages/AddEventPage';
import AboutPage from './pages/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/new_event" element={<EventForm />} />
        <Route path="/event_details" element={<EventDetails />} /> {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
    </Router>
  );
}

export default App;
