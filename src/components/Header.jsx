import React from 'react';
import Navbar from '../layout/Navbar';
import imgPrincipal from '../assets/img/picture.jpg';

export default function Header() {
  return (
    <div className="w-full bg-bg-image border-b pt-20"> {/* Ajout de padding-top */}
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 h-full">
            <img
              src={imgPrincipal}
              alt="Event hero image"
              loading="lazy"
              className="rounded-lg object-cover w-full h-[300px] md:h-[500px]" // Adjust height for small screens
            />
          </div>
          
          {/* Texte et Search Bar */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-[300px] md:h-[500px]"> {/* Adjust height */}
            {/* Search Bar */}
            <form className="mt-0">
              <div className="flex items-center">
                <label
                  htmlFor="search-dropdown"
                  className="sr-only text-sm font-medium text-gray-900 dark:text-white"
                >
                  Search
                </label>
                
                {/* Dropdown Button */}
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories{' '}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Search Input */}
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white border border-gray-300 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required
                  />
                  
                  {/* Search Button */}
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-600 rounded-r-lg border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Titre et Description */}
            <div className="space-y-2 md:space-y-4"> {/* Reduced space on small screens */}
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Discover Amazing Events Near You
              </h1>
              <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">
                From concerts to workshops, find the perfect event for your interests. 
                Join thousands of event-goers and create unforgettable memories.
              </p>
            </div>

            {/* Explore Button */}
            <div className="flex justify-start md:justify-end mt-2 md:mt-0"> {/* Reduced margin on small screens */}
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
