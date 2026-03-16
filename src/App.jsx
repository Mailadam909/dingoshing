import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Victorian Pocket Watch',
      price: '$150',
      image: '🕰️'
    },
    {
      id: 2,
      name: 'Antique Brass Telescope',
      price: '$280',
      image: '🔭'
    },
    {
      id: 3,
      name: 'Classic Leather Armchair',
      price: '$450',
      image: '🪑'
    },
    {
      id: 4,
      name: 'Ornate Wooden Mirror',
      price: '$200',
      image: '🪞'
    },
    {
      id: 5,
      name: 'Vintage Typewriter',
      price: '$320',
      image: '⌨️'
    },
    {
      id: 6,
      name: 'Antique Wall Clock',
      price: '$180',
      image: '🕐'
    }
  ];

  return (
    <div className="app">
      {/* Header and Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">✨</span>
            <h1>Vintage Treasures</h1>
          </div>
          <nav className="nav">
            <button
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
            <button
              className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
              onClick={() => setActiveSection('products')}
            >
              Products
            </button>
            <button
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
            <button
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h2>Discover Timeless Elegance</h2>
              <p>Explore our curated collection of authentic antiques and vintage treasures</p>
              <button
                className="cta-button"
                onClick={() => setActiveSection('products')}
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      {activeSection === 'products' && (
        <section className="products">
          <div className="container">
            <h2>Our Collections</h2>
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <button className="add-to-cart">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="about">
          <div className="container">
            <h2>About Vintage Treasures</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Welcome to Vintage Treasures, your premier destination for authentic antiques and timeless collectibles. Since 1995, we have been dedicated to sourcing the finest pieces from around the world.
                </p>
                <p>
                  Each item in our collection is carefully selected and authenticated to ensure quality and authenticity. We specialize in Victorian-era furniture, vintage timepieces, scientific instruments, and rare collectibles.
                </p>
                <p>
                  Our passionate team of experts is committed to helping you find the perfect piece for your home or collection.
                </p>
              </div>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <h4>Authenticated Items</h4>
                  <p>Every piece is verified for authenticity</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <h4>Expert Curators</h4>
                  <p>Decades of collecting experience</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <h4>Secure Shipping</h4>
                  <p>Professional packaging and delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="info-item">
                  <h4>📍 Visit Us</h4>
                  <p>123 Antique Lane<br/>Heritage City, HC 12345</p>
                </div>
                <div className="info-item">
                  <h4>📞 Call Us</h4>
                  <p>(555) 123-4567</p>
                </div>
                <div className="info-item">
                  <h4>✉️ Email</h4>
                  <p>info@vintagetreasures.com</p>
                </div>
                <div className="info-item">
                  <h4>🕐 Hours</h4>
                  <p>Mon-Sat: 10am-6pm<br/>Sun: 12pm-5pm</p>
                </div>
              </div>
              <form className="contact-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
                <textarea
                  placeholder="Your Message"
                  className="form-textarea"
                  rows="6"
                ></textarea>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Vintage Treasures. All rights reserved.</p>
          <p>Preserving history, one treasure at a time.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;