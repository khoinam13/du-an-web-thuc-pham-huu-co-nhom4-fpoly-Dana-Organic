import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import DetailProduct from './DetailProduct';
import Introduce from './Introduce';
import News from './News';
import Product from './Product';
import App from '../../../App';

import "./Main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/introduce",
        element: <Introduce />,
      },
      {
        path: "/detail-product",
        element: <DetailProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <Admin />,
  // },
]);

// 
  {/* <div className='home-module'>
        <div className='home-module__wrap'>
          <div className='home-module__item'>
            <h2 className='home-module__heading'>ĐĂNG NHẬP</h2>
            <form>
              <label htmlFor='login__name' className='home-module__lable'>Tên tài khoản hoặc địa chỉ email *</label>
              <input id='login__name' className='home-module__input' type='text'/>
              <label htmlFor='login__password' className='home-module__lable'>Mật khẩu *</label>
              <input id='login__password' className='home-module__input' type='password'/>
              <input id='login__memorize' className='home-module__input-check' type='checkbox' />
              <label htmlFor='login__memorize' className='home-module__lable'>Ghi nhớ mật khẩu</label>
              <button className='home-module__submit'>ĐĂNG NHẬP</button>
            </form>
<<<<<<< HEAD
            <Link className='home-module__forget' to={'/'}>Quên mật khẩu2</Link>
          </div>
=======
            <Link className='home-module__forget' to={'/'}>Quên mật khẩu</Link>
          </div> */}
         

          {/* đăng kí */}

          {/* <div className='home-module__item'>
            <h2 className='home-module__heading'>ĐĂNG KÝ</h2>
            <form>
              <label htmlFor='register__name' className='home-module__lable'>Địa chỉ email *</label>
              <input id='register__name' className='home-module__input' type='text'/>
              <label htmlFor='register__password' className='home-module__lable'>Mật khẩu *</label>
              <input id='register__password' className='home-module__input' type='password'/>
              <input id='register__memorize' className='home-module__input-check' type='checkbox' />
              <label htmlFor='register__memorize' className='home-module__lable'>Ghi nhớ mật khẩu</label>
              <button className='home-module__submit'>ĐĂNG KÍ</button>
            </form>
          </div>
        </div>
    </div> */}
export default router;
