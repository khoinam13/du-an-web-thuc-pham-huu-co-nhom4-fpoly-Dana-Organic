import { Link } from 'react-router-dom'
import './Heading.css'
import Module from './Module'
import { handleToggle } from './Handle';
import { useState } from "react";
function Heading(){
    const [isToggle, setIsToggle] = useState(false)
    return(
        <div >
         <nav className="navbar bg-body-tertiary navbar-expand-lg bg-body-tertiary" style={{position:'fixed',zIndex:'1000',width:'100%'}}>
            <div className="container" >
                    <div>
                  
                            <Link className="navbar-brand" to="/" >
                            <img src="https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/lg.png" alt="Logo" width="178" height="83" className="d-inline-block align-text-top"/>  
                            </Link>
                           
                    </div>    
                    <div>
                         <ul className="nav justify-content-center">
                        <li className="nav-item">
                   
                            <Link className="nav-link text" aria-current="page" to="/">Trang chủ</Link>
                           
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text" href="#">Sản Phẩm</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text" href="#">Tin Tức</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text" aria-disabled="true">Giới thiệu</a>
                        </li>
                        </ul>
                    </div>
                    <div style={{ marginRight:"30px"}}>
                            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                    </div>
                    <div >
                          <button  onClick={()=> handleToggle(isToggle, setIsToggle)} className="textbutton">
                          <Link to={'/'} className='textlogin'> Đăng nhập/Đăng kí</Link>
                          </button>
                          <button className="textbutton">
                          <a href="https://bitas.com.vn/lib/pic/giohang2.png" className="textlogin">Giỏ Hàng</a>
                          </button>
                    </div>
                
            </div>
            </nav>
            <Module isToggle = {isToggle} setIsToggle = {setIsToggle} onToggle = {handleToggle}/>
        </div>
    )

}
export default Heading  