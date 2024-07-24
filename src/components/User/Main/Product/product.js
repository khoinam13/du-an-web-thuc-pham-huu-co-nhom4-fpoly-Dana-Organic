import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Products({ searchQuery }) {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []);

  let filteredProducts = Array.isArray(products) ? products : [];

  if (categoryId) {
    filteredProducts = filteredProducts.filter(product => product.categoryId === parseInt(categoryId));
  }

  if (searchQuery && searchQuery.trim() !== '') {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px',justifyContent:'center' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div className="card" style={{ width: '18rem' }} key={product.id}>
                <center>
                  <img src={product.image} height={'247px'} width={'247px'} alt={product.name} />
                </center>
                <div className="card-body">
                  <center>
                    <p><strong>
                      <Link
                        to={`/detail-product/${product.id}`}
                        className="card-title cardtitle"
                        style={{ color: "#83bb3e" }}
                      >
                        {product.name}
                      </Link>
                    </strong></p>
                    {product.oldPrice ? (
                      <p><del className="carddel">{product.oldPrice.toLocaleString()}đ</del></p>
                    ) : null}
                    <p className="carddel" style={{ fontWeight: 'bold' }}>
                      {product.price.toLocaleString()}đ
                    </p>
                  </center>
                </div>
              </div>
            ))
          ) : (
            <p>Không có sản phẩm nào.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
