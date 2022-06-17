import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Location from './Location';
import FeedbackForm from './FeedbackForm';

import { fetchOneAccommodation } from '../../api/accomodationApi';
import addFeedback, { fetchFeedback } from '../../api/feedBackApi';
import AccommodationImage from './AccommodationImage';
import FeedbackCard from './FeedbacksCard';

const Feedback = () => {
  const { id: accommodationId } = useParams();
  const dispatch = useDispatch();

  const {feedbacks} = useSelector((state) => state.accommodation.feedback)

  useEffect(() => {
    dispatch(fetchOneAccommodation(accommodationId));
    dispatch(fetchFeedback({accommodationId}))
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
    <div className="container mx-auto text-gray-900  font-sans p-2 antialiased">
      <div className="flex flex-wrap ">
      <div className="w-full sm:w-1/2 md:w-full xl:w-full p-2">
        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
          <AccommodationImage imageText="Accommodation" />
          <Location locations={locations} name={name} description={description} />
          <FeedbackForm handleSubmit={handleSubmit} />
        </div>
        <ToastContainer autoClose={3000} />
      </div>
      <FeedbackCard   feedbacks={feedbacks}/>
    </div>
    </div>
  );
};

export default Feedback;
