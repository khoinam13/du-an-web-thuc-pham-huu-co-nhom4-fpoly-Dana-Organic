import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import './Module.css'
function Module({isToggle, setIsToggle, onToggle}) {
  return (
    <>
      {isToggle &&
        <div className="home-module">
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
            <form>
              <label htmlFor="register__name" className="home-module__lable">
                Địa chỉ email *
              </label>
              <input
                id="register__name"
                className="home-module__input"
                type="text"
              />
              <label
                htmlFor="register__password"
                className="home-module__lable"
              >
                Mật khẩu *
              </label>
              <input
                id="register__password"
                className="home-module__input"
                type="password"
              />
              <button className="home-module__submit">ĐĂNG KÍ</button>
            </form>
          </div>
        </div>
        <button className="home-module__close">
          <IoCloseOutline onClick={()=> onToggle(isToggle, setIsToggle)}  className="home-module__close-icon" />
        </button>
      </div>
      }
      ;
    </>
  );
}

export default Module;
