import React, { useState } from "react";
import { Link } from "react-router-dom";
import Module from "./Module";
import { handleToggle } from "../handle";
import "./Heading.css";
function Heading() {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (path) => {
    setActiveLink(path);
  };
  const [isToggle, setIsToggle] = useState(false);
  return (
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
              {/* <li className="nav-item">
                                <Link
                                    className={`text ${activeLink === '/gioi-thieu' ? 'active' : ''}`}
                                    style={{ color: activeLink === '/gioi-thieu' ? '#111111d9' : '#666666d9' }}
                                    to="/gioi-thieu"
                                    onClick={() => handleClick('/gioi-thieu')}
                                >
                                    Giới thiệu
                                </Link>
                            </li> */}
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
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div>
            <button
              onClick={() => handleToggle(isToggle, setIsToggle)}
              className="textbutton"
            >
              <Link to={"/"} className="textlogin">
                {" "}
                Đăng nhập/Đăng kí
              </Link>
            </button>
            <button className="textbutton">
              <a
                href="https://bitas.com.vn/lib/pic/giohang2.png"
                className="textlogin"
              >
                Giỏ Hàng
              </a>
            </button>
          </div>
        </div>
      </nav>
      <Module
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        onToggle={handleToggle}
      />
    </div>
  );
}
export default Heading;
