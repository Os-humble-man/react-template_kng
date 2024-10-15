import React from 'react';

export default function Card({ image, title, body }) {
  
  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img
          className="rounded-t-lg h-48 w-full object-cover md:h-60" // Adjust height on different screen sizes
          src={image}
          alt=""
        />
      </a>
      <div className="p-4 md:p-5"> {/* Adjust padding for responsiveness */}
        <a href="#">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm md:text-base">
          {body}
        </p>
        <a
          href="#"
          className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
