import React, { useState, useEffect } from 'react';
import Container from '../../layout/Container';

function EventAdminPage() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '' });
  const [editingEvent, setEditingEvent] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Nombre d'événements par page

  useEffect(() => {
    // Simuler le chargement des événements depuis une API
    setEvents([
      { id: 1, title: 'Conférence Tech', description: 'Une conférence sur les dernières technologies', date: '2024-06-15', category: 'Conférence' },
      { id: 2, title: 'Atelier Design', description: 'Un atelier pratique sur le design d\'interface', date: '2024-07-20', category: 'Atelier' },
      { id: 3, title: 'Séminaire Sécurité', description: 'Séminaire sur la cybersécurité', date: '2024-08-05', category: 'Séminaire' },
      { id: 4, title: 'Workshop React', description: 'Atelier sur le développement avec React', date: '2024-09-15', category: 'Workshop' },
      // Ajoutez plus d'événements ici
    ]);
  }, []);

  // Gestion des filtres
  const filteredEvents = events
    .filter(event => event.title.toLowerCase().includes(search.toLowerCase()))
    .filter(event => !category || event.category === category);

  const paginatedEvents = filteredEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const handleCreateEvent = () => {
    const event = { ...newEvent, id: Date.now(), category: 'Nouvelle Catégorie' };
    setEvents([...events, event]);
    setNewEvent({ title: '', description: '', date: '' });
  };

  const handleUpdateEvent = () => {
    if (editingEvent) {
      setEvents(events.map(e => e.id === editingEvent.id ? editingEvent : e));
      setEditingEvent(null);
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <Container>
    <div className="container mx-auto p-4 py-32">
      <h1 className="text-2xl font-bold mb-4">Gestion des Événements</h1>

      {/* Filtre de recherche */}
      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un événement..."
          className="border border-gray-300 rounded py-2 px-4 w-1/2 "
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded py-2 px-4"
        >
          <option value="">Catégorie</option>
          <option value="Conférence">Conférence</option>
          <option value="Atelier">Atelier</option>
          <option value="Séminaire">Séminaire</option>
          <option value="Workshop">Workshop</option>
        </select>
      </div>

      {/* Créer un nouvel événement */}
      <button
        onClick={() => setNewEvent({ title: '', description: '', date: '' })}
        className="bg-black text-white py-2 px-4 rounded mb-4 hover:bg-gray-800"
      >
        Créer un nouvel événement
      </button>

      {/* Liste des événements */}
      <table className="table-auto w-full border-collapse ">
        <thead>
          <tr className='border-b text-gray-400'>
            <th className=" px-4 py-2">Titre</th>
            <th className=" px-4 py-2">Description</th>
            <th className=" px-4 py-2">Date</th>
            <th className=" px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEvents.map(event => (
            <tr key={event.id} className='border-b'>
              <td className=" px-4 py-2">{event.title}</td>
              <td className=" px-4 py-2">{event.description}</td>
              <td className=" px-4 py-2">{event.date}</td>
              <td className=" px-4 py-2">
                <button
                  onClick={() => setEditingEvent(event)}
                  className="border border-gray-300 py-2 px-5 rounded mr-2 font-bold"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="bg-red-500 text-white py-2 px-5 rounded hover:bg-red-700"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          &lt; Précédent
        </button>
        <span className="text-gray-600">
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Suivant &gt;
        </button>
      </div>
    </div>
    </Container>
  );
}

export default EventAdminPage;
