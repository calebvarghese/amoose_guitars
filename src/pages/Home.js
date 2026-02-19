import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Crafting <span className="highlight">Exceptional</span> Guitars
            </h1>
            <p className="hero-subtitle">
              Handcrafted instruments that inspire musicians to create their best music. 
              Every guitar tells a story of passion, precision, and artistry.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Explore Our Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose A-moose Guitars?</h2>
            <p>Discover what makes our instruments truly special</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Handcrafted Excellence</h3>
              <p>Each guitar is meticulously crafted by skilled artisans using traditional techniques and modern precision.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tree"></i>
              </div>
              <h3>Premium Materials</h3>
              <p>We source only the finest tonewoods and components to ensure exceptional sound quality and durability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Superior Sound</h3>
              <p>Our guitars are designed and built to deliver rich, balanced tones that inspire creativity.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Custom Builds</h3>
              <p>Create your dream guitar with our custom design service tailored to your unique preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Instruments</h2>
            <p>Explore our most popular guitar models</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <i className="fas fa-guitar"></i>
                </div>
              </div>
              <div className="product-info">
                <h3>Classic Acoustic</h3>
                <p>A timeless dreadnought with rich, warm tones perfect for any genre.</p>
                <Link to="/products" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <i className="fas fa-guitar"></i>
                </div>
              </div>
              <div className="product-info">
                <h3>Electric Dream</h3>
                <p>Versatile electric guitar with exceptional playability and stunning aesthetics.</p>
                <Link to="/products" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <i className="fas fa-guitar"></i>
                </div>
              </div>
              <div className="product-info">
                <h3>Bass Master</h3>
                <p>Powerful bass guitar with deep, resonant tones and excellent sustain.</p>
                <Link to="/products" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>What Musicians Say</h2>
            <p>Hear from artists who play our instruments</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The craftsmanship is incredible. My A-moose guitar has become an extension of my musical voice."</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <span>Professional Musician</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've played many guitars, but nothing compares to the tone and feel of my A-moose instrument."</p>
              </div>
              <div className="testimonial-author">
                <h4>Mike Rodriguez</h4>
                <span>Studio Guitarist</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The attention to detail is remarkable. Every note sings with clarity and warmth."</p>
              </div>
              <div className="testimonial-author">
                <h4>Emily Chen</h4>
                <span>Singer-Songwriter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Guitar?</h2>
            <p>Join countless musicians who have discovered their sound with A-moose Guitars.</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-primary">
                Browse Collection
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
