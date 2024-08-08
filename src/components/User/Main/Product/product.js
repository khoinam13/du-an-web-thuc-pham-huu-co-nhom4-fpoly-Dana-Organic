import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');


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

  if (searchQuery.trim() !== '') {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }



  switch (sortOption) {
    case 'priceAsc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      filteredProducts.sort((a, b) => a.id - b.id);
      break;
  }



  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'start', gap: '30px', flexWrap: 'wrap', marginLeft: '30px' }}>
          <div style={{ height: '30px', width: '220px' }}>
            <input
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', borderRadius: '6px', border: '1px solid #777777', marginTop: '1px' }}
            />
          </div>
          <div style={{ marginLeft: '35%' }}>
            <form className='formsle'>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{ borderRadius: '5px', fontSize: '20px' }}
              >
                <option value="default">Thứ tự mặc định</option>
                <option value="priceAsc">Thứ tự theo giá: thấp đến cao</option>
                <option value="priceDesc">Thứ tự theo giá: cao xuống thấp</option>
              </select>
            </form>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => {
              const discountedPrice = product.price * 0.7; 
              return (
                <Link 
                  to={`/detail-product/${product.id}`}
                  className="card-title cardtitle"
                  style={{ color: "#83bb3e" }}
                  key={product.id}
                >
                  <div  style={{ width: '18rem' }}>
                   {/* bỏ className="card" */}
                    <center>
                      <img src={product.image} height={'247px'} width={'247px'} alt={product.name} />
                    </center>
                    <div className="card-body">
                      <center>
                        <p><strong>{product.name}</strong></p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "15px",
                          }}
                        >
                          <p>
                            <del className="carddel">{product.price.toLocaleString()}đ</del>
                          </p>
                          <p className="carddel" style={{ fontWeight: "bold",marginTop:'5px' }}>
                            {discountedPrice.toLocaleString()}đ
                          </p>
                        </div>
                      </center>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>Không có sản phẩm nào.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
