import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Module from "./Module";
import { handleToggle } from "../handle";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import "./Heading.css";
function Heading() {
  const navigate = useNavigate();
  const [FlagExistUser, setFlagExistUser] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleClick = (path) => {
    setActiveLink(path);
  };
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  // đăng kí tài khoản
  const createAccount = async (values, actions) => {
    await axios
      .get(`http://localhost:3001/account?registerEmail=${values.registerEmail}`)
      .then((response) => {
        if (response.data.length !== 0 ) {
          actions.setFieldError("registerEmail", "Email này đã tồn tại");
        } else {
          axios.post("http://localhost:3001/account", values);
          values.registerName = "";
          values.registerPassword = "";
          values.registerPasswordRetype = "";
          values.registerEmail = "";
          values.registerPhone= "";
          values.registerAddress = "";
          document.querySelector(".successful").style.display = "flex";
        }
      });
  };

  // đăng nhập tài khoản
  const loginAccount = async (values, actions) => {
    await axios
      .get(`http://localhost:3001/account?registerEmmail=${values.loginName}`)
      .then((response) => {
        if (response.data.length === 0) {
          actions.setFieldError("loginName", "Tài khoản không đúng");
        } else {
          const registerPassword = response.data[0].registerPassword;
          if (values.loginPassword !== registerPassword) {
            actions.setFieldError("loginPassword", "Mật khẩu không đúng");
          } else {
            // khung
            const setCookie = (name, values, days) => {
              Cookies.set(name, values, { expires: days });
            };
            setCookie("username", values.loginName, 7);
            alert("Bạn đã đăng nhập thành công");
            setFlagExistUser(true);
            setIsLogin(false);
            values.loginName = "";
            values.loginPassword = "";
          }
        }
      });
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
          <div className="container ">
            <Link className="navbar-brand " to="/" style={{ width: "200px" }}>
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
                    className={`text ${
                      activeLink === "/san-pham" ? "active" : ""
                    }`}
                    style={{
                      color:
                        activeLink === "/san-pham" ? "#111111d9" : "#666666d9",
                    }}
                    to="/product/products"
                    onClick={() => handleClick("/san-pham")}
                  >
                    Sản Phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`text ${
                      activeLink === "/tin-tuc" ? "active" : ""
                    }`}
                    style={{
                      color:
                        activeLink === "/tin-tuc" ? "#111111d9" : "#666666d9",
                    }}
                    to="/contact"
                    onClick={() => handleClick("/tin-tuc")}
                  >
                    Liên Hệ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`text ${
                      activeLink === "/introduce" ? "active" : ""
                    }`}
                    style={{
                      color:
                        activeLink === "/introduce" ? "#111111d9" : "#666666d9",
                    }}
                    to="/introduce"
                    onClick={() => handleClick("/introduce")}
                  >
                    Giới thiệu
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ marginRight: "30px" }}>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit" />
              </form>
              <div
                className="d-flex"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  width: "50%",
                  marginLeft: "30px",
                }}
              >
                <Link to="/cart">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
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
                  {/* =========== user ============= */}
                    <button className="iconbutton">
                      <Link to={'/acount'}>
                        <FaUser className="nav__user-btn-icon" />
                      </Link>
                    </button>
                    {/* ========= user ========== */}
                    <button className="textbutton" onClick={checkOutAccount}>
                      Đăng xuất
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleToggle(isLogin, setIsLogin)}
                      className="textbutton nav__login"
                    >
                      {" "}
                      Đăng nhập
                    </button>

                    <button
                      onClick={() => handleToggle(isRegister, setIsRegister)}
                      className="textbutton nav__login"
                    >
                      {" "}
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
