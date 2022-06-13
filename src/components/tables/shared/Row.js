/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Row(props) {
  return (
    <span className="flex justify-start w-[70%] py-2 mr-auto  gap-72 border-y border-gray-200">
      {props.children}
    </span>
  );
}

export default Row;
