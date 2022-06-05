/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUsers } from 'react-icons/fa';
import { changePage } from '../../redux/views/pages';
import { classNames } from '../tables/shared/Utils';
import TripIcon from '../../assets/icons/TripIcon';
import DashboardIcon from '../../assets/icons/DashboardIcon';

const MenuList = () => {
  const [page, setPage] = useState('trips');
  const dispatch = useDispatch();
  const roleId = window.sessionStorage.getItem('roleId');

  return (
    <ul>
      <li>
        <a
          className={classNames(
            'flex items-center px-4 py-4 text-gray-700 rounded-md hover:bg-gray-200',
            page === 'dashboard' ? 'text-yellow-600 bg-gray-300' : ''
          )}
          href="#"
          onFocus={() => setPage('dashboard')}
          onClick={() => dispatch(changePage(page))}
        >
          <DashboardIcon />

          <span className="mx-0 font-medium md:mx-4">Dashboard</span>
        </a>
      </li>

      <li>
        <a
          className={classNames(
            'flex items-center px-4 py-4 mt-5 text-gray-600 rounded-md hover:bg-gray-200',
            page === 'trips' ? 'text-yellow-600 bg-gray-300' : ''
          )}
          href="#"
          onFocus={() => setPage('trips')}
          onClick={() => dispatch(changePage(page))}
          data-testid="trip-link"
        >
          <TripIcon />

          <span className="mx-0 font-medium md:mx-4">Trip</span>
        </a>
      </li>

      {roleId !== '1' ? (
        <div />
      ) : (
        <li>
          <a
            className={classNames(
              'flex items-center px-4 py-4 mt-5 text-gray-600 rounded-md hover:bg-gray-200',
              page === 'users' ? 'text-yellow-600 bg-gray-300' : ''
            )}
            href="#"
            onFocus={() => setPage('users')}
            onClick={() => dispatch(changePage(page))}
            data-testid="users-link"
          >
            <FaUsers className="w-[30px] h-[30px]" />

            <span className="mx-0 font-medium md:mx-4">Users</span>
          </a>
        </li>
      )}
      <li>
        <a
          className={classNames(
            'flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200',
            page === 'destinations' ? 'text-yellow-600 bg-gray-300' : ''
          )}
          href="#"
          onFocus={() => setPage('destinations')}
          onClick={() => dispatch(changePage(page))}
          data-testid="top-destinations"
        >
          <TripIcon />

          <span className="mx-0 font-medium md:mx-4">Top Destinations</span>
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
