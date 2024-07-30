import React from 'react';
import  "./Foodter.css"
import { Link } from 'react-router-dom';
export default function index() {
  return (
   <>
   
     <div style={{ backgroundColor:'#F0F0F0',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',}}>
          <div style={{width:'400px',padding:'20px',marginTop:'50px'}}>
            <h5> CHĂM SÓC KHÁCH HÀNG</h5>
            <div className='textfooter' style={{display:'block' }}>Trung Tâm Trợ Giúp</div>
            <div className='textfooter' style={{display:'block' }}>Hướng Dẫn Mua Hàng</div>
            <div className='textfooter' style={{display:'block' }}>Vận Chuyển</div>
            <div className='textfooter' style={{display:'block' }}>Chăm Sóc Khách Hàng</div>
            <div className='textfooter' style={{display:'block' }}>Chính Sách Bảo Hành</div>
          
          </div>
          <div style={{width:'400px',padding:'20px',marginTop:'50px'}} >
          <h5> LIÊN HỆ</h5>
            {/* <div  className='textfooter' style={{display:'block' }}>Chúng tôi chuyên cung cấp các sản phẩm thực phẩm sạch an toàn cho sức khỏe con người</div> */}
            <div className='textfooter' style={{display:'block' }}>Hotline: 091 353 3457 – 09 1425 2542</div>
            <div className='textfooter' style={{display:'block' }}>Địa chỉ: 25A Trần Nguyên Hãn – Da nang</div>
            <div className='textfooter' style={{display:'block' }}>Email : danafood@gmail.com</div>
            <div className='textfooter' style={{display:'block' }}> Facebook : fb.com/danafood</div>
          </div>
          <div style={{width:'400px',padding:'20px',marginTop:'50px'}} >
          <h5> THEO DÕI CHÚNG TÔI TRÊN</h5>
            <div className='textfooter' style={{display:'block' }}> <i class="fa-brands fa-facebook"></i> Facebook</div>
            <div className='textfooter' style={{display:'block' }}>  <i class="fa-brands fa-instagram"></i> Instagram</div>
            <div className='textfooter' style={{display:'block' }}> <i class="fa-brands fa-linkedin"></i> LinkedIn</div>
            <div className='textfooter'  style={{display:'block' }}><i class="fa-brands fa-tiktok"></i> TikTok</div>
            <div className='textfooter' style={{display:'block' }}><i class="fa-brands fa-threads"></i> Threads</div>
          
          </div>
          <div style={{width:'400px',padding:'20px',marginTop:'50px'}} >
          <h5> HỖ TRỢ KHÁCH HÀNG</h5>
            <div className='textfooter' style={{display:'block' }}>Trung Tâm Trợ Giúp</div>
            <div className='textfooter' style={{display:'block' }}>Hướng Dẫn Mua Hàng</div>
            <div className='textfooter' style={{display:'block' }}>Trả Hàng & Hoàn Tiền</div>
            <div className='textfooter' style={{display:'block' }}>Chăm Sóc Khách Hàng</div>
            <div className='textfooter' style={{display:'block' }}>Chính Sách Bảo Hành</div>
          </div>
         

     </div>
     
   </>
  )
}

