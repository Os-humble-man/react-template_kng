import React, { useState } from 'react';
import Container from '../layout/Container';

// Simuler un composant de carte (Placeholder)
function MapComponent({ location, setLocation }) {
  return (
    <div
      onClick={(e) => {
        setLocation({ lat: 48.8584, lng: 2.2945 }); // Coordonnées de la Tour Eiffel
      }}
      className="h-64 bg-gray-300 flex items-center justify-center"
    >
      <p className="text-center">Cliquez pour changer la position (simulé)</p>
      <p>Latitude: {location.lat.toFixed(4)}, Longitude: {location.lng.toFixed(4)}</p>
    </div>
  );
}

export default function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ lat: 48.8566, lng: 2.3522 });
  const [locationType, setLocationType] = useState('map');
  const [locationName, setLocationName] = useState('');
  const [entryType, setEntryType] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationData =
      locationType === 'map'
        ? location
        : locationType === 'name'
        ? locationName
        : 'En ligne';

    console.log({
      title,
      description,
      image,
      locationData,
      entryType,
      category,
      startDate,
      endDate,
      url,
    });
  };

  return (
    <Container>
      <div className="max-w-4xl mx-auto my-32 p-6 border border-gray-300 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl text-center mb-6 font-bold">Ajouter un événement</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Première colonne */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Titre de l'événement</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Concert de Jazz"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Image de couverture</label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    accept="image/*"
                    required
                  />
                </div>
                {image && <p className="mt-2 text-sm text-gray-600">Image sélectionnée : {image.name}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Décrivez votre événement"
                  required
                />
              </div>
            </div>

            {/* Deuxième colonne */}
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Type d'entrée</label>
                <select
                  value={entryType}
                  onChange={(e) => setEntryType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="free">Entrée libre</option>
                  <option value="paid">Entrée payante</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Catégorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="music">Musique</option>
                  <option value="sports">Sports</option>
                  <option value="arts">Arts</option>
                  <option value="technology">Technologie</option>
                  <option value="food">Gastronomie</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Date de début</label>
                <input
                  type="datetime-local"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Date de fin</label>
                <input
                  type="datetime-local"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">URL de l'événement</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-700">Type d'emplacement</label>
              <select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="map">Sélectionner sur la carte</option>
                <option value="name">Saisir un nom de lieu</option>
                <option value="online">En ligne</option>
              </select>
            </div>

            {locationType === 'map' && (
              <div>
                <label className="block mb-2 text-gray-700">Emplacement sur la carte</label>
                <MapComponent location={location} setLocation={setLocation} />
              </div>
            )}

            {locationType === 'name' && (
              <div>
                <label className="block mb-2 text-gray-700">Nom du lieu</label>
                <input
                  type="text"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Entrez le nom du lieu"
                />
              </div>
            )}

            {locationType === 'online' && (
              <p className="italic text-gray-500">Cet événement se déroulera en ligne.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition-colors"
          >
            Enregistrer l'événement
          </button>
        </form>
      </div>
    </Container>
  );
}
