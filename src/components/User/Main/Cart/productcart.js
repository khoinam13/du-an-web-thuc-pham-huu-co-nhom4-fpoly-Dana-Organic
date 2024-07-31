import React from 'react';
import './Cart.css';

function ProductCart({ cart, count, handleIncrease, handleDecrease, handleChange, handleRemove }) {
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
            <th scope="col" className='thcoll'></th>
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
                <td style={{ width: '200px' }} className='namecoll'>
                  {product.name}
                </td>
                <td className='tdcoll'>
                  {unitPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </td>
                <td className='tdcoll'>
                  <div className="counter-container">
                    <button style={{borderRadius: "5px",}}
                      type="button"
                      onClick={() => handleDecrease(product.id)}
                      className="counter-button"
                    >
                      -
                    </button>
                    <input style={{borderRadius: "5px",}}
                      className="counter-input"
                      type="number"
                      min="1"
                      max="10"
                      value={productCount}
                      onChange={(event) => handleChange(event, product.id)}
                    />
                    <button style={{borderRadius: "5px",}}
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
                <td className='tdcoll'>
                  <i 
                    className="fa-solid fa-trash" 
                    onClick={() => handleRemove(product.id)}
                    style={{ cursor: 'pointer' }}
                  ></i>
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
