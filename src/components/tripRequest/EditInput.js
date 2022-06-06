import React from 'react';

function EditInput(props) {
  const { label, labelId, currentData, className, styles, setValue, type } = props;
  return (
    <div className={`${className} my-1`}>
      <div className="flex flex-col">
        <label htmlFor={labelId}>{label}</label>
        <input
          type={`${type}` || 'text'}
          className={`${styles} rounded-md my-2 p-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500`}
          defaultValue={currentData}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default EditInput;
