import React from 'react';
import Header from '../components/Auth/Header';
import Signup from '../components/Auth/Signup';

const SignupView = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border p-8 rounded shadow-lg">
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        <Signup />
      </div>
    </div>
  );
};

export default SignupView;
