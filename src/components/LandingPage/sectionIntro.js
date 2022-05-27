import React from 'react';
import PropTypes from 'prop-types';

const SectionIntro = ({ introDetails }) => {
  const { key, sectionTitle, title, description } = introDetails;
  return (
    <div className="w-2/5 h-fit" key={`section-${key}`}>
      <span className="uppercase text-sm font-normal tracking-widest text-[#fab33f]">
        {sectionTitle}
      </span>
      <h1 className="capitalize tracking-wider text-4xl font-bold text-[#1E2A39] md:my-5">
        {title}
      </h1>
      <span className="capitalize tracking-normal text-[#5c6271] opacity-80">{description}</span>
    </div>
  );
};

SectionIntro.propTypes = {
  introDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SectionIntro;
