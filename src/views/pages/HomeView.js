import React from 'react';
import HeaderContainer from '../../components/Header/HeaderContainer';
import HowItWorks from '../../components/LandingPage/howItWorks';
import PageSection from '../../components/LandingPage/section';
import TopDestinations from '../../components/LandingPage/topDestinations';
import Testmonials from '../../components/LandingPage/testimonials';
import Footer from '../../components/footer';

const HomeView = () => {
  return (
    <div className="bg-[#e8ebf0]" id="home">
      <HeaderContainer />
      <HowItWorks />
      <PageSection
        classProps="w-4/5 h-screen mx-auto py-20"
        dataComponent={TopDestinations}
        sectionId="destinations"
      />
      <PageSection
        classProps="w-4/5 h-[80vh] mx-auto py-20"
        dataComponent={Testmonials}
        sectionId="testimonials"
      />
      <Footer />
    </div>
  );
};

export default HomeView;
