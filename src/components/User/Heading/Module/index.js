import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";
import { GoX } from "react-icons/go";
import { useState } from "react";
import { validationSchemaLogin, validattionSchemaRegister } from "../../untils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { hiddenElement } from "../../handle";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./Module.css";
  
function Module({
  isLogin,
  setIsLogin,
  isRegister,
  setIsRegister,
  onToggle,
  onLogin,
  onCreateAccount,
}) {
  const [flagEye, setFlagEye] = useState(true)
  const [flagEye2nd, setFlagEye2nd] = useState(true)
  const hiddenshowPasssword = ()=>{
    setFlagEye(!flagEye)
    const TypeInput = document.getElementById('register__password') 
    if(flagEye === true){
        TypeInput.type = "text"
    }
    else{
      TypeInput.type = "password"
    }

  }
  const hiddenshowPasssword2nd = ()=>{
    setFlagEye2nd(!flagEye2nd)
    const TypeInput2nd  = document.getElementById('register__password-retype')
    if(flagEye2nd === true){
      TypeInput2nd.type = "text"
  }
  else{
    TypeInput2nd.type = "password"
  }
  }
  return (
    <>
      {isLogin && (
        <div className="home-module-wrap">
          <div className="home-module__wrap">
            <div className="home-module__item">
              <h2 className="home-module__heading">ĐĂNG NHẬP</h2>
              <Formik
                initialValues={{ loginName: "", loginPassword: "" }}
                validationSchema={validationSchemaLogin}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={onLogin}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="login__name" className="home-module__lable">
                      Tên tài khoản hoặc địa chỉ email *
                    </label>
                    <Field
                      id="login__name"
                      className="home-module__input"
                      type="text"
                      name="loginName"
                    />
                    <ErrorMessage
                      name="loginName"
                      className="error"
                      component="div"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="login__password"
                      className="home-module__lable"
                    >
                      Mật khẩu *
                    </label>
                    <Field
                      id="login__password"
                      className="home-module__input"
                      type="password"
                      name="loginPassword"
                    />
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="loginPassword"
                    />
                    <Field
                      id="login__memorize"
                      className="home-module__input-check"
                      type="checkbox"
                    />
                  </div>
                  <label
                    htmlFor="login__memorize"
                    className="home-module__lable"
                  >
                    Ghi nhớ mật khẩu
                  </label>
                  <button className="home-module__submit">ĐĂNG NHẬP</button>
                </Form>
              </Formik>
              <Link className="home-module__forget" to={"/"}>
                Quên mật khẩu?
              </Link><br/>
              <Link className="home-module__forget" to={"/"}>
                Đăng kí tài khoản.
              </Link>
            </div>
            <button className="home-module__close">
              <IoCloseOutline
                onClick={() => onToggle(isLogin, setIsLogin)}
                className="home-module__close-icon"
              />
            </button>
          </div>
        </div>
      )}
      {isRegister && (
        <div className="home-module-wrap">
          <div className="home-module__wrap">
            <div className="home-module__item">
              <h2 className="home-module__heading">ĐĂNG KÝ</h2>

              <Formik
                initialValues={{
                  registerName: "",
                  registerPassword: "",
                  registerEmail: "",
                  registerPasswordRetype: "",
                  registerPhone: "",
                  registerAddress: "",
                  registerSex: "",
                  registerDateBirth: "",
                }}
                validationSchema={validattionSchemaRegister}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={onCreateAccount}
              >
                <Form>
                  {/*  */}
                  <div className="register__container">
                      <div className="register__item">
                        <label
                          htmlFor="register__name"
                          className="home-module__lable"
                        >
                          Họ tên *
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
                      </div>

                      <div className="register__item">
                        <label
                          htmlFor="register__email"
                          className="home-module__lable"
                        >
                          Địa chỉ email *
                        </label>
                        <Field
                          id="register__email"
                          className="home-module__input"
                          type="text"
                          name="registerEmail"
                        />
                        <ErrorMessage
                          className="error"
                          name="registerEmail"
                          component="div"
                        />
                      </div>
                    {/*  */}
                      <div className="register__item">
                        <label
                          htmlFor="register__address"
                          className="home-module__lable"
                        >
                          Địa chỉ của bạn *
                        </label>
                        <Field
                          id="register__addres"
                          className="home-module__input"
                          type="text"
                          name="registerAddress"
                        />
                        <ErrorMessage
                          className="error"
                          name="registerAddress"
                          component="div"
                        />
                      </div>
                      <div className="register__item">
                        <label
                          htmlFor="register__phone"
                          className="home-module__lable"
                        >
                          SDT *
                        </label>
                        <Field
                          id="register__phone"
                          className="home-module__input"
                          type="tel"
                          name="registerPhone"
                        />
                        <ErrorMessage
                          className="error"
                          name="registerPhone"
                          component="div"
                        />
                      </div>
                      <div className="register__item">
                        <label
                          htmlFor="register__date-birth"
                          className="home-module__lable"
                        >
                          Ngày sinh *
                        </label>
                        <Field
                          id="register__date-birth"
                          className="home-module__input"
                          type="date"
                          name="registerDateBirth"
                          min="1920-01-01"
                        />
                        <ErrorMessage
                          className="error"
                          name="registerDateBirth"
                          component="div"
                        />
                      </div>
                      <div className="register__item">
                        <fieldset>
                          <legend className="home-module__lable">
                            Giới tính *
                          </legend>
                          <label  >
                            <Field
                              type="radio"
                              name="registerSex"
                              value="Nam"
                            />
                            <span className="title-radio">Nam</span>
                          </label>
                          <label >
                            <Field type="radio" name="registerSex" value="Nữ" />
                            <span className="title-radio">Nữ</span>
                          </label>
                          <label>
                            <Field
                              type="radio"
                              name="registerSex"
                              value="Khác"
                            />
                            <span className="title-radio">Khác</span>
                          </label>
                        </fieldset>
                        <ErrorMessage
                          className="error"
                          name="registerSex"
                          component="div"
                        />
                      </div>
                      <div className="register__item">
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
                       {flagEye ? (
                           <FaEye onClick={hiddenshowPasssword} className="registerEye" />
                       )
                       : 
                       (
                          <FaEyeSlash onClick={hiddenshowPasssword} className="registerEye" />
                       )
                      }
                        <ErrorMessage
                          className="error"
                          name="registerPassword"
                          component="div"

                        />
                      </div>
                      <div className="register__item">
                        <label
                          htmlFor="register__password-retype"
                          className="home-module__lable"
                        >
                          Nhập lại mật khẩu *
                        </label>
                        <Field
                          id="register__password-retype"
                          className="home-module__input"
                          type="password"
                          name="registerPasswordRetype"
                        />
                        {flagEye2nd ? (
                           <FaEye onClick={hiddenshowPasssword2nd } className="registerEye" />
                       )
                       : 
                       (
                          <FaEyeSlash onClick={hiddenshowPasssword2nd} className="registerEye" />
                       )
                        }
                        <ErrorMessage
                          className="error"
                          name="registerPasswordRetype"
                          component="div"
                        />
                      </div>
                  </div>

                  <button type="submit" className="home-module__submit">
                    ĐĂNG KÍ
                  </button>
                </Form>
              </Formik>
            </div>
            <button className="home-module__close">
              <IoCloseOutline
                onClick={() => onToggle(isRegister, setIsRegister)}
                className="home-module__close-icon"
              />
            </button>
          </div>
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
