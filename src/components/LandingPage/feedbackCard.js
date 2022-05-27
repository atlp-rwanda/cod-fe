import React from 'react';
import PropTypes from 'prop-types';

const FeedBackCard = ({ cardNumber, name, feedback }) => {
  return (
    <div
      key={`feedBackCard-${cardNumber}`}
      className="md:max-w-[250px] md:min-w-[250px] md:h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center p-10 cursor-pointer md:hover:scale-105 transition-all duration-300"
    >
      <span className="w-4/5 md:max-h-[50%] mx-auto text-center md:pb-5 md:mb-5 border-b border-black border-opacity-30">
        {name}
      </span>
      <span className="text-sm md:max-h-[50%] tracking-normal font-extralight overflow-y-hidden md:max-w-full">
        {feedback}
      </span>
    </div>
  );
};
FeedBackCard.propTypes = {
  cardNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default FeedBackCard;
