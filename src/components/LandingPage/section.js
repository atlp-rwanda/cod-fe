import React from 'react';
import PropTypes from 'prop-types';

const PageSection = ({ classProps, dataComponent, sectionId }) => {
  const Section = dataComponent;
  return (
    <section
      className={classProps}
      id={`section-${sectionId}`}
      data-testid={`section-${sectionId}`}
    >
      <Section />
    </section>
  );
};
PageSection.propTypes = {
  classProps: PropTypes.string.isRequired,
  dataComponent: PropTypes.func.isRequired,
  sectionId: PropTypes.string.isRequired,
};

export default PageSection;
