import React from 'react';

const SectionHeader = (introDetails) => {
  const { key, title, description } = introDetails;
  return (
    <section className="w-2/5 h-max text-center mb-20" key={`section-${key}`}>
      <h1 className="text-4xl font-bold tracking-wide text-[#1E2A39] mb-3">{title}</h1>
      <p className="text-sm text-opacity-80 tracking-wide text-[#5C6272]">{description}</p>
    </section>
  );
};

export default SectionHeader;
