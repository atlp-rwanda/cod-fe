import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const fixedItemClass = 'flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200';

const MenuItem = ({ handleFocus, handleClick, value, icon, active , roleId, isAdmin}) => {
  const customClass = active ? 'text-yellow-600 bg-gray-300' : '';
  let menuTitle = value.charAt(0).toUpperCase() + value.slice(1);
  const linkUrl = value.toLowerCase().replace(/\s/g, '');
  return (
     
    <li style={isAdmin && roleId !== 1 ? {display:'none'}:{}}>
      <Link
        className={fixedItemClass + customClass}
        to={linkUrl == 'dashboard' ? '' : linkUrl}
        onFocus={handleFocus}
        onClick={handleClick}
        id={menuTitle}
        data-testid={menuTitle + '-link'}
      >
        {icon()}
        <span className="mx-0 font-medium md:mx-4">{menuTitle}</span>
      </Link>
    </li>
  );
};

MenuItem.prototype = {
  handleFocus: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.func,
  active: PropTypes.bool,
};

MenuItem.defaultProps = {
  handleFocus: () => {},
  handleClick: () => {},
  value: '',
  icon: () => {},
  active: false,
};

export default MenuItem;
