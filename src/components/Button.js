import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'btn--primary' : 'btn--secondary';
  return (
    <button
      type="button"
      className={['btn', `btn--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
