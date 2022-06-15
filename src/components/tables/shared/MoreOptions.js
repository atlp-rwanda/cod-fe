import { PencilAltIcon, TrashIcon, XCircleIcon, EyeIcon, CheckIcon } from '@heroicons/react/solid';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { changeTripId } from '../../../redux/views/pages';

function MoreOptions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.page.tripId);
  const data = useSelector((states) => states.tripRequests.trips[id]);

  return (
    <div>
      <div className="inline-flex items-center">
        <div className="inline-flex space-x-1 items-center rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium  text-red-500 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
            data-testid="delete-button"
          >
            <TrashIcon className="w-5 h-5 mr-2" />
            <span>Delete</span>
          </button>
          {!data?.User && data?.status === 'pending' ? (
            <button
              onClick={() => navigate('/trip/edit', { state: data })}
              type="button"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-blue-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              data-testid="edit-button"
            >
              <PencilAltIcon className="w-5 h-5 mr-2" />
              <span>Edit</span>
            </button>
          ) : (
            <div />
          )}
          {data?.User && data?.status === 'pending' ? (
            <button
              onClick={() => navigate('/trip/review', { state: data })}
              type="button"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-blue-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              data-testid="review-button"
            >
              <CheckIcon className="w-5 h-5 mr-2" />
              <span>Review</span>
            </button>
          ) : (
            <div />
          )}
          {data?.status !== 'pending' ? (
            <button
              onClick={() => navigate('/trip/review', { state: data })}
              type="button"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-blue-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              data-testid="view-button"
            >
              <EyeIcon className="w-5 h-5 mr-2" />
              <span>View</span>
            </button>
          ) : (
            <div />
          )}
          {data?.status === 'approved' ? (
            <Link
              to={`/dashboard/accommodation/${data?.Accomodation.id}?tripId=${data?.id}`}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-blue-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              data-testid="view-button"
            >
              <EyeIcon className="w-5 h-5 mr-2" />
              <span>View Rooms</span>
            </Link>
          ) : (
            <div />
          )}
          <div className="px-12" />
          <button
            onClick={() => dispatch(changeTripId(null))}
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium  text-gray-500 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-600 focus:z-10 focus:ring-2 focus:ring-gray-600 focus:text-gray-600"
            data-testid="cancel-button"
          >
            <XCircleIcon className="w-5 h-5 mr-2" />
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoreOptions;
