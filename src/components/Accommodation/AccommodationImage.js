import React from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';

const AccommodationImage = ({ imageText }) => {
  return (
    <div className="relative pb-8 overflow-hidden">
      <CustomPlaceholder width={1200} height={200} backgroundColor="#123456" text={imageText} />
    </div>
  );
};

export default AccommodationImage;
