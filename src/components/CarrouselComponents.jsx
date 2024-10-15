import { useState, useEffect } from "react";
import Carousel from "react-responsive-carousel"; // Assurez-vous d'importer correctement

const ResponsiveCarousel = ({ eventImages }) => {
  const [slidePercentage, setSlidePercentage] = useState(33.33); // Valeur par défaut

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
  );
};

export default ResponsiveCarousel;
