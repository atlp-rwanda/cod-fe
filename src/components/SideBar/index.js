/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import logo from '../../assets/images/bn-dashboard.png';
import MenuList from './MenuList';

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className=" invisible md:visible">
      {showSidebar ? (
        <button
          className="flex text-4xl text-yellow-600 items-center cursor-pointer fixed right-[17vw] md:left-[17vw] top-1 z-50 bg-white p-2 w-4 rounded"
          onClick={() => setShowSidebar(!showSidebar)}
          type="button"
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-3 md:left-10  top-6"
          fill="#FAB33F"
          viewBox="0 0 100 80"
          width="40"
          height="40"
          data-testid="sidebar-toggle"
        >
          <rect width="100" height="10" />
          <rect y="30" width="100" height="10" />
          <rect y="60" width="100" height="10" />
        </svg>
      )}
      <div
        className={`top-0 right-0 md:left-0 w-[20vw] bg-primary pt-0  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full hidden'
        }`}
      >
        <div className="flex flex-col w-full h-screen px-0 md:px-4 py-12 overflow-y-auto bg-white">
          <img src={logo} alt="logo" className="text-3xl font-semibold text-center " />
          <div className="flex flex-col justify-between mt-6">
            <aside>
              <MenuList />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
