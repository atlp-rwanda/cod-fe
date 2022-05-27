/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';

export default function PrevArrow({ classProps, iconStyle, slideRef, btnId }) {
  return (
    <div
      className={classProps}
      onClick={() => slideRef.current.swiper.slidePrev()}
      id={`prevBtn-${btnId}`}
      data-testid={`prevBtn-${btnId}`}
    >
      <HiOutlineArrowSmLeft className={iconStyle} />
    </div>
  );
}
PrevArrow.propTypes = {
  classProps: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  slideRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  btnId: PropTypes.string.isRequired,
};
