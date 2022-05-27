import React from 'react';
import Header from '../../components/Auth/Header';
import LandingHeader from '../../components/Header/landingPageHeader';

const LoginView = () => {
  return (
    <>
      <LandingHeader classProps="w-4/5 h-fit bg-[#1E2A39] mt-10 backdrop-blur-md rounded-lg flex justify-between p-7 m-auto top-20" />
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 border p-10 rounded shadow-lg">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />
        </div>
      </div>
    </>
  );
};

export default LoginView;
