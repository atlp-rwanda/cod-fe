import React from 'react';

export default function Accomodations({ accommodations, handleChange }) {
  const keys = Object.keys(accommodations);
  return (
    <div style={{ marginBottom: '20px' }}>
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 ">
            <div className='"w-full md:w-full px-3 mb-6 md:mb-0'>
              <div className="flex items-center gap-x-4">
                <select
                  className="w-full text-gray-700 rounded shadow appearance-none focus:outline-none"
                  onChange={handleChange}
                >
                  <option>select accommodation</option>
                  {keys.map((item) => (
                    <option value={accommodations[item].id}>{accommodations[item].name} </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
