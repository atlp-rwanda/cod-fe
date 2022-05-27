import React from 'react';
import LandingHeader from './landingPageHeader';
import BookTripForm from '../forms/bookTripForm';
import bgImage from '../../assets/images/header-bg.jpeg';

const HeaderContainer = () => {
  return (
    <>
      <div
        className="bg-[rgb(2,0,36)] w-full h-screen flex flex-col justify-evenly items-center bg-no-repeat bg-cover"
        data-testid="headerContainer"
        id="headerContainer"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <LandingHeader classProps="w-4/5 h-fit bg-white bg-opacity-10 backdrop-blur-md rounded-lg flex justify-between p-7" />
        <div className="text-white text-center">
          <h1 className="text-7xl mb-10">
            Explore A New World
            <br />
            With Us.
          </h1>
          <p className="text-base opacity-80">
            Plan and book your perfect trip with the expert advice, travel
            <br />
            tips, destination information and inspiration from us.
          </p>
        </div>
        <BookTripForm />
      </div>
    </>
  );
};

export default HeaderContainer;
