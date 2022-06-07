/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkEmail } from '../../api/passwordApi';
import Alert from '../Auth/Alert';
import PasswordButton from './PasswordButton';
import ResetField from './ResetField';
import { resetPasswordField } from '../../constants/formFields';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [emailData, setEmail] = useState({});
  const [error, setError] = useState({ status: false, message: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await checkEmail(emailData);
    if (response.resetToken) {
      return navigate(`/password/reset/${response.resetToken}`);
    }
    return setError(response);
  };

  const onEmail = (e) => {
    const { name, value } = e.target;
    setEmail((values) => ({ ...values, [name]: value }));
  };

  const buttonStyles = {
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {error.status && <Alert message={error.message} heading="Error" variant="error" />}
      <ResetField
        name={resetPasswordField.name}
        type={resetPasswordField.type}
        isRequired={resetPasswordField.isRequired}
        placeholder={resetPasswordField.placeholder}
        handleChange={onEmail}
      />
      <PasswordButton
        classStyles="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-10"
        styles={buttonStyles}
        labelName="Reset"
      />
    </form>
  );
};

export default ResetPassword;
