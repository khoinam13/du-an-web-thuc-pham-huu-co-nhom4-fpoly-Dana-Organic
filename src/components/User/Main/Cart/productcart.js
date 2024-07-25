import './Cart.css';
import React, { useState, useEffect } from 'react';

function ProductCart() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/carts');
        const data = await res.json();
        setCart(data);

        const initialCount = data.reduce((acc, item) => {
          acc[item.id] = 1; 
          return acc;
        }, {});
        setCount(initialCount);
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []);
  
  const handleIncrease = (id) => {
    setCount(prevCount => ({
      ...prevCount,
      [id]: prevCount[id] + 1
    }));
  };

  const handleDecrease = (id) => {
    setCount(prevCount => ({
      ...prevCount,
      [id]: Math.max(1, prevCount[id] - 1)
    }));
  };

  const handleChange = (event, id) => {
    const value = Number(event.target.value);
    setCount(prevCount => ({
      ...prevCount,
      [id]: value
    }));
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr className='thcol'>
            <th scope="col" className='thcoll'>Sản Phẩm</th>
            <th scope="col" className='thcoll'>Tên Sản Phẩm</th>
            <th scope="col" className='thcoll'>Đơn Giá</th>
            <th scope="col" className='thcoll'>Số Lượng</th>
            <th scope="col" className='thcoll'>Tạm tính</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => {
            const unitPrice = product.price; 
            const productCount = count[product.id] || 1; 

            return (
              <tr key={product.id} className='tdcol'>
                <td style={{ width: '200px' }}>
                  <img src={product.image} width='100px' height='100px' alt={product.name} />
                </td>
                <td style={{ width: '200px', color:" black !important" }} className='namecoll'>
                 
                  {product.name} 
                </td>
                <td className='tdcoll'>
                  {unitPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </td>
                <td className='tdcoll'>
                  <div className="counter-container">
                    <button 
                      type="button" 
                      onClick={() => handleDecrease(product.id)} 
                      className="counter-button"
                    >
                      -
                    </button>
                    <input 
                      className="counter-input"
                      type="number" 
                      min="1" 
                      value={productCount} 
                      onChange={(event) => handleChange(event, product.id)} 
                    />
                    <button 
                      type="button" 
                      onClick={() => handleIncrease(product.id)} 
                      className="counter-button"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className='tdcoll'>
                  {(unitPrice * productCount).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductCart;
