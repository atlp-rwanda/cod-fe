/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

export default function NextArrow({ classProps, iconStyle, slideRef, btnId }) {
  return (
    <div
      className={classProps}
      onClick={() => slideRef.current.swiper.slideNext()}
      id={`nextBtn-${btnId}`}
      data-testid={`nextBtn-${btnId}`}
    >
      <HiOutlineArrowSmRight className={iconStyle} />
    </div>
  );
}
NextArrow.propTypes = {
  classProps: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  slideRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  btnId: PropTypes.string.isRequired,
};
