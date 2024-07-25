import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductSlide({ productId }) {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products?similarTo=${productId}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchProducts();
  }, [productId]);

  const productGroups = [];
  for (let i = 0; i < products.length; i += productsPerPage) {
    productGroups.push(products.slice(i, i + productsPerPage));
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productGroups.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productGroups.length) % productGroups.length);
  };

  return (
    <div style={{ width: '100%', margin: '20px auto',marginBottom:"50px" }}>
      <h2 style={{ padding: '10px 0 10px 20px',fontSize:'40px' }}>SẢN PHẨM KHÁC</h2>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {productGroups.map((group, groupIndex) => (
            <div
              className={`carousel-item ${groupIndex === currentIndex ? 'active' : ''}`}
              key={groupIndex}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {group.map(item => {
                  const discountedPrice = item.price * 0.7; // Tính giá giảm

                  return (
                    <div className="card" style={{ width: '18rem' }} key={item.id}>
                      <center>
                        <img
                          src={item.image}
                          height="247px"
                          width="247px"
                          alt={item.name}
                          style={{ objectFit: 'cover' }}
                        />
                      </center>
                      <div className="card-body">
                        <center>
                          <Link
                            to={`/product/${item.id}`}
                            className="card-title cardtitle"
                            style={{ color: '#83bb3e' }}
                          >
                            {item.name}
                          </Link>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                          <p>
                        <del className="carddel">{item.price.toLocaleString()}đ</del>
                      </p>
                      <p className="carddel" style={{ fontWeight: "bold" }}>
                        {discountedPrice.toLocaleString()}đ
                      </p>
                          </div>
                        </center>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={handlePrevious}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ProductSlide;
