import React from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';

import bgImage from '../../assets/images/header-bg.jpeg';

const Room = ({ id, roomNumber, description, tripId, handleClick }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-8 overflow-hidden">
          <CustomPlaceholder
            width={400}
            height={200}
            backgroundColor="#123456"
            textColor="#ffffff"
            text="Room"
          />{' '}
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2  font-bold">Room Number</h2>
          <span className="inline-block mx-1 px-4 py-2 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-md">
            {roomNumber}
          </span>{' '}
          <p className="text-sm">{description}</p>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          <a
            className="w-full  text-center text-[#DD8D0B]  border border-solid border-[#FAB33F] rounded py-2.5 px-5 hover:bg-[#FAB33F] hover:text-white transition-colors duration-200"
            href="#"
            onClick={() => handleClick(tripId, id)}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Room;
