import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css'; // Import your custom CSS
// import { Carousel } from 'react-bootstrap';
import Carouselcomp from './Carouselcomp';

function Home() {
  return (
    <div className="landing-page">
      <header className="text-white py-5" id="head" class="top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5 mb-5 ml">
              <h2>Welcome to Our Farm-to-Table Marketplace</h2>
              <p>Your Connection to Fresh, Locally Grown Agricultural Delights</p>
              <button to="/buy" className="btn btn-light btn-lg">
                Explore Fresh Produce
              </button>
            </div>
            <div className="col-md-9 mt-5 mb-5">
              {/* <img
                src="https://images.unsplash.com/photo-1559884743-74a57598c6c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFncmljdWx0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Agricultural Landscape"
                className="img-fluid"
              /> */}

              <Carouselcomp/>
            </div>
          </div>
        </div>
      </header>

      <section className="product-section bg-light-green py-5">
        <div className="container">
          <h3>Products</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="product-card">
                <img
                  src="https://in.uplonline.com/product_images/Spruce.png"
                  alt="Product 1"
                  className="img-fluid"
                />
                <h3>Product 1</h3>
                <p>Description of Product 1</p>
                <div class="product-actions">
                  <button class="btn btn-warning">Add to Wishlist</button>
                  <button class="btn btn-success">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="product-card">
                <img
                  src="https://in.uplonline.com/product_images/Spruce.png"
                  alt="Product 2"
                  className="img-fluid"
                />
                <h3>Product 2</h3>
                <p>Description of Product 2</p>
                <div class="product-actions">
                  <button class="btn btn-warning">Add to Wishlist</button>
                  <button class="btn btn-success">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="product-card">
                <img
                  src="https://in.uplonline.com/product_images/Spruce.png"
                  alt="Product 3"
                  className="img-fluid"
                />
                <h3>Product 3</h3>
                <p>Description of Product 3</p>
                <div class="product-actions">
                  <button class="btn btn-warning">Add to Wishlist</button>
                  <button class="btn btn-success">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Become a Grower Partner</h2>
              <p>
                Are you a local farmer or producer? Join our community and share your harvest with the world.
              </p>
              <button to="/sell" className="btn btn-success">
                Start Selling Your Harvest
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhcm0lMjBwcm9kdWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Farm Fresh Produce"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Share Your Farming Journey</h2>
              <p>
                Have a story or wisdom to pass on? Contribute to our agricultural community and empower others.
              </p>
              <button to="/share" className="btn btn-success">
                Share Your Farming Insights
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://plus.unsplash.com/premium_photo-1686156705774-0401c8dfafe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGZhcm1lcnMlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Farm Community"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
