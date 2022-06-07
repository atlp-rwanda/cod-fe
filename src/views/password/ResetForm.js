import React from 'react';
import Header from '../../components/Auth/Header';
import LandingHeader from '../../components/Header/landingPageHeader';
import ResetPassword from '../../components/password/ResetPassword';

const ResetForm = () => {
  return (
    <div>
      <LandingHeader classProps="w-4/5 h-fit bg-[#1E2A39] mt-10 backdrop-blur-md rounded-lg flex justify-between p-7 m-auto top-20" />
      <div className="flex items-center justify-center h-screen min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-10 space-y-8 border rounded shadow-lg">
          <Header heading="Reset Password" />
          <ResetPassword />
        </div>
      </div>
    </div>
  );
};

export default ResetForm;
