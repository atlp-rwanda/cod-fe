import { PlusIcon, FilterIcon } from '@heroicons/react/outline';
import React from 'react';
import { Button } from '../tables/shared/Button';

function TripsHeader() {
  return (
    <div className="py-2 flex gap-6">
      <Button
        child={
          <a href="./dashboard" className="flex items-center">
            {' '}
            <PlusIcon className="h-8" /> New Trip
          </a>
        }
      />

      <Button
        child={
          <a href="#" className="flex items-center">
            <FilterIcon className="h-8 " /> Filter
          </a>
        }
      />
    </div>
  );
}

export default TripsHeader;
