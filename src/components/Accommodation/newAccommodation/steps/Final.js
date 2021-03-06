/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStepperContext } from '../../../../contexts/StepperContext';
import { createNewRoom } from '../../../../api/roomApi';

export default function Final() {
  const { facilityData, setFacilityData } = useStepperContext();
  const { accomodationId, roomNumber, images, description } = facilityData;
  const dispatch = useDispatch();
  const { addSuccess, addFail } = useSelector((state) => state.accommodation.rooms);
  const { message, dataDetails } = addFail;

  useEffect(() => {
    dispatch(createNewRoom({ accomodationId, roomNumber, images: 'string', description }));
  }, []);

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        {addSuccess ? (
          <div className="mt-3 text-xl font-semibold uppercase text-green-500">
            Room added successfully
          </div>
        ) : addFail ? (
          <div className="mt-3 text-xl font-semibold uppercase text-red-500">{message}</div>
        ) : null}
        {dataDetails && !addSuccess && (
          <div className="text-lg font-semibold text-gray-500">{dataDetails}</div>
        )}
        <a className="mt-10" href="/dashboard/accommodation">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
      </div>
    </div>
  );
}
