import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import Range from './range';
import Likeproduct from './likeproduct';
import { Link } from 'react-router-dom';

function Category() {
  const categories = [
    {
      id: 1,
      name: 'Trái Cây',
    },
    {
      id: 2,
      name: 'Rau',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null); 

  const handleClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div>
      <h3 className='h3'>Danh mục</h3>
      <div className="list-group">
        {categories.map((category, index) => (
          <Link
            to={`/product/products/${category.id}`}
            key={category.id}
            className={`list-group-item list-group-item-action ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <Range />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Likeproduct />
      </div>
    </div>
  );
}

export default Category;
