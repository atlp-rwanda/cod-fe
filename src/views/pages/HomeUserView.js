import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../components/SideBar';
import Trip from '../../components/Trips';

const HomeUserView = () => {
  const { page } = useSelector((state) => state.page);

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-full mx-[2vw] md:ml-[21vw] overflow-y-auto">
        {page === 'trips' ? <Trip /> : <div />}
      </div>
    </div>
  );
};

export default HomeUserView;
