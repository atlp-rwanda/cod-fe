/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTripId } from '../../../redux/views/pages';
import { classNames } from './Utils';

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{render('Header')}: </span>
      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : 'unknown';

  return (
    <span
      className={classNames(
        'px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm',
        status.startsWith('approved') ? 'bg-green-100 text-green-800' : null,
        status.startsWith('pending') ? 'bg-yellow-100 text-yellow-800' : null,
        status.startsWith('rejected') ? 'bg-red-100 text-red-800' : null
      )}
    >
      {status}
    </span>
  );
}
export function ReviewTrip(props) {
  const data = useSelector((state) => state.tripRequests.trips[props.count.current]);
  props.count.current += 1;
  return (
    <Link to="/approval" state={{ ...data, index: props.count.current }}>
      <button type="button" data-testid="review-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </button>
    </Link>
  );
}
export function AvatarCell({ value, column, row }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <div className="mt-1">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          data-testid="options-checkbox"
          id={`checkbox-${row.id}`}
          onChange={() => dispatch(changeTripId(row.id))}
          checked={row.id === useSelector((state) => state.page.tripId)}
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{row.original[column.emailAccessor]}</div>
      </div>
    </div>
  );
}
