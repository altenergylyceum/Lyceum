import React from 'react';
import HeroSection from '../components/home/hero-section';
import AboutSection from '../components/home/about-section';
import SpecialtiesSection from '../components/home/specialties-section';
import NewsSection from '../components/home/news-section';
import StatsSection from '../components/home/stats-section';
import TestimonialsSection from '../components/home/testimonials-section';
import CtaSection from '../components/home/cta-section';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <StatsSection />
      <NewsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;