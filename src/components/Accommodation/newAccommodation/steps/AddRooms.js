import React from 'react';
import { useStepperContext } from '../../../../contexts/StepperContext';

export default function Details() {
  const { facilityData, setFacilityData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacilityData({ ...facilityData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Enter Room Number and description
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={facilityData['roomNumber'] || ''}
            name="roomNumber"
            placeholder="Room Number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            data-testid="roomNumber"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={facilityData['description'] || ''}
            name="description"
            placeholder="Description"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
