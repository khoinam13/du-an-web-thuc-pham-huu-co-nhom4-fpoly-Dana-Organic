import React from 'react'
import Home from './Home'
import Cart from './Cart'
import Contact from './Contact'
import DetailProduct from './DetailProduct'
import Introduce from './Introduce'
import News from './News'
import Product from './Product'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Main.css"
export default function Main() {
  return (
    <>

    {/* Định tuyến */}

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/detail-product' element={<DetailProduct/>}/>
        <Route path='/introduce' element={<Introduce/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/product' element={<Product/>}/>
    </Routes>

    <div className='home-module'>
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
            <Link className='home-module__forget' to={'/'}>Quên mật khẩu2</Link>
          </div>

          {/* đăng kí */}

          <div className='home-module__item'>
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
    </div>
    </>
  )
}
