import React from 'react';

export const ToolTip = (props) => {
  const { message } = props;
  return (
    <div className="w-auto z-50">
      <h1 className="text-base text-white bg-black p-2 z-50">{message}</h1>
    </div>
  );
};
