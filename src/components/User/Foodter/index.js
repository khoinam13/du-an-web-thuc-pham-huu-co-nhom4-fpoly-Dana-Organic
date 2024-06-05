import React from 'react';
import  "./Foodter.css"
import { Link } from 'react-router-dom';
export default function index() {
  return (
   <>
   
      <div className='footer d-flex justify-content-center align-items-center'>
       
       <div className='textt' style={{marginLeft:'100px'}}>
              <h3>Nhận chiết khấu giảm giá 30%</h3>
              <h6>Đó là một sự thật đã được thiết lập từ lâu rằng một người đọc sẽ bị phân tâm bởi những gì có thể đọc được</h6>
        </div>
        <div className='textt' style={{width:'38%'}}>
              <input type={'search'} placeholder style={{borderRadius:'16px'}}/>
            
        </div>
     
        <div className='textt'>
            <h3>Liên Hệ</h3>
            <h6>Chúng tôi chuyên cung cấp các sản phẩm thực phẩm sạch an toàn cho sức khỏe con người</h6>
            <p>137 Nguyễn Thị Thập – Đà Nẵng</p>
            <p>  Hotline: 091 353 3457 – 09 1425 2542</p>
            <p> Email : abc@gmail.com</p>
            <p>Facebook : fb.com/abc</p>
        </div>
        <div className='textt'>
            <h3>DANH MỤC</h3>
            <ul>
                <li><Link className='textul'>Trang chủ</Link><br/></li>
                <li> <Link className='textul'>  Giới thiệu</Link><br/></li>
                <li><Link className='textul'> Tin tức</Link><br/></li>
                <li><Link className='textul'>Liên hệ</Link><br/></li>
            </ul>
        </div>
        <div className='textt'> 
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
            <ul>
                <li><Link className='textul'>Trang chủ</Link><br/></li>
                <li> <Link className='textul'>  Giới thiệu</Link><br/></li>
                <li><Link className='textul'> Tin tức</Link><br/></li>
                <li><Link className='textul'>Liên hệ</Link><br/></li>
            </ul>
        </div>
        <div className='textt'>
            <h3>KẾT NỐI VỚI DUALEO</h3>
            <ul >
                <li ><Link className='textul'>Trang chủ</Link><br/></li>
                <li> <Link className='textul'>  Giới thiệu</Link><br/></li>
                <li><Link className='textul'> Tin tức</Link><br/></li>
                <li><Link className='textul'>Liên hệ</Link><br/></li>
            </ul>
        </div>
      </div>
     
   </>
  )
}

