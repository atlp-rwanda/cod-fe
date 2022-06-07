import React from 'react';

const ResetField = ({ name, type, isRequired, placeholder, handleChange, customClass = '' }) => {
  const inputClass =
    'relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm';
  return (
    <input
      name={name}
      type={type}
      required={isRequired}
      className={inputClass + customClass}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default ResetField;
