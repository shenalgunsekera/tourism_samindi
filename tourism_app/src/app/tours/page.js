'use client';

import ScrollAnimation from "../components/ScrollAnimation";
import TourCard from "../components/tourCard";


export default function Tours() {
  return (
    <div className="tours-page">
      <section className="tours-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="tours-title animate-fade-in">
                <span className="title-accent">Discover</span> Our Tours
              </h1>
              <p className="tours-subtitle animate-fade-in-delay">
                Carefully curated experiences across Sri Lanka
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
 <section className="tours-cards">
  <div className="container">
    <div className="row mt-4">
      <TourCard 
        title="Package 01 (7 days)"
        description="Journey through Sri Lanka’s soul—wild safaris in Yala, misty hills of Ella, colonial charm in Nuwara Eliya, sacred Kandy, ancient caves in Dambulla, majestic Sigiriya, and gentle elephants in Pinnawala—ending with coastal serenity."
        pdfUrl="\pdfs\one_updated.pdf"
      />
      
      <TourCard 
        title="Package 02 (4 days)"
        description="Discover Sri Lanka’s wild beauty and cultural charm in four days. From Yala’s thrilling safaris to Ella’s misty hills, colonial Nuwara Eliya, sacred Kandy, and gentle elephants in Pinnawala—this journey blends nature, heritage, and heartfelt hospitality."
        pdfUrl="\pdfs\two_updated.pdf"
      />
      <TourCard 
        title="Package 03 (3 days)"
         description="Explore Sri Lanka’s wild safaris, misty hills, colonial charm, sacred temples, and elephant orphanage—an unforgettable journey from Yala to Kandy to the coast"
        pdfUrl="\pdfs\three_updated.pdf"
      />
    </div>
  </div>
</section>

  
      
    </div>
  );
} 