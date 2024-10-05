import React, { useState } from 'react';
import img from "../assets/img/img1.jpg"
import Container from '../layout/Container';

export default function EventDetails() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // Logique d'envoi du commentaire
    console.log('Commentaire soumis:', comment);
    setComment(''); // Réinitialiser le champ de commentaire après soumission
  };

  return (
    <Container>
    <div className="container mx-auto px-4 py-32">
      {/* Titre de l'événement */}
      <h1 className="text-4xl font-bold mb-4">Festival de Musique d'Été</h1>

      {/* Image de couverture */}
      <div className="mb-6">
        <img
          src={img}
          alt="Image de couverture de l'événement"
          className="rounded-lg object-cover w-full h-64 md:h-96"
        />
      </div>

      {/* Informations principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Description */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 py-2">
              Rejoignez-nous pour trois jours de musique en plein air avec les meilleurs artistes du moment.
              Des food trucks, des zones de repos et des activités pour toute la famille vous attendent.
              Ne manquez pas cet événement incontournable de l'été !
              
            </p>
            <p className='py-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error delectus quis id ipsam eveniet repellendus voluptatem nesciunt ipsa! Corporis magnam animi tempore sunt perspiciatis aspernatur ipsa impedit facere deserunt!</p>
            <p className='py-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error delectus quis id ipsam eveniet repellendus voluptatem nesciunt ipsa! Corporis magnam animi tempore sunt perspiciatis aspernatur ipsa impedit facere deserunt!</p>

          </div>
        </div>
        {/* Emplacement */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Emplacement</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31259.27102053663!2d27.4890752!3d-11.665408000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723ec44a99a9b3%3A0x9b4819d81744bfdb!2sHotel%20Lubumbashi!5e0!3m2!1sfr!2scd!4v1727992208884!5m2!1sfr!2scd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p className="mt-2 text-sm text-gray-600">123 Rue de la Musique, 75001 Paris</p>
          </div>
        </div>


      </div>

      {/* Bouton de réservation */}
      <div className="mb-8">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full md:w-auto hover:bg-blue-700 transition duration-300">
          Réserver maintenant
        </button>
      </div>

      {/* Section de commentaire */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Laissez un commentaire</h2>
        <textarea
          placeholder="Partagez vos pensées sur cet événement..."
          className="border rounded-lg p-2 mb-4 w-full"
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
          onClick={handleCommentSubmit}
        >
          Envoyer le commentaire
        </button>
      </div>
    </div>
    </Container>
  );
}
