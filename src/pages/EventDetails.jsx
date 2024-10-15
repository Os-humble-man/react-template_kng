import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import des styles du carrousel
import coverImg from "../assets/img/img1.jpg"; // Image de couverture
import Container from '../layout/Container';
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";

// Liste d'images dynamiques (à ajuster en fonction de l'événement)
const eventImages = [
  { src: img1, alt: "Image 1 du festival" },
  { src: img2, alt: "Image 2 du festival" },
  { src: img3, alt: "Image 3 du festival" },
];

export default function EventDetails() {
  const [comment, setComment] = useState('');
  const [slidePercentage, setSlidePercentage] = useState(33.33); // Valeur par défaut


  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    console.log('Commentaire soumis:', comment);
    setComment(''); // Réinitialiser le champ de commentaire après soumission
  };

  useEffect(() => {
    // Fonction pour ajuster le nombre d'images visibles selon la largeur de l'écran
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidePercentage(100); // Affiche une image sur petit écran (mobile)
      } else if (window.innerWidth < 1024) {
        setSlidePercentage(50); // Affiche deux images sur les écrans moyens (tablettes)
      } else {
        setSlidePercentage(33.33); // Affiche trois images sur les grands écrans (ordinateurs)
      }
    };

    // Appel initial lors du montage du composant
    handleResize();

    // Ajouter un écouteur pour ajuster en cas de redimensionnement
    window.addEventListener("resize", handleResize);

    // Nettoyage lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <div className="container mx-auto px-4 py-32">
        {/* Titre de l'événement */}
        <h1 className="text-4xl font-bold mb-4">Festival de Musique d'Été</h1>

        {/* Image de couverture */}
        <div className="mb-6">
          <img src={coverImg} alt="Image de couverture de l'événement" className="rounded-lg object-cover w-full h-64 md:h-96" />
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
              <p className="py-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error delectus quis id ipsam eveniet repellendus voluptatem nesciunt ipsa!
              </p>
            </div>
          </div>
          
          {/* Emplacement */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Emplacement</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31259.27102053663!2d27.4890752!3d-11.665408000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723ec44a99a9b3%3A0x9b4819d81744bfdb!2sHotel%20Lubumbashi!5e0!3m2!1sfr!2scd!4v1727992208884!5m2!1sfr!2scd"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

        {/* Carrousel d'images avec espacement dynamique */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8 p-4">
      <h2 className="text-2xl font-semibold mb-4">Images de l'événement</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={slidePercentage} // Ajustement dynamique selon la taille de l'écran
      >
        {eventImages.map((image, index) => (
          <div key={index} className="px-2">
            <img src={image.src} alt={image.alt} className="rounded-lg object-cover w-full h-64 md:h-96" />
          </div>
        ))}
      </Carousel>
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
