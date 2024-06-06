import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import { Link } from 'react-router-dom'; // Ensure this path is correct
import Likeproduct from './likeproduct';
import Range from './range';
function Category() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <h3 className='h3'>Danh mục</h3>
      <div className="list-group">
        <Link href="#" className={`list-group-item list-group-item-action ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
          Trái Cây
        </Link>
        <Link href="#" className={`list-group-item list-group-item-action ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
          Rau 
        </Link>
        <Link href="#" className={`list-group-item list-group-item-action ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
          Củ
        </Link>
        <Link  href="#"  className={`list-group-item list-group-item-action ${activeIndex === 3 ? 'active' : ''}`}  onClick={() => handleClick(3)}>
          Hành
        </Link>
      </div>
     <div style={{marginTop:'20px'}}>
     <Range/>
     </div>
     <div style={{marginTop:'20px'}}>
     <Likeproduct/>
     </div>
    </div>
  );
}

export default Category;
