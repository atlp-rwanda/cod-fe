import React from 'react';

export default function Dialog({comment,removeHandler}) {
  return (
    <div>
      <div className='p-6 space-y-6"'>
        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>Are you sure to delete a comment ? </p>
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <button data-modal-toggle="small-modal" type="button" onClick={removeHandler.bind(this, comment,"yes")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ backgroundColor: '#D2691E', color:'#fff' }}>Yes</button>
        <button data-modal-toggle="small-modal" type="button" onClick={removeHandler.bind(this,comment,"no")} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
      </div>
    </div>
  );
}