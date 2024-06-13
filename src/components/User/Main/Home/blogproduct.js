import { Link } from "react-router-dom";
function BlogProduct(){
    return(
       <>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px'}} >
                        
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#777'}}>
                            <h6 style={{fontSize:'20px'}}> Bài viết mới</h6>
                        </div>
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#20242e',fontFamily:'Quicksand',fontSize:'48px'}}>
                            <h3 style={{fontSize:'48px'}}>    Bài viết </h3>
                        </div>
                    
                        
                        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px',width:'89%'}}>
                            <div className="card" style={{width: '28rem'}}>
                                <img src="https://nhuongquyenviet.vn/wp-content/uploads/2023/06/1-5.png" className="card-img-top" alt="..."/>
                                <div className="card-body" >
                                         <center >
                                         <Link className="card-title " style={{color:'black',fontSize:'20px',textDecoration:'none',fontWeight:'40px'}} >Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản</Link>
                                          <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
                                       
                                           <p >Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình trong thành phố bởi...					</p>
                                          </div>
                                          <Link href="#" className="btn btn-primary">Chi Tiết</Link>
                                         </center>
                                         
                                       </div>
                            </div>
                           
                           
                        </div>
                    
            </div>
       </>
    )
}

export default BlogProduct;