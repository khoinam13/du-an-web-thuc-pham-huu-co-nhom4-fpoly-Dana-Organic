import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Module from './Module';
import { handleToggle } from '../handle';  // Adjust import if needed
import './Heading.css';

function Heading({ setSearchQuery }) {
  const [activeLink, setActiveLink] = useState('/');
  const [isToggle, setIsToggle] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [cartItemCount, setCartItemCount] = useState(1); // Example count for cart items

  const handleClick = (path) => {
    setActiveLink(path);
  }

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchInput.trim());
  }

  return (
    <div style={{ position: 'sticky', top: '0px', zIndex: '1000' }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ width: '200px' }}>
            <img src="https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/lg.png" alt="Logo" width="178" height="83" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav justify-content-center" style={{width:'80%'}}>
              <li className="nav-item">
                <Link
                  className={`text ${activeLink === '/' ? 'active' : ''}`}
                  style={{ color: activeLink === '/' ? '#111111d9' : '#666666d9' }}
                  aria-current="page"
                  to="/"
                  onClick={() => handleClick('/')}
                >
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text ${activeLink === '/san-pham' ? 'active' : ''}`}
                  style={{ color: activeLink === '/san-pham' ? '#111111d9' : '#666666d9' }}
                  to="/product/products"
                  onClick={() => handleClick('/san-pham')}
                >
                  Sản Phẩm
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text ${activeLink === '/tin-tuc' ? 'active' : ''}`}
                  style={{ color: activeLink === '/tin-tuc' ? '#111111d9' : '#666666d9' }}
                  to="/contact"
                  onClick={() => handleClick('/tin-tuc')}
                >
                  Liên Hệ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text ${activeLink === '/introduce' ? 'active' : ''}`}
                  style={{ color: activeLink === '/introduce' ? '#111111d9' : '#666666d9' }}
                  to="/introduce"
                  onClick={() => handleClick('/introduce')}
                >
                  Giới thiệu
                </Link>
              </li>
             
             
            </ul>
            <form className="d-flex" role="search" style={{ marginLeft: '10px', marginBottom: '10px', marginTop: '10px' }} onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm "
                aria-label="Search"
                value={searchInput}
                onChange={handleInputChange}
              />
            </form>
            <div className="d-flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px',width:'50%' }}>
              <Link to="/cart">
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <center>
                    <i className="fa-solid fa-cart-shopping" style={{ color: '#3c6', fontSize: '30px' }}></i>
                  </center>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount}
                  </span>
                </div>
              </Link>
              <button onClick={() => handleToggle(isToggle, setIsToggle)} className="textbutton" style={{ backgroundColor:'rgb(51, 204, 102)'}}>
                <Link to="/" className="textlogin" style={{ color:'white'}}> Đăng nhập</Link>
              </button>
              <button onClick={() => handleToggle(isToggle, setIsToggle)} className="textbutton">
                <Link to="/" className="textlogin"> Đăng kí</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Module isToggle={isToggle} setIsToggle={setIsToggle} onToggle={handleToggle} /> {/* Assuming Module component is correctly imported */}
    </div>
  );
}

export default Heading;
