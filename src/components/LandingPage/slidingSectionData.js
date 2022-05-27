import React from 'react';
import PropTypes from 'prop-types';

const SlidingSectionData = ({ DataDetails }) => {
  return (
    <div className="w-full h-max flex overflow-x-hidden gap-x-10 justify-start p-5">
      {cardDetails.map((cardDetail) => (
        <FeedBackCard
          cardNumber={cardDetail.cardNumber}
          name={cardDetail.name}
          feedback={cardDetail.feedback}
        />
      ))}
    </div>
  );
};
SlidingSectionData.propTypes = {
  DataDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SlidingSectionData;
