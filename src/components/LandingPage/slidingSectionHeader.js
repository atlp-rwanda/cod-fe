import React from 'react';
import PropTypes from 'prop-types';
import SectionIntro from './sectionIntro';
import NextArrow from '../buttons/nextArrow';
import PrevArrow from '../buttons/prevArrow';

const SlidingSectionHeader = ({ data, slideRef }) => {
  const buttonStyle = 'drop-shadow-md p-4 rounded-[50%] bg-white cursor-pointer hover:bg-[#ebebeb]';
  const arrowStyle = 'md:w-max h-[25px]';
  let arrowBtnId;
  // eslint-disable-next-line no-unused-expressions
  data.key === 'topDestination' ? (arrowBtnId = data.key) : (arrowBtnId = data.key);
  return (
    <div className="w-full h-max flex justify-between items-end md:mb-20">
      <SectionIntro introDetails={data} />
      <div className="md:w-[10%] h-fit flex justify-between">
        <PrevArrow
          classProps={buttonStyle}
          iconStyle={arrowStyle}
          slideRef={slideRef}
          btnId={arrowBtnId}
        />
        <NextArrow
          classProps={buttonStyle}
          iconStyle={arrowStyle}
          slideRef={slideRef}
          btnId={arrowBtnId}
        />
      </div>
    </div>
  );
};
SlidingSectionHeader.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  slideRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SlidingSectionHeader;
