import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import { Link } from 'react-router-dom'; 

function Likeproduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/products');
        if (!res.ok) {
          throw new Error(' ok');
        }
        const data = await res.json();
        console.log('Dữ liệu nhận được:', data);
        setProducts(data.slice(0, 4)); 
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h3 className='h3'>Có thể bạn thích</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap',marginTop:'20px' }}>
          {products.map(product => (
            <div className=" mb-3" style={{ width: '90%' }} key={product.id}>
             {/* bỏ className="card" */}
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.image} height={'80%'} width={'100%'} alt={product.name} />
                </div>
                <div className="col-md-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="card-body">
                    <center>
                      <Link className="card-title cardtitle" style={{ color: '#83bb3e' }} to={`/detail-product/${product.id}`}>
                        {product.name}
                      </Link>
                      <div>
                        <p><del className="carddel">{(product.price + 10000).toLocaleString()}đ</del></p> {/* Giả sử có giá cũ */}
                        <p className="carddel" style={{ fontWeight: 'bold' }}>{product.price.toLocaleString()}đ</p>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Likeproduct;
