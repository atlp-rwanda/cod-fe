import React from 'react';

import UserImage from './UserImage';
import UserFeedback from './UserFeedback'

const FeedbackCard = ({feedbacks}) => {
  return (
    <>
    {feedbacks.map(({id,feedback, User})=>(
      <div className="w-full sm:w-1/2 md:w-1/5 xl:w-1/4 p-4 mr-4">
      <div className="c-card block bg-white shadow-lg hover:shadow-lg rounded-md overflow-hidden">
        <UserImage key={Math.random()} imageText="User" />
        <UserFeedback key = {id} feedback={feedback} name={User.firstname}  />
      </div>
    </div>
    ))}
    </>
  );
};

export default FeedbackCard;
