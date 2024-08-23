import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import { Link } from 'react-router-dom'; 

function Likeproduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3030/v1/products');
        const result = await res.json();
        console.log(result);
        
        if (Array.isArray(result.data)) {
          // Hàm trộn mảng ngẫu nhiên
          const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          };

          // Trộn mảng sản phẩm và lấy 4 sản phẩm ngẫu nhiên
          const shuffledProducts = shuffleArray(result.data).slice(0, 4);
          
          // Cập nhật state với sản phẩm đã trộn
          setProducts(shuffledProducts);
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
      <div>
        <h3 className='h3'>Có thể bạn thích</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px', border: '1px solid #ebebeb', borderRadius: '15px' }}>
          {products.map(product => (
            <div className="mb-3" style={{ width: '90%' }} key={product.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.image} height={'80%'} width={'100%'} alt={product.name} />
                </div>
                <div className="col-md-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="card-body">
                    <center>
                      <Link className="card-title cardtitle" style={{ color: '#83bb3e' }} to={`/detail-product/${product._id}`}>
                        {product.productName}
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
