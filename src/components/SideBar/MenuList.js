/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/views/pages';
import { classNames } from '../tables/shared/Utils';
import TripIcon from '../../assets/icons/TripIcon';
import DashboardIcon from '../../assets/icons/DashboardIcon';

const MenuList = () => {
  const [page, setPage] = useState('trips');
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        <a
          className={classNames(
            'flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200',
            page === 'dashboard' ? 'text-yellow-600 bg-gray-300' : ''
          )}
          href="#"
          onFocus={() => setPage('dashboard')}
          onClick={() => dispatch(changePage(page))}
        >
          <DashboardIcon />

          <span className="mx-0 md:mx-4 font-medium">Dashboard</span>
        </a>
      </li>

      <li>
        <a
          className={classNames(
            'flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200',
            page === 'trips' ? 'text-yellow-600 bg-gray-300' : ''
          )}
          href="#"
          onFocus={() => setPage('trips')}
          onClick={() => dispatch(changePage(page))}
          data-testid="trip-link"
        >
          <TripIcon />

          <span className="mx-0 md:mx-4 font-medium">Trip</span>
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
