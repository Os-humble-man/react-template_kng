import React from 'react';
import Cardsdata from '../utils/cardData';
import Card from './cards/Card';

export default function EventList() {
  return (
    <div className="mx-auto sm:px-6 lg:px-4 container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Events Section */}
        <div className="flex justify-between py-8 border-b">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Upcoming Events
          </h2>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8">
          {Cardsdata.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              image={item.eventImage}
              title={item.eventTitle}
              body={item.eventDescription}
            />
          ))}
        </div>

        {/* Featured Events Section */}
        <div className="flex justify-between py-8 border-b">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Featured Events
          </h2>
          <a href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8 border-b">
          {Cardsdata.map((item, index) => (
            <Card
              key={index}
              image={item.eventImage}
              title={item.eventTitle}
              body={item.eventDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
