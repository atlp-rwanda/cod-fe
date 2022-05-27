import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LandingHeader = ({ classProps }) => {
  return (
    <div className={classProps} data-testid="header">
      <div className="w-max text-white">
        <p className="text-x">
          <span className="text-2xl text-[#FAB33F]">B</span>arefoot
          <span className="text-2xl text-[#FAB33F] ml-3.5">N</span>omad
        </p>
      </div>
      <div className="flex list-none w-1/4 justify-between items-center text-white cursor-pointer">
        <li>
          <Link
            data-testid="homeBtn"
            to="/"
            className="hover:text-[#FAB33F] transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-[#FAB33F] transition duration-300">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contactUs" className="hover:text-[#FAB33F] transition duration-300">
            Contact Us
          </Link>
        </li>
      </div>
      <div className="flex list-none justify-evenly items-center w-1/6">
        <li>
          <Link
            to="/login"
            className="text-white border border-transparent rounded hover:border-[#FAB33F] py-2.5 px-5 hover:text-[#FAB33F] transition-colors duration-200"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-[#FAB33F]  border border-solid border-[#FAB33F] rounded py-2.5 px-5 hover:bg-[#FAB33F] hover:text-white transition-colors duration-200"
          >
            Sign Up
          </Link>
        </li>
      </div>
    </div>
  );
};

LandingHeader.propTypes = {
  classProps: PropTypes.string.isRequired,
};

export default LandingHeader;
