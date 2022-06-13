/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import DashboardHeader from '../../components/Header/DashboardHeader';
import SideBar from '../../components/SideBar';
import MobileMenu from '../../components/SideBar/MobileMenu'
import { Outlet } from 'react-router-dom';

const HomeUserView = () => {
  const { page } = useSelector((state) => state.page);
  return (
    <div>
    <div className="flex">
      <SideBar />
      <div className="w-full h-full mx-[2vw] md:ml-[21vw] overflow-y-auto">
        <DashboardHeader />
        {/* {page === 'trips' && <Trip /> }
        {page === 'accommodation' && <Accommodation /> } */}
        <Outlet/>
      </div>
    </div>
    <div className="md:hidden">
        <MobileMenu />
    </div>
    </div>
  );
};

export default HomeUserView;
