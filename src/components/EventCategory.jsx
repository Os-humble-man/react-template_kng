import React from 'react';
import CategoryData from '../utils/categoryData';

export default function EventCategory() {
  return (
    <div className="mx-auto sm:px-6 lg:px-4 container px-4">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Event Categories
        </h2>
        <a href="#" className="text-sm font-medium text-primary hover:underline">
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 py-5">
        {CategoryData.map((category, index) => (
          <a
            key={index}
            href="#"
            className="group flex flex-col items-center justify-center rounded-lg bg-gray-300 p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground"
            prefetch={false}
          >
            <category.categoryIcon className="h-8 w-8 text-muted-foreground group-hover:text-accent-foreground" />
            <span className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-accent-foreground">
              {category.categoryName}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
