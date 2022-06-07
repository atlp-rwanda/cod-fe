import React from 'react';

const PasswordButton = ({ classStyles, styles, labelName }) => {
  return (
    <button type="submit" className={classStyles} style={styles}>
      {labelName}
    </button>
  );
};

export default PasswordButton;
