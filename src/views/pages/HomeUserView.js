/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import DashboardHeader from '../../components/Header/DashboardHeader';
import SideBar from '../../components/SideBar';
import MobileMenu from '../../components/SideBar/MobileMenu';
import Trip from '../../components/Trips';
import UserRoles from '../../components/superAdmin/UserRoles';
import Profile from '../../components/profile/Profile';
import { MostDestinations } from '../../components/trips/MostDestinations';

const HomeUserView = () => {
  const { page } = useSelector((state) => state.page);
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="w-full mx-[2vw] md:ml-[21vw] overflow-y-auto">
          <DashboardHeader />
          {page === 'trips' ? <Trip /> : page === 'users' ? <UserRoles /> : <div />}
          {page === 'destinations' ? <MostDestinations /> : <div />}
          {page === 'profile' ? <Profile /> : <div />}
        </div>
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default HomeUserView;
