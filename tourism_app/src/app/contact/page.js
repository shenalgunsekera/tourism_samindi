'use client';

import ScrollAnimation from "../components/ScrollAnimation";
import Comment from "../components/comment";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="contact-title animate-fade-in">
                <span className="title-accent">Get</span> In Touch
              </h1>
              <p className="contact-subtitle animate-fade-in-delay">
                Ready to start your Sri Lanka adventure?
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <ScrollAnimation>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="contact-description animate-fade-in">
                  <p className="lead">
                    We're here to help you plan the perfect Sri Lanka experience. 
                    Whether you have questions about our tours or need help with 
                    booking, our travel experts 
                    are ready to assist you.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="row mt-5">
            <div className="col-md-6 mb-6">
              <ScrollAnimation>
                <div className="contact-card">
                  <div className="contact-card-content">
                    <i className="fas fa-phone contact-icon"></i>
                    <h3>Call Us</h3>
                    <p>+94 77 419 2111</p>
                    <p>+94 77 771 3613</p>
                    <p>+94 71 190 1194</p>
                    
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-6 mb-6">
              <ScrollAnimation>
                <div className="contact-card">
                  <div className="contact-card-content">
                    <i className="fas fa-envelope contact-icon"></i>
                    <h3>Email Us</h3>
                    <p>blissfullankatourism@gmail.com</p>
                    <p>We reply within 24 hours</p>
                    <p>Don't hesitate to reach out!</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            
          </div>
        </div>
      </section>
      <div>
        <Comment />
      </div>
    </div>
    
  );
} 