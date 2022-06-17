/* eslint-disable no-nested-ternary */
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../../components/Header/DashboardHeader';
import SideBar from '../../components/SideBar';
import MobileMenu from '../../components/SideBar/MobileMenu';
import Chat from '../../components/chat';

const HomeUserView = () => {
  return (
    <div className="h-screen">
      {/* <Chat /> */}
      <div className="flex">
        <SideBar />
        <div className="w-full h-full mx-[2vw] md:ml-[21vw] overflow-y-auto">
          <DashboardHeader />
          <Outlet />
        </div>
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default HomeUserView;
