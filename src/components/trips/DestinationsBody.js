import React from 'react';

export default function DestinationsBody({ destinations }) {
  const keys = Object.keys(destinations);
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <div className="border-b border-gray-200 shadow">
          <table style={{ width: '100%' }}>
            <thead>
              <th className="px-6 py-2 text-xs text-gray-500">Destination</th>
              <th className="px-6 py-2 text-xs text-gray-500">Number of visits</th>
              <th className="px-6 py-2 text-xs text-gray-500">Accommodation Name</th>
            </thead>
            <tbody className="bg-white">
              {keys.map((key) => (
                <tr className='whitespace-nowrap"' id="">
                  <td className="px-6 py-4 text-sm text-gray-500" style={{ textAlign: 'center' }}>
                    {destinations[key].destination}
                  </td>
                  <td className="px-6 py-4 text-gray-500" style={{ textAlign: 'center' }}>
                    {destinations[key].trip_request_count}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500" style={{ textAlign: 'center' }}>
                    {destinations[key].Accomodation.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
