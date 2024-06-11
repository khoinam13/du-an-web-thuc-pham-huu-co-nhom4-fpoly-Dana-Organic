import './Cart.css'
import React, {useState} from 'react';
function ProductCart(){
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const handleDecrease = () => {
      setCount(prevCount => Math.max(1, prevCount - 1)); 
    };
  
    const handleChange = (event) => {
      const value = Number(event.target.value);
      setCount(value);
    };
    return(
            <>
            <table class="table" >
  <thead>
    <tr className='thcol'>
      <th scope="col" className='thcoll'>Sản Phẩm</th>
      <th scope="col" className='thcoll'>Đơn Giá</th>
      <th scope="col" className='thcoll'>Số Lượng</th>
      <th scope="col" className='thcoll'>Tạm tính</th>
    </tr>
  </thead>
  <tbody>
    <tr className='tdcol' >
      
      <td style={{width:'200px'}} ><img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" width={'100px'} height={'100px'} /></td>
      <td className='tdcoll'>300.000đ</td>
      <td className='tdcoll'>
      <div className="counter-container">
      <button type="button" onClick={handleDecrease} className="counter-button">-</button>
      <input 
        className="counter-input"
        type="number" 
        min="1" 
        value={count} 
        onChange={handleChange} 
      />
      <button type="button" onClick={handleIncrease} className="counter-button">+</button>
    </div>
      </td>
      <td className='tdcoll'>300.000đ</td>
    </tr>
     
  </tbody>
</table>
            </>
        )
}

export default ProductCart;