import React, { useState } from 'react';

const UserFeedback = ({ feedback, name }) => {
  const [userFeedback, setFeedback] = useState('')
   if (userFeedback !== feedback) {
      setFeedback(feedback)
   }
  return (
    <div className="p-4">
      <h2 className="mt-2 mb-2  font-bold">{name}</h2>
      <p className="text-sm">{userFeedback}</p>
    </div>
  );
};

export default UserFeedback;
