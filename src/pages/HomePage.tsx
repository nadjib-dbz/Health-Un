import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Health'un - Your Path to Wellness</title>
        <meta name="description" content="Health'un combines trusted health information, personalized wellness plans, and bio products to support your health journey in Algeria." />
      </Helmet>
      
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;