import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import EventForm from './pages/AddEventPage';
import AboutPage from './pages/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Admin/AdminLogin';
import EventAdminPage from './pages/Admin/EventAdminPage';
import React from 'react';
import Authenticated from './Authentication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/event_details" element={<EventDetails />} />
        <Route exact path="/add-event" element={<EventForm />} />
        <Route
            exact
            path="/admin-manage-events"
            element={<EventAdminPage />}
          />


        {/* <Route element={<Authenticated />}> */}
   
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
