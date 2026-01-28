'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setScrollY(scrolled);
      
      if (heroRef.current) {
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  const getOpacity = () => {
    const maxScroll = 300; // Distance to fade out completely
    const opacity = Math.max(0, 1 - (scrollY / maxScroll));
    return opacity;
  };

  // Calculate transform for content
  const getTransform = () => {
    const maxScroll = 300;
    const translateY = Math.min(50, (scrollY / maxScroll) * 50);
    return `translateY(${translateY}px)`;
  };

  return (
    <section className="hero-section">
      <div className="hero-background" ref={heroRef}>
        <div className="hero-overlay"></div>
      </div>
      
      <div 
        className="hero-content"
        style={{
          opacity: getOpacity(),
          transform: getTransform(),
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title animate-fade-in">
                <span className="hero-text-main">Welcome to</span>
                <span className="hero-text-brand">
                  <span className="blissful-text">Blissful</span> Lanka
                </span>
                <span className="hero-text-subtitle">Where Adventure Meets Serenity</span>
              </h1>
              
              <p className="hero-description animate-fade-in-delay">
                Step into a tropical paradise where the scent of jasmine fills the air 
                and ancient temples whisper stories of a proud past.
              </p>
              
              <div className="hero-buttons animate-fade-in-delay-2">
                <a href="/tours" className="btn btn-primary btn-lg hero-btn">
                   <span>Explore Tours</span>
                   <i className="fas fa-arrow-right"></i>
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="hero-scroll-indicator"
        style={{
          opacity: getOpacity(),
          transform: getTransform(),
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
} 