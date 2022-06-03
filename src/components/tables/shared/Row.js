/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Row(props) {
  return (
    <span className="flex justify-between p-2 border-y border-gray-200 bg-gray-50">
      {props.children}
    </span>
  );
}

export default Row;
