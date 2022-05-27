import React from 'react';
import PropTypes from 'prop-types';

const DestinationCard = ({ cardNumber, country, city, imageLink }) => {
  return (
    <div
      key={`destinationCard-${cardNumber}`}
      className="border md:min-w-[364px] md:h-[495px] bg-no-repeat bg-cover rounded-[16px] flex flex-col justify-between py-10 pl-12 text-white cursor-pointer md:hover:scale-105 transition-all duration-300"
      style={{ backgroundImage: `url(${imageLink})` }}
    >
      <div>
        <span className="bg-white bg-opacity-10 backdrop-blur-2xl md:py-3 md:px-7 rounded-[50px] shadow-lg">
          {country}
        </span>
      </div>
      <div>
        <span className="text-2xl tracking-widest font-bold">{city}</span>
      </div>
    </div>
  );
};
DestinationCard.propTypes = {
  cardNumber: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
};

export default DestinationCard;
