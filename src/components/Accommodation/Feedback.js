import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Location from './Location';
import FeedbackForm from './FeedbackForm';

import { fetchOneAccommodation } from '../../api/accomodationApi';
import addFeedback from '../../api/feedBackApi';
import AccommodationImage from './AccommodationImage';

const Feedback = () => {
  const { id: accommodationId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneAccommodation(accommodationId));
  }, []);

  const { name, description, location } = useSelector(
    (state) => state.accommodation.oneAccommodation
  );

  const locations = location === undefined ? [] : location;

  const handleSubmit = (e, feedback) => {
    e.preventDefault();
    dispatch(addFeedback({ accommodationId, feedback }));
  };

  return (
    <div className="w-full sm:w-full md:w-1/2 xl:1/2 p-4 ">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <AccommodationImage imageText="Accommodation" />
        <Location locations={locations} name={name} description={description} />
        <FeedbackForm handleSubmit={handleSubmit} />
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Feedback;
