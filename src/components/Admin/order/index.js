import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
function OrderProduct() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };

    fetchOrders();
  }, []);

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
        console.log(`Order with id ${id} deleted successfully`);
      } catch (error) {
        console.error(`There was an error deleting the order with id ${id}!`, error);
      }
    }
  };
  
  return (
    <>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="search"
              placeholder="Search..."
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px' }}
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
              {orders.length > 0 ? (
                orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.userId}</td>
                    <td>{order.address}</td>
                    <td>{order.pay}</td>
                    <td>{order.phone}</td>
                    <td>{order.status}</td>
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
        </div>
      </div>
    </>
  );
}

export default OrderProduct;
