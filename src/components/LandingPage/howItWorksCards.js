import React from 'react';

const HowItWorksCard = (cardKey, iconClass, title, description) => {
  const Icon = iconClass;
  return (
    <div
      key={`card-${cardKey}`}
      className="h-[280px] w-[240px] rounded-lg shadow flex flex-col justify-center px-10 bg-white"
    >
      <Icon className="w-[50px] h-[50px] text-[#1EA4E9] mb-10" />
      <section className="h-[100px] md:w-max flex flex-col justify-between">
        <h1 className="text-xl bold leading-tight md:w-1/3">{title}</h1>
        <p className="text-sm text-[#5C6272] text-opacity-80 capitalize-sentence md:w-7/12">
          {description}
        </p>
      </section>
    </div>
  );
};

export default HowItWorksCard;
