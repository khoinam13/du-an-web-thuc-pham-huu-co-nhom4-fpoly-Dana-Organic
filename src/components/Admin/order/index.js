import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function OrderProduct() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
        setFilteredOrders(data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter(order =>
          order.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.pay.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    setCurrentPage(1); 
  }, [searchTerm, orders]);

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa đơn hàng này?')) {
      try {
        const response = await fetch(`http://localhost:3000/orders/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        setOrders(orders.filter(order => order.id !== id));
        setFilteredOrders(filteredOrders.filter(order => order.id !== id));
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Xóa thành công!"
        });
      } catch (error) {
        console.error(`There was an error deleting the order with id ${id}!`, error);
      }
    }
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="search"
              placeholder="Search..."
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px', height: '38px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}></i>
          </div>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Mã khách hàng</th>
                <th scope="col">Địa chỉ giao hàng</th>
                <th scope="col">Phương thức thanh toán</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Trạng thái đơn hàng</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.length > 0 ? (
                currentOrders.map(order => (
                  <tr key={order.id}>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{order.id}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{order.userId}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{order.address}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{order.pay}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{order.phone}</td>
                    <td style={{ fontSize: '18px', fontWeight: '500' }}>{order.status}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Link to={`/admin/updateorderproduct/${order.id}`}>
                          <i className="fa-solid fa-edit" style={{ fontSize: '20px' }}></i>
                        </Link>
                        <button
                          onClick={() => handleDelete(order.id)}
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
                  <td colSpan="7">Không có đơn hàng nào!!</td>
                </tr>
              )}
            </tbody>
          </table>

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
      </div>
    </>
  );
}

export default OrderProduct;
