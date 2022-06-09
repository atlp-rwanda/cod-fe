import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlidingSectionHeader from './slidingSectionHeader';
import FeedBackCard from './feedbackCard';

const Testmonials = () => {
  const introDetails = {
    key: 'testimonials',
    sectionTitle: 'testimonials',
    title: 'what our clients say',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
  };
  const [cardDetails] = useState([
    {
      cardNumber: 1,
      name: 'Nestor N',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
    {
      cardNumber: 2,
      name: 'Kevin K',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
    {
      cardNumber: 3,
      name: 'Serge M.',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
    {
      cardNumber: 4,
      name: 'Faustin I',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
    {
      cardNumber: 5,
      name: 'Nestor N',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
    {
      cardNumber: 6,
      name: 'Kevin K',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
    {
      cardNumber: 7,
      name: 'Serge M.',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
    {
      cardNumber: 8,
      name: 'Faustin I',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
  ]);
  const testimonialsSwiperRef = useRef(null);
  return (
    <>
      <SlidingSectionHeader data={introDetails} slideRef={testimonialsSwiperRef} />
      <Swiper
        className="w-full h-max flex gap-x-10 justify-center"
        ref={testimonialsSwiperRef}
        slidesPerView={4}
        slidesPerGroup={2}
        speed={800}
        loop={false}
        loopFillGroupWithBlank
      >
        {cardDetails.map((cardDetail) => (
          <SwiperSlide className="p-5" key={cardDetail.cardNumber}>
            <FeedBackCard
              cardNumber={cardDetail.cardNumber}
              name={cardDetail.name}
              feedback={cardDetail.feedback}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testmonials;
