import React from 'react';
import Carouselcomp from './Carouselcomp';
import '../CSS/Buyer.css';

function Buyer() {
  return (
    <div className="container mt-1" id='main-div'>

        <div className="container mb-3">
        <Carouselcomp/>
        </div>
        <hr></hr>
        <div className="popular-destinations-see-all mb-2">
        <h1>Categories</h1>
        {/* <a href="#" className="popular-destinations-link">See all →</a> */}
        <div className="popular-destinations-items">
        <div className="popular-destinations-item">
            <img src="https://krushiindia.com/wp-content/uploads/2022/04/Product_02-2-1.png" alt="Jewelry & Watches" />
            <span className="popular-destinations-item-label">Fertilizers</span>
        </div>
        <div className="popular-destinations-item">
            <img src="https://www.indiapesticideslimited.com/assets/images/products/Herbicides/Agni%20Plus.jpg" alt="Beauty" />
            <span className="popular-destinations-item-label">Pesticides</span>
        </div>
        <div className="popular-destinations-item">
            <img src="https://agribegri.com/productimage/e3bc7e8bf1192399934d0e8d1641bf28-01-09-23-18-39-34.jpg" alt="Computers & Tablets" />
            <span className="popular-destinations-item-label">Boosters</span>
        </div>
        <div className="popular-destinations-item">
            <img src="https://cdn.shopify.com/s/files/1/0722/2059/files/1_310e9328-bb46-4a49-9cc9-b7ae99953733.webp?v=1689162915" alt="Toys" />
            <span className="popular-destinations-item-label">Herbicides</span>
        </div>
        <div className="popular-destinations-item">
            <img src="https://khetigaadi.com/resize/large/images/new-implement/JohnDeereMulti-CropMechanicalPlanterMP1004_0_1572858520.png" alt="Cellphones & Accessories" />
            <span className="popular-destinations-item-label">Accessories</span>
        </div>
        <div className="popular-destinations-item">
            <img src="https://plantae.garden/wp-content/uploads/2021/12/agricultura-circular-intensiva-I.png" alt="Shoes" />
            <span className="popular-destinations-item-label">Shoes</span>
        </div>
        </div>


  </div>

  <hr></hr>
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



      {/* <div className="row">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <div className="form-outline">
              <input
                id="search-input"
                type="search"
                className="form-control"
                placeholder="Search"
              />
              <label className="form-label" htmlFor="search-input">
                Search
              </label>
            </div>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Buyer;
