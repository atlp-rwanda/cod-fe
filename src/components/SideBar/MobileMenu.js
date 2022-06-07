import { GlobeAltIcon } from '@heroicons/react/solid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/views/pages';

function MobileMenu() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen">
      <section
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        {/* <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      > */}
        <div id="tabs" className="flex justify-between">
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            onClick={() => dispatch(changePage('dashboard'))}
          >
            <span className="tab tab-home block text-xs">Dashboard</span>
          </a>
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 flex flex-col items-center text-center pt-2 pb-1"
            onClick={() => dispatch(changePage('trips'))}
          >
            <span className="tab tab-kategori block text-xs">Trips</span>
            <GlobeAltIcon className="w-8" />
          </a>
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <span className="tab tab-explore block text-xs">Explore</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default MobileMenu;
