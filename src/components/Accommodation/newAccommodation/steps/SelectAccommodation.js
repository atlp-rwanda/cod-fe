import React from 'react';
import { useSelector } from 'react-redux';
import { useStepperContext } from '../../../../contexts/StepperContext';

export default function SelectAccommodation() {
  const { facilityData, setFacilityData } = useStepperContext();
  const { accommodations } = useSelector((state) => state.accommodation);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacilityData({ ...facilityData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Select Accommodation To create Facilities
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <select
            onChange={handleChange}
            value={facilityData['accomodationId'] || ''}
            name="accomodationId"
            placeholder="accomodationId"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            data-testid="selectAccommodation"
          >
            <option>Select</option>
            {Array.isArray(accommodations) &&
              accommodations.map((accommodation) => (
                <option key={accommodation.id} value={accommodation.id}>
                  {accommodation.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
