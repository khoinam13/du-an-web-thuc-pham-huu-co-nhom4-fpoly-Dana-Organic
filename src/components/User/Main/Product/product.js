import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Products() {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
 console.log(categoryId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3030/v1/products'); 
        const result = await res.json();
        
        if (Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          console.error('Unexpected data format:', result);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, []);

  let filteredProducts = Array.isArray(products) ? products : [];

  // Lọc sản phẩm theo categoryId
  if (categoryId) {
    filteredProducts = filteredProducts.filter(product => product.categoryId === categoryId); 
  }

  // Lọc sản phẩm theo searchQuery
  if (searchQuery.trim() !== '') {
    filteredProducts = filteredProducts.filter(product =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sắp xếp sản phẩm
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
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
        {currentProducts.length > 0 ? (
          currentProducts.map(product => {
            const discountedPrice = product.price * 0.7; 
            return (
              <Link 
                to={`/detail-product/${product._id}`}
                className="card-title cardtitle"
                style={{ color: "#83bb3e" }}
                key={product._id}
              >
                <div className='aaa' style={{ width: '18rem' }}>
                  <center>
                    <img src={product.image} height={'247px'} width={'247px'} alt={product.name} />
                  </center>
                  <div className="card-body">
                    <center>
                      <p className="card-title">{product.productName}</p>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                        <p><del className="carddel">{product.price.toLocaleString()}đ</del></p>
                        <p className="carddel" style={{ fontWeight: "bold", marginTop: '10px' }}>
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

      {/* Phân trang */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Trước</button>
            </li>
            {[...Array(totalPages).keys()].map(page => (
              <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Sau</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Products;
