import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";
import { GoX } from "react-icons/go";
import { validattionSchema } from "../../untils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { hiddenElement } from "../../handle";
import { useRef } from "react";
import { createAccount } from "../../handle";
import "./Module.css";

function Module({ isToggle, setIsToggle, onToggle }) {
 
  const RefSuccessful = useRef();

  return (
    <>
      {isToggle && (
        <div className="home-module-wrap">
          <div className="home-module__wrap">
            <div className="home-module__item">
              <h2 className="home-module__heading">ĐĂNG NHẬP</h2>
              <form>
                <label htmlFor="login__name" className="home-module__lable">
                  Tên tài khoản hoặc địa chỉ email *
                </label>
                <input
                  id="login__name"
                  className="home-module__input"
                  type="text"
                />
                <label htmlFor="login__password" className="home-module__lable">
                  Mật khẩu *
                </label>
                <input
                  id="login__password"
                  className="home-module__input"
                  type="password"
                />
                <input
                  id="login__memorize"
                  className="home-module__input-check"
                  type="checkbox"
                />
                <label htmlFor="login__memorize" className="home-module__lable">
                  Ghi nhớ mật khẩu
                </label>
                <button className="home-module__submit">ĐĂNG NHẬP</button>
              </form>
              <Link className="home-module__forget" to={"/"}>
                Quên mật khẩu?
              </Link>
            </div>

            <div className="home-module__item">
              <h2 className="home-module__heading">ĐĂNG KÝ</h2>
              {/* FORMIK */}
              <Formik
                initialValues={{ registerName: "", registerPassword: "" }}
                validationSchema={validattionSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={createAccount}
              >
                <Form>
                  <label
                    htmlFor="register__name"
                    className="home-module__lable"
                  >
                    Địa chỉ email *
                  </label>
                  <Field
                    id="register__name"
                    className="home-module__input"
                    type="text"
                    name="registerName"
                  />
                  <ErrorMessage
                    className="error"
                    name="registerName"
                    component="div"
                  />
                  <label
                    htmlFor="register__password"
                    className="home-module__lable"
                  >
                    Mật khẩu *
                  </label>
                  <Field
                    id="register__password"
                    className="home-module__input"
                    type="password"
                    name="registerPassword"
                  />
                  <ErrorMessage
                    className="error"
                    name="registerPassword"
                    component="div"
                  />
                  <button type="submit" className="home-module__submit">
                    ĐĂNG KÍ
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <button className="home-module__close">
            <IoCloseOutline
              onClick={() => onToggle(isToggle, setIsToggle)}
              className="home-module__close-icon"
            />
          </button>
        </div>
      )}
      ;{/* thông báo đăng kí thành công*/}
      <div className="successful">
        <div className="successful__wrap">
          <GoCheckCircleFill className="successful__icon-success" />
          <h2 className="successful__heading">Đăng kí thành công !</h2>
          <p className="successful_description">
            Chúc mừng bạn đã đã ký thành công !
          </p>
          <button
            onClick={() => hiddenElement(document.querySelector(".successful"))}
            className="successful__btn"
          >
            <GoX className="successful__icon-close" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Module;
