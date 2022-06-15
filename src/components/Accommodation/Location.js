import React from 'react';

const Location = ({ locations, description, name }) => {
  return (
    <div className="p-4">
      {locations.map((location) => (
        <span
          key={Math.random()}
          className="inline-block mx-1 px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
        >
          {location}
        </span>
      ))}
      <h2 className="mt-2 mb-2  font-bold">{name}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Location;
