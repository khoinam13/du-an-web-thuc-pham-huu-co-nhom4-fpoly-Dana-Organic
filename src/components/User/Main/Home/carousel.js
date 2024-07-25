import './Home.css';
import NewProduct from './newproduct'
import SellProduct from './sellproduct';
import TopProduct from './topproduct';
import BlogProduct from './blogproduct';
function Carousel(){
    return(
    <>
     <div className='carousel'>
        <div style={{width:' 800px',height:'600px'}}>  
       
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel"   style={{width:'100%', height:'600px'}}>
  <div class="carousel-inner"  >
    <div class="carousel-item active" data-bs-interval="2000"  >
      <img src="https://www.vinmec.com/s3-images/20210519_070755_784816_thuc-pham-huu-co.max-800x800.jpg" class="d-block w-100" height={'600px'} width={'800px'} style={{borderRadius:'13px'}} alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH8s27IAgee-5nItO1QjvgSMd_uAQWXMVYdh-wJA7LUq9nqWf2d0jgE8BqpmM-8r2H6o&usqp=CAU" class="d-block w-100" height={'600px'} width={'800px'} style={{borderRadius:'13px'}} alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000"  >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzYussa-_PiBuqxnFztdGYH4eNaw6ufYIVLB1DUZXNzOl_4Y2iF4QaHH79eSWLg9lvOs&usqp=CAU" class="d-block w-100" height={'600px'} width={'800px'} style={{borderRadius:'13px'}}  alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        {/* <img src="https://www.vinmec.com/s3-images/20210519_070755_784816_thuc-pham-huu-co.max-800x800.jpg" alt='' height={'100%'} width={'100%'} style={{borderRadius:'13px'}}/>    */}
        </div>
        <div style={{ width:'720px'}} >
            <div style={{ width:'100%',height:'290px',marginBottom:'20px'}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH8s27IAgee-5nItO1QjvgSMd_uAQWXMVYdh-wJA7LUq9nqWf2d0jgE8BqpmM-8r2H6o&usqp=CAU"  alt='' height={'100%'} width={'100%'} style={{borderRadius:'13px'}}/>
            </div>
            <div style={{ width:'100%',height:'290px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzYussa-_PiBuqxnFztdGYH4eNaw6ufYIVLB1DUZXNzOl_4Y2iF4QaHH79eSWLg9lvOs&usqp=CAU"  alt='' height={'100%'} width={'100%'} style={{borderRadius:'13px'}}/>   

            </div>
        </div>
        <div style={{width:' 1715px',justifyContent:'center',alignItems:'center',display:'flex',gap:'30px',flexWrap:'wrap',marginTop:'50px'}}>   
            <div style={{ width:'340px'}} >
                <div style={{ width:'100%',height:'250px',marginBottom:'20px'}}>
                    <div >
                        <center >
                        <img style={{ }} height={'100%'} width={'200px'} src='https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/t1.jpg' alt=''/>
                        </center>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h3>Giao hàng miễn phí</h3>
                        <p>Miễn phí giao hàng cho đơn hàng trên 200.000đ</p>
                    </div>
                </div>
            </div>
            <div style={{ width:'340px'}} >
                <div style={{ width:'100%',height:'250px',marginBottom:'20px'}}>
                    <div >
                        <center >
                        <img height={'100%'} width={'200px'} src='https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/t2.jpg' alt=''/>
                        </center>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h3>Hỗ trợ 24/7</h3>
                        <p>Hỗ trợ chăm sóc bán hàng liên tục 24/7/365</p>
                    </div>
                </div>
            </div>
            <div style={{ width:'340px'}} >
                <div style={{ width:'100%',height:'250px',marginBottom:'20px'}}>
                    <div >
                        <center >
                        <img  height={'100%'} width={'200px'} src='https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/t2.jpg' alt=''/>
                        </center>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h3>7 ngày đổi trả</h3>
                        <p>Cam kết chất lượng, bao đổi trả trong vòng 7 ngày</p>
                    </div>
                </div>
            </div>
            <div style={{ width:'340px'}} >
                <div style={{ width:'100%',height:'250px',marginBottom:'20px'}}>
                    <div >
                        <center >
                        <img height={'100%'} width={'200px'} src='https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/t4.jpg' alt=''/>
                        </center>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h3>100% thanh toán an toàn</h3>
                        <p>Đảm bảo thanh toán an toàn với Paypal, Visa, …</p>
                    </div>
                </div>
            </div>
         
            
        </div>  
            {/* sản phẩm mới  */}
                <NewProduct/>
            <div style={{ width:'90%',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'30px',}}>
                <div style={{ width:'700px',height:'300px',}}>
                    <div   >
                        <img  style={{borderRadius:'13px'}} height={'300px'}  width={'100%'} src="https://cdn.tgdd.vn/Files/2022/09/07/1465850/tu-26-8-21-9-2022-trai-cay-cac-loai-khuyen-mai-chi-tu-18000d-202209071258179650.jpg" alt='' />
                    </div>
                </div>
                <div style={{ width:'700px',height:'300px'}}>
                    <div  >
                        <img  style={{borderRadius:'13px'}} height={'300px'}  width={'100%'} src="https://cdn.tgdd.vn/Files/2022/09/07/1465850/tu-26-8-21-9-2022-trai-cay-cac-loai-khuyen-mai-chi-tu-18000d-202209071258179650.jpg" alt='' />
                    </div>
                </div>
              
        </div>
        <div>
        {/* sản phẩm bán chạy  */}
        <SellProduct/>
        </div>
        {/*  */}
        <div style={{ width:'90%',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'30px',height:'500px'}}>
              
             <img style={{ borderRadius:'13px'}} width={'100%'} height={'100%'} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMQZ9z354kRZ-kIUgKZkPzLGXfMqyELpt0uTx4wMAZ7hw0SnhsySKGTn10qH_J7-FVbImFR2F6oh7dU4Bw_Ts9hJbtEX-iWADRdINH0OHvuu8QrNAbq-CA5KUJyQXNotg2RgRkYrDZj3O7TWdy7qKJs1n5sSsS58vfRflyyc6SzViIXZXGXjkLUxGruCU/s16000-rw/(%20Anhpng.com%20)%20-%20POSTER%20HOA%20QU%E1%BA%A2%20S%E1%BA%A0CH%2001%20(Custom).jpg"  alt=''/>
                    
        </div>
        {/*  sản phẩm thịnh hành */}
        <TopProduct/>
        {/*  blog*/}

        <BlogProduct/>

     </div>
 
     </>
    )
}
export default Carousel;