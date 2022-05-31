/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../reusable/Spinnar';

function EditButton(props) {
  const { editFunction } = props;
  const editStates = useSelector((status) => status.edit);
  return (
    <div>
      {editStates.isLoading ? (
        <Spinner />
      ) : editStates.editDisabled ? (
        <button
          disabled
          type="button"
          className="text-xl rounded-md border border-yellow-500 text-yellow-500 p-2 w-48 my-4 hover:bg-yellow-500 hover:text-white hover:text-2xl mx-auto"
        >
          Edit
        </button>
      ) : (
        <button
          onClick={editFunction}
          type="button"
          className="text-xl rounded-md border border-yellow-500 text-white p-2 w-48 my-4 bg-yellow-500 hover:bg-yellow-600 hover:text-white hover:text-2xl mx-auto"
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default EditButton;
