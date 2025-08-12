import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Our Story</h1>
            <p>Passion, craftsmanship, and the pursuit of perfect sound</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>The A-moose Legacy</h2>
              <p>
                Founded in 2010, A-moose Guitars began as a small workshop with a big dream: 
                to create guitars that not only sound exceptional but also inspire musicians 
                to reach new heights in their craft.
              </p>
              <p>
                Our founder, Alex Moose, started building guitars in his garage after years 
                of playing professionally. Frustrated with the lack of instruments that truly 
                spoke to his soul, he decided to build his own. What started as a personal 
                project quickly grew into a passion that would change his life forever.
              </p>
              <p>
                Today, A-moose Guitars is a team of dedicated craftsmen and women who share 
                Alex's vision. Each guitar we build is a testament to our commitment to 
                quality, innovation, and the timeless art of luthiery.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <i className="fas fa-tools"></i>
                <p>Our Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Passion</h3>
              <p>We pour our hearts into every instrument, treating each one as if it were our own.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Quality</h3>
              <p>We never compromise on quality, using only the finest materials and techniques.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries to create instruments that are both traditional and cutting-edge.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>We believe in building relationships with musicians and supporting the music community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The talented individuals behind every A-moose guitar</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Alex Moose</h3>
                <span className="member-role">Founder & Master Luthier</span>
                <p>With over 20 years of experience, Alex leads our team with his vision and expertise.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Sarah Chen</h3>
                <span className="member-role">Senior Craftsman</span>
                <p>Sarah specializes in acoustic guitars and brings her artistic vision to every instrument.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Mike Rodriguez</h3>
                <span className="member-role">Electric Guitar Specialist</span>
                <p>Mike's expertise in electronics and modern design creates our signature electric guitars.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Emily Johnson</h3>
                <span className="member-role">Finish Specialist</span>
                <p>Emily's attention to detail ensures every guitar has a flawless, beautiful finish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we bring your dream guitar to life</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Design & Planning</h3>
                <p>We work closely with you to understand your vision and create detailed specifications.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Material Selection</h3>
                <p>We carefully select the finest tonewoods and components for optimal sound quality.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Craftsmanship</h3>
                <p>Our skilled artisans handcraft each component with precision and care.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Assembly & Setup</h3>
                <p>We carefully assemble and fine-tune every guitar for perfect playability.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Quality Control</h3>
                <p>Each instrument undergoes rigorous testing to ensure it meets our high standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
