import React from 'react';
import { Link } from 'react-router-dom';
import { CustomPlaceholder } from 'react-placeholder-image';
import Location from './Location';

const roleId = window.sessionStorage.getItem('roleId');
const AccommodationCard = ({ id, name, description, location }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
      <Link
        to={`${id}`}
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-8 overflow-hidden">
          <CustomPlaceholder
            width={400}
            height={200}
            backgroundColor="#123456"
            textColor="#ffffff"
            text="Accommodation"
          />{' '}
        </div>
        <Location locations={location} name={name} description={description} />
        <div className="p-4 flex items-center text-sm text-gray-600">
          {roleId === '4' && (
            <Link
              className="w-1/2  text-center text-[#DD8D0B]  border border-solid border-[#FAB33F] rounded py-2 px-1 hover:bg-[#FAB33F] hover:text-white transition-colors duration-200"
              to={`feedback/${id}`}
            >
              Add Feedback
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default AccommodationCard;
