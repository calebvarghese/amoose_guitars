import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Classic Acoustic Dreadnought",
      category: "acoustic",
      price: "$2,499",
      description: "A timeless dreadnought with rich, warm tones perfect for any genre.",
      features: ["Solid Sitka Spruce top", "Mahogany back and sides", "Rosewood fingerboard", "Bone nut and saddle"]
    },
    {
      id: 2,
      name: "Electric Dream Stratocaster",
      category: "electric",
      price: "$3,299",
      description: "Versatile electric guitar with exceptional playability and stunning aesthetics.",
      features: ["Alder body", "Maple neck", "Rosewood fingerboard", "Custom pickups"]
    },
    {
      id: 3,
      name: "Bass Master Precision",
      category: "bass",
      price: "$2,899",
      description: "Powerful bass guitar with deep, resonant tones and excellent sustain.",
      features: ["Alder body", "Maple neck", "Rosewood fingerboard", "Active electronics"]
    },
    {
      id: 4,
      name: "Folk Singer Parlor",
      category: "acoustic",
      price: "$1,899",
      description: "Compact parlor guitar with intimate, warm tones perfect for fingerpicking.",
      features: ["Solid Cedar top", "Mahogany back and sides", "Short scale length", "Lightweight design"]
    },
    {
      id: 5,
      name: "Rock Star Les Paul",
      category: "electric",
      price: "$3,799",
      description: "Classic Les Paul design with powerful humbucker pickups and sustain for days.",
      features: ["Mahogany body", "Maple top", "Rosewood fingerboard", "Humbucker pickups"]
    },
    {
      id: 6,
      name: "Jazz Bass Deluxe",
      category: "bass",
      price: "$3,199",
      description: "Smooth jazz bass with warm, mellow tones and exceptional playability.",
      features: ["Alder body", "Maple neck", "Rosewood fingerboard", "Jazz pickups"]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1>Our Instruments</h1>
            <p>Discover the perfect guitar for your musical journey</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Instruments
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'acoustic' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('acoustic')}
            >
              Acoustic Guitars
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'electric' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('electric')}
            >
              Electric Guitars
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'bass' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('bass')}
            >
              Bass Guitars
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-item">
                <div className="product-image">
                  <div className="product-placeholder">
                    <i className="fas fa-guitar"></i>
                  </div>
                  <div className="product-category">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                  <p className="product-description">{product.description}</p>
                  <div className="product-features">
                    <h4>Features:</h4>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn btn-primary">Inquire About This Guitar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Build Section */}
      <section className="custom-build-section section">
        <div className="container">
          <div className="custom-build-content">
            <div className="custom-build-text">
              <h2>Custom Build Your Dream Guitar</h2>
              <p>
                Can't find exactly what you're looking for? Let us create a custom guitar 
                tailored to your specifications. From wood selection to hardware choices, 
                every detail will be crafted to your preferences.
              </p>
              <div className="custom-features">
                <div className="custom-feature">
                  <i className="fas fa-palette"></i>
                  <span>Custom Finishes</span>
                </div>
                <div className="custom-feature">
                  <i className="fas fa-tree"></i>
                  <span>Wood Selection</span>
                </div>
                <div className="custom-feature">
                  <i className="fas fa-cogs"></i>
                  <span>Hardware Options</span>
                </div>
                <div className="custom-feature">
                  <i className="fas fa-music"></i>
                  <span>Pickup Configuration</span>
                </div>
              </div>
              <button className="btn btn-primary">Start Custom Build</button>
            </div>
            <div className="custom-build-image">
              <div className="image-placeholder">
                <i className="fas fa-tools"></i>
                <p>Custom Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
