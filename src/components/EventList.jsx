import React, { useEffect, useState } from 'react';
import Card from './cards/Card';
import { useFetch } from '../hooks/useFetch';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const { fetchData } = useFetch();
  const [allimages, sestallimages] = useState([]);


  const getEvents = async () => {
    try {
      const response = await fetchData('GET', 'event/list');
      if (response.status === 200) {
        setEvents(response.data.result);
      }

      const imageList = await response.data?.result.map(async (image) => {
        let image_path = image.cover_image;
        if (image_path.slice(0, 1) === ".")
            image_path = image_path.slice(1, image_path.length);

        const response = await fetch(`/api/images?img=${image_path}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
        });
        const imageData = await response.blob();
        // const img = URL.createObjectURL(imageData);
        return imageData;
    });

    const finalResult = await Promise.all(imageList);
    sestallimages(finalResult);
    } catch (error) {
        console.log(error);
        
    }

  };

  

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="mx-auto sm:px-6 lg:px-4 container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-8 border-b">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Upcoming Events
          </h2>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8">
          {events.slice(0, 3).map((event, index) => (
            <Card
              key={index}
              image={`http://localhost:5500${event.cover_image}`} 
              title={event.title}
              body={event.description}
            />
          ))}
        </div>

        <div className="flex justify-between py-8 border-b">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Featured Events
          </h2>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8 border-b">
          {events.map((event, index) => (
            <Card
              key={index}
              image={`http://localhost:5500${event.cover_image}`} 
              title={event.title}
              body={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
