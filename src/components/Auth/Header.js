import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ heading, paragraph, linkName, linkUrl = '#' }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{heading}</h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{' '}
        <Link to={linkUrl} className="font-medium text-yellow-600 hover:text-yellow-500">
          {linkName}
        </Link>
      </p>
      <div className="spinner" />
    </div>
  );
};

Header.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  linkName: PropTypes.string,
  linkUrl: PropTypes.string,
};

Header.defaultProps = {
  heading: '',
  paragraph: '',
  linkName: '',
  linkUrl: '#',
};

export default Header;
