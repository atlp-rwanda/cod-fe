import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';

function MoreOptions() {
  return (
    <div>
      <div className="inline-flex items-center">
        <div className="inline-flex items-center rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium  text-red-500 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
            data-testid="delete-button"
          >
            <TrashIcon className="w-5 h-5 mr-2" />
            <span>Delete</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-blue-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            data-testid="edit-button"
          >
            <PencilAltIcon className="w-5 h-5 mr-2" />
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoreOptions;
