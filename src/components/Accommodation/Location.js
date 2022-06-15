import React from 'react';

const Location = ({ location }) => {
  return (
    <span className="inline-block mx-1 px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
      {location}
    </span>
  );
};

export default Location;
