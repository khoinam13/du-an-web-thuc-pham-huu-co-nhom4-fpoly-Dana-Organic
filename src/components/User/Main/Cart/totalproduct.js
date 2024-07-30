// Total.js
import { Link } from 'react-router-dom';
import './Cart.css';

function Total({ totalAmount }) {
  return (
    <div>
      <h3 className='h3'>
        Tổng tiền
      </h3>
      <center>
        <table className="table">
          <tbody>
            <tr>
              <th scope="col" className='thcoll'>Tạm Tính</th>
              <td scope="col" className='tdcolll'>{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            </tr>
            <tr>
              <th scope="row" className='thcoll'>Tổng</th>
              <td className='tdcolll'>{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            </tr>
          </tbody>
        </table>
        <Link to={{ pathname: '/cart/infor', state: { totalAmount } }}>
          <button type="button" className="btn btn" style={{ backgroundColor: '#83bb3e', width: '250px', fontSize: '20px', fontWeight: '500', color: '#fff' }}>Tiến Hành Thanh Toán</button>
        </Link>
      </center>
      <center>
        <table className="table">
          <tbody>
            <tr>
              <th scope="col" className='thcoll'>Mã Giảm Giá</th>
            </tr>
            <tr>
              <td>
                <input className="form-control" type="text" placeholder="Mã Giảm Giá" aria-label="default input example" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-light" style={{ width: '250px', fontSize: '20px', fontWeight: '500', color: '#666', border: '1px solid #ddd' }}>Áp Dụng</button>
      </center>
    </div>
  );
}

export default Total;
