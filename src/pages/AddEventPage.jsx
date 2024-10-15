import React, { useEffect, useState } from 'react';
import Container from '../layout/Container';
import { FiUploadCloud } from "react-icons/fi";

import { useFetch } from '../hooks/useFetch';

// Simuler un composant de carte (Placeholder)
function MapComponent({ location, setLocation }) {
  return (
    <div
      onClick={() => {
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
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null, // Image de couverture
    eventImages: [], // Images multiples
    location: { lat: 48.8566, lng: 2.3522 },
    locationType: 'map',
    locationName: '',
    entryType: '',
    category: '',
    startDate: '',
    endDate: '',
    url: '',
  });
  const { fetchData } = useFetch();
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetchData('GET', 'event/categories');
      if (response.status === 200) {
        setCategories(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };


  const sendImagesToBackend = async (selectedImages) => {
    
        let formData = new FormData();
        // formData.append("id", id);
        for (let i = 0; i < selectedImages.length; i++) {
            formData.append("file", selectedImages[i]);
        }
        
        return formData
};


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('startDate', formData.startDate);
    formDataToSend.append('endDate', formData.endDate);
    formDataToSend.append('locationType', formData.locationType);
    formDataToSend.append('locationName', formData.locationName);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('url', formData.url);
    formDataToSend.append('cover', formData.image); // Image de couverture
  
    // Ajouter les images multiples
    // Array.from(formData.eventImages).forEach((file) => {
    //   formDataToSend.append('eventImages', file);
    // });

    for (let i = 0; i < formData.eventImages.length; i++) {
      formDataToSend.append("eventImages", formData.eventImages[i]);
  }
  
    try {

      // console.log((await sendImagesToBackend(formData.eventImages)).getAll('file'));

      console.log(formDataToSend.get('title'));
      
      
      
      const response = await fetchData('POST', 'event/AddEvent', formDataToSend);
      
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <div className="max-w-4xl mx-auto my-32 p-6 border border-gray-300 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl text-center mb-6 font-bold">Ajouter un événement</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Titre de l'événement</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Ex: Concert de Jazz"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Image de couverture</label>
                <input
                  type="file"
                  name='cover'
                  onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded"
                  accept="image/*"
                  required
                />
                {formData.image && <p className="mt-2 text-sm text-gray-600">Image sélectionnée : {formData.image.name}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Ajouter des images pour l'événement</label>
                <input
                  type="file"
                  onChange={(e) => setFormData({ ...formData, eventImages: e.target.files })}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded"
                  accept="image/*"
                  multiple
                />
                {formData.eventImages.length > 0 && (
                  <p className="mt-2 text-sm text-gray-600">
                    {formData.eventImages.length} image(s) sélectionnée(s)
                  </p>
                )}
              </div>


{/* <div className="flex items-center justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <FiUploadCloud />

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div>  */}


              <div>
                <label className="block mb-2 text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  name="description"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Décrivez votre événement"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Type d'entrée</label>
                <select
                  value={formData.entryType}
                  name="entryType"
                  onChange={handleInputChange}
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
                  value={formData.category}
                  name="category"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionnez</option>

                  {categories
                    ? categories.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Date de début</label>
                <input
                  type="datetime-local"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Date de fin</label>
                <input
                  type="datetime-local"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">URL de l'événement</label>
                <input
                  type="text"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>
            <div>
              <label className="block mb-2 text-gray-700">Type d'emplacement</label>
              <select
                value={formData.locationType}
                name="locationType"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                {/* <option value="map">Sélectionner sur la carte</option> */}
                <option value="name">Saisir un nom de lieu</option>
                <option value="online">En ligne</option>
              </select>
            </div>
{/* 
            {locationType === 'map' && (
              <div>
                <label className="block mb-2 text-gray-700">Emplacement sur la carte</label>
                <MapComponent location={location} setLocation={f} />
              </div>
            )} */}

            {formData.locationType === 'name' && (
              <div>
                <label className="block mb-2 text-gray-700">Nom du lieu</label>
                <input
                  type="text"
                  value={formData.locationName}
                  name="locationName"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Entrez le nom du lieu"
                />
              </div>
            )}

            {formData.locationType === 'online' && (
              <p className="italic text-gray-500">Cet événement se déroulera en ligne.</p>
            )}
          </div>


          <button type="submit" className="w-full py-3 bg-blue-600 text-white text-lg rounded-md">
            Enregistrer l'événement
          </button>
        </form>
      </div>
    </Container>
  );
}
