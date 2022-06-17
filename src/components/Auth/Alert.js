import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, heading, variant, customClass }) => {
  let alertClass;
  if (variant === 'error') {
    alertClass = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5 ';
  } else if (variant === 'success') {
    alertClass =
      'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-5 ';
  }
  return (
    <div className={ alertClass + customClass} role="alert">
      <strong className="font-bold">{heading}:</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  heading: PropTypes.string,
  variant: PropTypes.string,
};

Alert.defaultProps = {
  message: '',
  heading: '',
  variant: '',
};

export default Alert;
