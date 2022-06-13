/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodation } from '../api/roomApi';
import AccommodationCard from './Accommodation/AccommodationCard';

const Accommodation = () => {
  const dispatch = useDispatch();
  const { accommodations } = useSelector((state) => state.accommodation);
  useEffect(() => {
    dispatch(fetchAccommodation());
  }, []);

  return (
    <>
      <div className="container mx-auto text-gray-900  font-sans p-2 antialiased">
        <div className="flex flex-wrap -mx-4">
          {accommodations.map(({ id, name, description, location }) => (
            <AccommodationCard key={id} id = {id} name={name} description={description} location={location} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Accommodation;
