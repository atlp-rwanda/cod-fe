import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mostDestinationsAction } from '../../redux/actions/destinations.action';
import { accommodationsAction } from '../../redux/actions/accomodations.actions';
import DestinationsBody from './DestinationsBody';
import Alert from '../Auth/Alert';
import Spinner from '../reusable/Spinnar';
import Accomodations from './Accomodations';
import { mostTraveledInSingle } from '../../api/accomodationsApi';
import { getMostTraveled } from '../../redux/features/destinations.feature';

export const MostDestinations = () => {
  const { destinations, loading } = useSelector((state) => state.mostDestinations);
  const { accommodations } = useSelector((state) => state.allAccomodations);
  const dispatch = useDispatch();

  const selectOnChange = async (e) => {
    const accommodationId = e.target.value;
    const mostTraveled = await mostTraveledInSingle(accommodationId);
    if (mostTraveled) {
      dispatch(getMostTraveled(mostTraveled));
    }
  };

  useEffect(() => {
    dispatch(mostDestinationsAction());
    dispatch(accommodationsAction());
  }, []);
  return (
    <div className="container flex flex-col w-full p-8 mt-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {accommodations.length > 0 && (
        <Accomodations accommodations={accommodations} handleChange={selectOnChange} />
      )}
      <div className="flex flex-col">
        {!loading && destinations.length > 0 ? (
          <DestinationsBody destinations={destinations} />
        ) : (
          <Alert message="Data Not Found" heading="Error" variant="error" />
        )}
      </div>
    </div>
  );
};
