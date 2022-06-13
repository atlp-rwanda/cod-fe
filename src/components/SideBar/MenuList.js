/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from './MenuItem';
import { changePage } from '../../redux/views/pages';

import sidebarItems from '../../constants/sidebarItems';

const sidebarItemState = {};
sidebarItems.forEach((item) => {
  sidebarItemState[item.id] = '';
});

const MenuList = () => {
  const dispatch = useDispatch();
  const roleId = window.sessionStorage.getItem('roleId');

  const [pageState, setPage] = useState('dashboard');

  const handleFocus = (e) => {
    const { id } = e.target;
    setPage(id);
  };

  const handleClick = () => {
    dispatch(changePage(pageState));
  };

  return (
    <ul>
      {sidebarItems.map((item) => (
        <MenuItem
          key={item.id}
          handleFocus={handleFocus}
          handleClick={handleClick}
          value={item.value}
          icon={item.icon}
          active={pageState.includes(item.value)}
          isAdmin={item.isAdmin}
          roleId={roleId}
        />
      ))}
    </ul>
  );
};

export default MenuList;
