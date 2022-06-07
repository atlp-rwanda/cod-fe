import React from 'react';

const FormExtra = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="text-sm">
        <a href="/password/reset" className="font-medium text-yellow-600 hover:text-yellow-500">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default FormExtra;
