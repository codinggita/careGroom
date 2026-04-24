import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Collections from '../components/Collections';
import Journal from '../components/Journal';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Collections />
        <Journal />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
