
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProfileMatching from '@/components/ProfileMatching';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <div className="content-container py-8">
          <Features />
          <div className="py-16">
            <ProfileMatching />
          </div>
          <div className="py-12">
            <Testimonials />
          </div>
          <div className="py-16">
            <CTA />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
