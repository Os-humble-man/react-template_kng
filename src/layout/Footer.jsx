import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

const partners = [
  { name: 'Partner 1', logo: 'url-to-logo-1' },
  { name: 'Partner 2', logo: 'url-to-logo-2' },
  { name: 'Partner 3', logo: 'url-to-logo-3' },
];

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <ul className="flex flex-wrap justify-center space-x-4 mb-4">
            <li  className="hover:text-gray-400">Accueil</li>
            <li  className="hover:text-gray-400">À propos</li>
            <li  className="hover:text-gray-400">Contact</li>
            <li className="hover:text-gray-400">Événements</li>
          </ul>

          <div className="flex space-x-6 mb-4">
            {partners.map((partner, index) => (
              <img key={index} src={partner.logo} alt={partner.name} className="h-10" />
            ))}
          </div>

          <div className="mt-4 text-xs text-center">
            <p>&copy; {new Date().getFullYear()} Oscar Kanangila. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer