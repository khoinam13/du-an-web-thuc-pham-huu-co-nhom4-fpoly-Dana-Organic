import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          setFilteredProducts(data);
        } else {
          console.error('Lỗi khi lấy dữ liệu sản phẩm');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setCurrentPage(1); 
  }, [searchQuery, products]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        setProducts(products.filter(product => product.id !== id));
        setFilteredProducts(filteredProducts.filter(product => product.id !== id));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Xóa thành công!',
        });
      } catch (error) {
        console.error(`There was an error deleting the product with id ${id}!`, error);
      }
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px', height: '38px' }}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
            ></i>
          </div>
          <Link to={'/admin/newadminproduct'}>
            <button className="btn btn-primary">
              <i className="fa-solid fa-plus"></i> Thêm sản phẩm
            </button>
          </Link>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tên</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Giá</th>
                <th scope="col">Mô Tả</th>
                <th scope="col">Số Lượng</th>
                <th scope="col">Danh Mục</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.length > 0 ? (
                currentProducts.map(product => (
                  <tr key={product.id}>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{product.id}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{product.name}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100px', height: 'auto' }}
                      />
                    </td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{product.price}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{product.description}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{product.quantity}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{product.categoryId}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Link to={`/admin/updateadminproduct/${product.id}`}>
                          <i className="fa-solid fa-edit" style={{ fontSize: '20px' }}></i>
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <i className="fa-solid fa-trash" style={{ fontSize: '20px', color: 'red' }}></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">Không tìm thấy dữ liệu!!</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Phân trang*/}
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
      </div>
    </>
  );
}

export default AdminProduct;
