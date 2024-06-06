import React from 'react'
import './Product.css'
function Filter(){
    return(
       <>
       <form className='formsle'>
        <select style={{ borderRadius:'5px',fontSize:'20px'}}>
          <option>Thứ tự mặc định</option>
          <option>Thứ tự theo mức độ phổ biến</option>
          <option>Mới nhất</option>
          <option>Thứ tự theo giá: thấp đến cao</option>
          <option>Thứ tự theo giá: cao xuống thấp</option>
        </select>
        </form>
       </>
    )
}

export default Filter;