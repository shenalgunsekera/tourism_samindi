'use client';

import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import DestinationCard from "./components/DestinationCard";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  const destinations = [
    {
      image: "/assets/images/homePageImg03.jpg",
      title: "Sigiriya",
      description: "Often referred to as the 'Eighth Wonder of the World,' Sigiriya is an ancient rock fortress located in the Central Province of Sri Lanka."
    },
    {
      image: "/assets/images/homePageImg05.jpg",
      title: "Dalada Maligawa",
      description: "Situated in Kandy, the cultural capital of Sri Lanka, this temple houses the sacred tooth relic of Lord Buddha."
    },
    {
      image: "/assets/images/homePageImg04.jpg",
      title: "Galle Fort",
      description: "Located on the southern coast, Galle Fort is a historic city with a blend of European architecture and South Asian traditions."
    }
  ];

  return (
    <div className="home-page">
      <HeroSection />

      <section className="destinations-section">
        <div className="container">
          <ScrollAnimation>
            <div className="section-header text-center animate-fade-in">
              <h2 className="section-title">
                <span className="title-accent">Discover</span> Sri Lanka's Must-See Destinations
              </h2>
              <p className="section-subtitle">
                From ancient wonders to natural beauty, explore the best of what Sri Lanka has to offer
              </p>
            </div>
          </ScrollAnimation>

          <div className="row">
            {destinations.map((destination, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <ScrollAnimation>
                  <DestinationCard 
                    {...destination}
                    delay={index * 0.2}
                  />
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="background-video">
            <source src="/assets/images/homePageV01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <ScrollAnimation>
              <div className="video-content text-center">
                <h2 className="video-title animate-fade-in">Waves That Speak Magic</h2>
                <p className="video-subtitle animate-fade-in-delay">
                  Experience the rhythm of island life on Sri Lanka's golden beaches.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ScrollAnimation>
                <div className="feature-content animate-fade-in-left">
                  <h3 className="feature-title">Discover Sri Lanka by Train</h3>
                  <p className="feature-description">
                    Embark on a scenic journey through misty mountains, lush tea estates, and golden coastlines. 
                    Sri Lanka's train rides are a breathtaking way to explore the island's beauty and charm.
                  </p>
                  <div className="feature-highlights">
                    <span className="highlight">Kandy to Ella route</span>
                    <span className="highlight">Colombo to Galle ride</span>
                    <span className="highlight">Nine Arch Bridge</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6">
              <ScrollAnimation>
                <div className="feature-image animate-fade-in-right">
                  <img src="/assets/images/homePageImg06.jpg" alt="Train Journey" className="img-fluid rounded" />
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 order-lg-2">
              <ScrollAnimation>
                <div className="feature-content animate-fade-in-left">
                  <h3 className="feature-title">Wildlife & Safaris</h3>
                  <p className="feature-description">
                    Sri Lanka is bursting with life, from gentle giants to jungle prowlers. 
                    Its wildlife is best explored through safaris in stunning national parks.
                  </p>
                  <div className="feature-highlights">
                    <span className="highlight">Yala National Park</span>
                    <span className="highlight">Udawalawe Elephant Herds</span>
                    <span className="highlight">Wilpattu Peaceful Escape</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6 order-lg-1">
              <ScrollAnimation>
                <div className="feature-image animate-fade-in-right">
                  <img src="/assets/images/homePageImg07.jpeg" alt="Wildlife Safari" className="img-fluid rounded" />
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <ScrollAnimation>
                <div className="feature-content animate-fade-in-left">
                  <h3 className="feature-title">Ceylon Tea: Sri Lanka's Golden Brew</h3>
                  <p className="feature-description">
                    Ceylon tea, grown in the misty highlands of Sri Lanka, is renowned for its vibrant flavor, 
                    aromatic notes, and golden hue. From the lush estates of Nuwara Eliya to the rolling hills 
                    of Hatton, each region produces leaves with unique character—ranging from brisk and citrusy 
                    to smooth and mellow.
                  </p>
                  <p className="feature-description">
                    Plucked by hand and nurtured by tropical sunshine and cool mountain air, this iconic tea 
                    has enchanted drinkers worldwide for over a century. Whether you sip it black, with milk, 
                    or as a spiced chai, Ceylon tea offers a taste of Sri Lanka's heart in every cup.
                  </p>
                  <div className="feature-highlights">
                    <span className="highlight">Nuwara Eliya Estates</span>
                    <span className="highlight">Hatton Highlands</span>
                    <span className="highlight">Traditional Processing</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6">
              <ScrollAnimation>
                <div className="feature-image animate-fade-in-right">
                  <img src="/assets/images/homePageImg08.jpg" alt="Tea Plantation" className="img-fluid rounded" />
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 order-lg-2">
              <ScrollAnimation>
                <div className="feature-content animate-fade-in-left">
                  <h3 className="feature-title">Sri Lankan Heritage: A Living Legacy</h3>
                  <p className="feature-description">
                    Sri Lanka's heritage is a rich tapestry woven from ancient kingdoms, sacred temples, 
                    colonial architecture, and vibrant traditions. From the majestic ruins of Anuradhapura 
                    and Polonnaruwa, to the sky-reaching rock fortress of Sigiriya, each site tells a story 
                    of devotion, artistry, and resilience.
                  </p>
                  <p className="feature-description">
                    The island's UNESCO World Heritage wonders—like the Temple of the Tooth in Kandy and 
                    the Golden Cave Temples of Dambulla—echo centuries of cultural pride. Beyond monuments, 
                    Sri Lankan heritage shines through colorful festivals, classical music, traditional dance, 
                    and timeless crafts that continue to inspire locals and enchant travelers.
                  </p>
                  <div className="feature-highlights">
                    <span className="highlight">Anuradhapura & Polonnaruwa</span>
                    <span className="highlight">Temple of the Tooth</span>
                    <span className="highlight">Golden Cave Temples</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6 order-lg-1">
              <ScrollAnimation>
                <div className="feature-image animate-fade-in-right">
                  <img src="/assets/images/homePageImg09.jpg" alt="Heritage Site" className="img-fluid rounded" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="attractions-section">
        <div className="container">
          <ScrollAnimation>
            <div className="section-header text-center animate-fade-in">
              <h2 className="section-title">Experience Sri Lanka's Soul</h2>
              <p className="section-subtitle">
                From golden Ceylon tea to handcrafted jewellery, discover the essence of Sri Lanka
              </p>
            </div>
          </ScrollAnimation>

          <div className="row">
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <Link href="/spices" className="attraction-card">
                  <div className="card attraction-card-inner">
                    <img src="/assets/images/homePageImg10.jpg" className="card-img-top" alt="Spices" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Spices</h5>
                      <p className="card-text">Discover the aromatic world of Sri Lankan spices</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <Link href="/gems" className="attraction-card">
                <div className="card attraction-card-inner">
                  <img src="/assets/images/homePageImg11.jpg" className="card-img-top" alt="Gems & Jewellery" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Gems & Jewellery</h5>
                    <p className="card-text">Explore precious stones and traditional craftsmanship</p>
                  </div>
                </div>
                </Link>
                </ScrollAnimation>
            </div>
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                  <Link href="/rafting" className="attraction-card">
                  <div className="card attraction-card-inner">
                  <img src="/assets/images/homePageImg12.jpg" className="card-img-top" alt="Rafting" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Rafting</h5>
                    <p className="card-text">Adventure through tropical rivers and rapids</p>
                  </div>
                </div>
                </Link>
                
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <ScrollAnimation>
                <Link href="/wildlife" className="attraction-card">
                  <div className="card attraction-card-inner">
                    <img src="/assets/images/homePageImg13.jpg" className="card-img-top" alt="Spices" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Wild-Life</h5>
                      <p className="card-text">Explore Sri Lanka’s wild side</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-md-6 mb-4">
              <ScrollAnimation>
              <Link href="/dancing" className="attraction-card">
              <div className="card attraction-card-inner">
                  <img src="/assets/images/homePageImg14.jpg" className="card-img-top" alt="Gems & Jewellery" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Sri Lankan dancing</h5>
                    <p className="card-text">Discover the vibrant pulse of Sri Lankan dance</p>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
            </div>
           
          </div>
          <div className="row">
             <div className="col-md-3 mb-3">
              <ScrollAnimation>
                <Link href="/arts" className="attraction-card">
                  <div className="card attraction-card-inner">
                    <img src="/assets/images/homePageImg15.jpg" className="card-img-top" alt="Spices" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Arts & crafts</h5>
                      <p className="card-text">Explore Sri Lankan wood carvings—art in every grain</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-md-3 mb-3">
              <ScrollAnimation>
                <Link href="/ayurvedha" className="attraction-card">
                 <div className="card attraction-card-inner">
                  <img src="/assets/images/homePageImg16.jpg" className="card-img-top" alt="Gems & Jewellery" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Ayurveda</h5>
                    <p className="card-text">Discover Sri Lanka’s healing touch with Ayurveda</p>
                  </div>
                </div>
                </Link>
                
              </ScrollAnimation>
            </div>
            <div className="col-md-3 mb-3">
              <ScrollAnimation>
                <Link href="/tea" className="attraction-card">
                  <div className="card attraction-card-inner">
                    <img src="/assets/images/homePageImg18.jpg" className="card-img-top" alt="Spices" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Ceylon tea</h5>
                      <p className="card-text">Sip the golden soul of Sri Lanka</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-md-3 mb-3">
              <ScrollAnimation>
                <Link href="/bathik" className="attraction-card">
                <div className="card attraction-card-inner">
                    <img src="/assets/images/homePageImg17.jpg" className="card-img-top" alt="Spices" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Batik</h5>
                      <p className="card-text">Wear the painted spirit of the island</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
