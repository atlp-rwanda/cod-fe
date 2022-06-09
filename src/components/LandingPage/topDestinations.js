import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlidingSectionHeader from './slidingSectionHeader';
import DestinationCard from './destinationCard';

const TopDestinations = () => {
  const introDetails = {
    key: 'topDestination',
    sectionTitle: 'top destinations',
    title: 'our popular destinations',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
  };
  const [cardDetails] = useState([
    {
      cardNumber: 1,
      country: 'Rwanda',
      city: 'Kigali',
      imageLink: 'https://pbs.twimg.com/media/EXaV2XjWoAAbWdK.jpg',
    },
    {
      cardNumber: 2,
      country: 'Rwanda',
      city: 'Kigali',
      imageLink: 'https://pbs.twimg.com/media/EXaV2XjWoAAbWdK.jpg',
    },
    {
      cardNumber: 3,
      country: 'Rwanda',
      city: 'Kigali',
      imageLink: 'https://pbs.twimg.com/media/EXaV2XjWoAAbWdK.jpg',
    },
    {
      cardNumber: 4,
      country: 'Rwanda',
      city: 'Kigali',
      imageLink: 'https://pbs.twimg.com/media/EXaV2XjWoAAbWdK.jpg',
    },
  ]);
  const destinationSwiperRef = useRef(null);
  return (
    <>
      <SlidingSectionHeader data={introDetails} slideRef={destinationSwiperRef} />
      <Swiper
        ref={destinationSwiperRef}
        slidesPerView={3}
        slidesPerGroup={3}
        loop={false}
        speed={800}
        loopFillGroupWithBlank
        className="w-full h-max flex gap-x-10 justify-start"
      >
        {cardDetails.map((cardDetail) => (
          <SwiperSlide className="p-5" key={cardDetail.cardNumber}>
            <DestinationCard
              cardNumber={cardDetail.cardNumber}
              country={cardDetail.country}
              city={cardDetail.city}
              imageLink={cardDetail.imageLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopDestinations;
