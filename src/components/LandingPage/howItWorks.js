import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { SiYourtraveldottv } from 'react-icons/si';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import HowItWorksCard from './howItWorksCards';
import SectionHeader from './sectionHeader';

const HowItWorks = () => {
  const [cards] = useState([
    {
      cardNumber: 1,
      icon: IoLocationOutline,
      title: 'Select Destination',
      description: 'at first choose the place you to go',
    },
    {
      cardNumber: 2,
      icon: SiYourtraveldottv,
      title: 'Book a Trip',
      description: 'book your trip from our exclusive offers',
    },
    {
      cardNumber: 3,
      icon: MdOutlineBedroomParent,
      title: 'Book a Room',
      description: 'book your room from our best accomodations',
    },
    {
      cardNumber: 4,
      icon: BiWorld,
      title: 'Enjoy Your Trip',
      description: 'Start your trip on your prefered date and enjoy',
    },
  ]);
  const [introDetails] = useState([
    {
      key: 'howItWorks',
      title: 'How It Works',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima. Excepturi magnam sapiente consequuntur.',
    },
  ]);
  return (
    <div
      className="w-4/5 h-[50vh] my-20 mx-auto flex flex-col items-center justify-center"
      id="howItWorks"
      data-testid="howItWorks"
    >
      {introDetails.map((introDetail) => SectionHeader(introDetail))}
      <section className="flex md:w-[85%] justify-between">
        {cards.map((card) =>
          HowItWorksCard(card.cardNumber, card.icon, card.title, card.description)
        )}
      </section>
    </div>
  );
};

export default HowItWorks;
