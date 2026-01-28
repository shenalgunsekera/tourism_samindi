'use client';

import { useState } from 'react';

export default function DestinationCard({ image, title, description, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`destination-card animate-fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className={`card-overlay ${isHovered ? 'active' : ''}`}>
          <div className="overlay-content">
            <i className="fas fa-map-marker-alt"></i>
            <span>Explore</span>
          </div>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      
      
      <div className={`card-glow ${isHovered ? 'active' : ''}`}></div>
    </div>
  );
} 