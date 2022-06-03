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
    backgroundColor: '#D2691E',
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
        classStyles="px-4 py-2 mt-2 font-bold text-white rounded shadow focus:shadow-outline focus:outline-none"
        styles={buttonStyles}
        labelName="Reset"
      />
    </form>
  );
};

export default ResetPassword;
