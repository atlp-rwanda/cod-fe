import React ,{ useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncDebounce } from 'react-table';
import { PlusIcon } from '@heroicons/react/outline';
import { Button } from './Button';
import SearchOptions from './SearchOptions';
import { setKeyword } from '../../../redux/features/search.feature';
import  { changePage }  from '../../../redux/views/pages';
import {
  fetchByDestination,
  fetchByDuration,
  fetchByEmail,
  fetchByName,
} from '../../../redux/thunks/search';
import { fetchTripReq } from '../../../redux/features/tripReq.feature';

// Define a default UI for filtering
export function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const dispatch = useDispatch();
  const [currentPage,setPage]=useState('trips');
  const { search } = useSelector((state) => state.searchOptions);
  const { searchOption } = useSelector((state) => state.page);
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="p-2 flex flex-col md:flex-row gap-6">
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
            <a
                href="/dashboard/comments"
                data-testid="statistics-link"
              >
                <span>Trip Comments</span>
              </a>
          }
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            value={value || ''}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`Search in ${count} records...`}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
              dispatch(setKeyword(e.target.value));
            }}
            data-testid="search-table"
          />
        </div>
        <SearchOptions />
        <button
          type="button"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            if (searchOption === 'byName') return dispatch(fetchByName(`${search}`));
            if (searchOption === 'byEmail') return dispatch(fetchByEmail(`${search}`));
            if (searchOption === 'destinations') return dispatch(fetchByDestination(`${search}`));
            if (searchOption === 'duration') return dispatch(fetchByDuration(`${search}`));
            return dispatch(fetchTripReq());
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

const Search = () => {
  return <div>Search</div>;
};

export default Search;
