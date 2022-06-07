/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { changePassword } from '../../api/passwordApi';
import Alert from '../Auth/Alert';
const NewPassword = () => {
  const [error, setError] = useState({ status: false, message: '' });
  const [password, getPassword] = useState({});
  const params = useParams();
  const { token } = params;
  const navigate = useNavigate();
  const resetPassword = async (e) => {
    e.preventDefault();
    const response = await changePassword(password, token);
    if (response.status) {
      return setError(response);
    }
    return navigate('/login');
  };
  
  const newInput = (e) => {
    const { name } = e.target;
    const email = e.target.value;
    getPassword((values) => ({ ...values, [name]: email }));
  };
  
  return (
    <form onSubmit={resetPassword}>
      {error.status && <Alert message={error.message} heading="Error" variant="error" />}
      <input
        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
        name="password"
        type="password"
        id="password"
        placeholder="Enter Password"
        onChange={newInput}
      />

      <button
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-10"
        type="submit"
        style={{ }}
      >
        Save
      </button>
    </form>
  );
};

export default NewPassword;
