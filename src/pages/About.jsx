import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaBell, FaEnvelope, FaPhone } from "react-icons/fa";
import Container from "../layout/Container";

export default function AboutPage() {
  return (
    <Container>
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Section Image Header */}
      <div className="relative w-full h-[300px] mb-8">
        <img
          src="/placeholder.svg"
          alt="EventApp banner"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Titre Principal */}
      <h1 className="text-4xl font-bold text-center mb-8">À propos de EventApp</h1>

      {/* Section Notre Mission */}
      <section className="mb-12">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
          <p>
            Chez EventApp, notre mission est de connecter les gens à travers des expériences uniques et mémorables.
            Née de la passion pour les rencontres et le partage, notre plateforme simplifie la découverte et
            l'organisation d'événements de toutes tailles.
          </p>
          <p>
            Que vous soyez un organisateur chevronné ou simplement à la recherche de votre prochaine aventure,
            EventApp vous offre les outils et les opportunités pour créer des moments inoubliables. Notre technologie
            innovante et notre interface conviviale permettent à chacun de trouver, planifier et participer à des
            événements qui correspondent à ses intérêts.
          </p>
          <p>
            Rejoignez notre communauté grandissante et découvrez un monde de possibilités à portée de main.
            Avec EventApp, chaque jour est une occasion de vivre quelque chose d'extraordinaire.
          </p>
        </div>
      </section>

      {/* Section Fonctionnalités Principales */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Nos fonctionnalités principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FaCalendarAlt, title: "Gestion d'événements", description: "Créez et gérez facilement vos événements" },
            { icon: FaUsers, title: "Réseautage", description: "Connectez-vous avec d'autres participants" },
            { icon: FaMapMarkerAlt, title: "Localisation", description: "Trouvez des événements près de chez vous" },
            { icon: FaBell, title: "Notifications", description: "Restez informé des événements à venir" },
          ].map((feature, index) => (
            <div key={index} className="border rounded-lg p-6 text-center">
              <feature.icon className="text-primary text-3xl mb-4" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Notre équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Sophie Martin", role: "Fondatrice & CEO", image: "/placeholder.svg" },
            { name: "Thomas Dubois", role: "Directeur technique", image: "/placeholder.svg" },
            { name: "Emma Lefebvre", role: "Responsable marketing", image: "/placeholder.svg" },
          ].map((member, index) => (
            <div key={index} className="border rounded-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mb-4 w-24 h-24 object-cover mx-auto"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Nos partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((partner) => (
            <div key={partner} className="flex items-center justify-center">
              <img
                src={`/placeholder.svg?text=Partner${partner}`}
                alt={`Partenaire ${partner}`}
                className="w-32 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Contactez-nous</h2>
        <div className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <FaEnvelope className="text-lg mr-2" />
                  <span>contact@eventapp.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-lg mr-2" />
                  <span>+33 1 23 45 67 89</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Votre nom" className="w-full border rounded-lg p-2" />
                <input type="email" placeholder="Votre email" className="w-full border rounded-lg p-2" />
                <textarea placeholder="Votre message" className="w-full border rounded-lg p-2" />
                <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg w-full">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section Appel à l'action */}
{/* Section Appel à l'action */}
<section className="text-center">
  <h2 className="text-2xl font-semibold mb-6">Prêt à découvrir de nouveaux horizons ?</h2>
  <button className="bg-primary text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
    Explorez nos événements
  </button>
</section>
    </div>
    </Container>
  );
}
