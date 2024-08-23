import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./Home.css"; 

function TopProduct() {
  const [products, setProducts] = useState([]);
  const [discountProducts, setDiscountProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3030/v1/products');
        const result = await response.json();
        
        if (Array.isArray(result.data)) {
          const sortedProducts = result.data.sort((a, b) => a.price - b.price);
          setProducts(sortedProducts.slice(0, 4)); 
          setDiscountProducts(sortedProducts.slice(-1)); 
        } else {
          console.error('Unexpected data format:', result);
        }
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '60px', marginTop: '60px' }}>
        <div style={{ width: '100%', margin: '0 auto', textAlign: 'center', color: '#777' }}>
          <h6 style={{ fontSize: '20px' }}>Thịnh hành</h6>
        </div>
        <div style={{ width: '100%', margin: '0 auto', textAlign: 'center', color: '#20242e', fontFamily: 'Quicksand', fontSize: '48px' }}>
          <h3 style={{ fontSize: '48px' }}>Sản phẩm thịnh hành</h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px', width: '100%' }}>
          <div style={{ width: '65%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
            {products.map((item) => {
              const discountedPrice = item.price * 0.7;
              return (
                <div key={item.id} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
                  <div className=" mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0" style={{ width: '395px' }}>
                      <div className="col-md-6">
                        <center><img src={item.image} height={'247px'} width={'247px'} alt={item.name} /></center>
                      </div>
                      <div className="col-md-6" style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <div className="card-body">
                          <center>
                            <Link to={`/detail-product/${item.id}`} className="card-title cardtitle" style={{ color: '#83bb3e' }}>
                              {item.productName}
                            </Link>
                            <div>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ borderRadius: '16px', width: '500px', height: '600px', backgroundColor: '#005350', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '65%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
              <p style={{ color: 'white', fontSize: '25px' }}>
                Giảm giá sâu trong tuần
              </p>
              {discountProducts.length > 0 ? (
                discountProducts.map((item) => {
                  const discountedPrice = item.price * 0.75; // Giả sử giảm giá 25%
                  return (
                    <div key={item.id} className="card" style={{ width: '18rem' }}>
                      <center>
                        <img src={item.image} height={'247px'} width={'247px'} alt={item.name} />
                      </center>
                      <div className="card-body">
                        <center>
                          <Link className="card-title cardtitle" style={{ color: '#83bb3e' }}>{item.productName}</Link>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                            <p><del className="carddel">{item.price.toLocaleString()}đ</del></p>
                            <p className="carddel" style={{ fontWeight: 'bold' }}>{discountedPrice.toLocaleString()}đ</p>
                          </div>
                        </center>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p style={{ color: 'white' }}>Chưa có sản phẩm giảm giá</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopProduct;
