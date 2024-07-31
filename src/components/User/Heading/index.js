import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Module from './Module';
import { handleToggle } from '../handle';
import { FaUser } from 'react-icons/fa';
import Cookies from 'js-cookie';
import './Heading.css';

function Heading({ setSearchQuery }) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/');
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [FlagExistUser, setFlagExistUser] = useState(false);

  useEffect(() => {
    // Hàm để gọi API và lấy số lượng mặt hàng trong giỏ hàng
    const fetchCartItemCount = async () => {
      try {
        const response = await fetch('http://localhost:3000/carts');
        const data = await response.json();
        setCartItemCount(data.length); // Giả sử dữ liệu trả về là mảng các mặt hàng
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu giỏ hàng:', error);
      }
    };

    fetchCartItemCount();
  }, []);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  // đăng kí tài khoản
  const createAccount = async (values, actions) => {
    try {
      const response = await fetch(`http://localhost:3001/account?registerEmail=${values.registerEmail}`);
      const data = await response.json();
      if (data.length !== 0) {
        actions.setFieldError("registerEmail", "Email này đã tồn tại");
      } else {
        await fetch("http://localhost:3001/account", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        values.registerName = "";
        values.registerPassword = "";
        values.registerPasswordRetype = "";
        values.registerEmail = "";
        values.registerPhone= "";
        values.registerAddress = "";
        document.querySelector(".successful").style.display = "flex";
      }
    } catch (error) {
      console.error('Lỗi khi tạo tài khoản:', error);
    }
  };

  // đăng nhập tài khoản
  const loginAccount = async (values, actions) => {
    try {
      const response = await fetch(`http://localhost:3001/account?registerEmail=${values.loginName}`);
      const data = await response.json();
      if (data.length === 0) {
        actions.setFieldError("loginName", "Tài khoản không đúng");
      } else {
        const registerPassword = data[0].registerPassword;
        if (values.loginPassword !== registerPassword) {
          actions.setFieldError("loginPassword", "Mật khẩu không đúng");
        } else {
          Cookies.set("username", values.loginName, { expires: 7 });
          alert("Bạn đã đăng nhập thành công");
          setFlagExistUser(true);
          setIsLogin(false);
          values.loginName = "";
          values.loginPassword = "";
        }
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
    }
  };

  // đăng xuất tài khoản
  const checkOutAccount = () => {
    Cookies.remove("username");
    setFlagExistUser(false);
    navigate('/');
  };

  return (
    <>
      <div style={{ position: "sticky", top: "0px", zIndex: "1000" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" to="/" style={{ width: "200px" }}>
              <img
                src="https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/lg.png"
                alt="Logo"
                width="178"
                height="83"
                className="d-inline-block align-text-top"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`text ${activeLink === "/" ? "active" : ""}`}
                    style={{
                      color: activeLink === "/" ? "#111111d9" : "#666666d9",
                    }}
                    aria-current="page"
                    to="/"
                    onClick={() => handleClick("/")}
                  >
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`text ${activeLink === "/san-pham" ? "active" : ""}`}
                    style={{
                      color: activeLink === "/san-pham" ? "#111111d9" : "#666666d9",
                    }}
                    to="/product/products"
                    onClick={() => handleClick("/san-pham")}
                  >
                    Sản Phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`text ${activeLink === "/tin-tuc" ? "active" : ""}`}
                    style={{
                      color: activeLink === "/tin-tuc" ? "#111111d9" : "#666666d9",
                    }}
                    to="/contact"
                    onClick={() => handleClick("/tin-tuc")}
                  >
                    Liên Hệ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`text ${activeLink === "/introduce" ? "active" : ""}`}
                    style={{
                      color: activeLink === "/introduce" ? "#111111d9" : "#666666d9",
                    }}
                    to="/introduce"
                    onClick={() => handleClick("/introduce")}
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`text ${activeLink === "/blog" ? "active" : ""}`}
                    style={{
                      color: activeLink === "/blog" ? "#111111d9" : "#666666d9",
                    }}
                    to="/blog"
                    onClick={() => handleClick("/blog")}
                  >
                    Bài Viết
                  </Link>
                </li>
              </ul>
              <div
                className="d-flex"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginRight: "15%",
                }}
              >
                <Link to="/cart">
                  <div style={{ position: "relative", display: "inline-block" }}>
                    <center>
                      <i
                        className="fa-solid fa-cart-shopping"
                        style={{ color: "#3c6", fontSize: "30px" }}
                      ></i>
                    </center>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItemCount}
                    </span>
                  </div>
                </Link>
              </div>
              <div>
                {FlagExistUser ? (
                  <>
                    <button className="iconbutton">
                      <Link to='/acount'>
                        <FaUser className="nav__user-btn-icon" />
                      </Link>
                    </button>
                    <button className="textbutton" onClick={checkOutAccount}>
                      Đăng xuất
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleToggle(isLogin, setIsLogin)}
                      className="textbutton nav__login"
                      style={{ backgroundColor:"#3c6", color:'white' }}
                    >
                      Đăng nhập
                    </button>
                    <button
                      onClick={() => handleToggle(isRegister, setIsRegister)}
                      className="textbutton nav__login"
                    >
                      Đăng kí
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <Module
          isRegister={isRegister}
          setIsRegister={setIsRegister}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          onToggle={handleToggle}
          onLogin={loginAccount}
          onCreateAccount={createAccount}
        />
      </div>
    </>
  );
}

export default Heading;
