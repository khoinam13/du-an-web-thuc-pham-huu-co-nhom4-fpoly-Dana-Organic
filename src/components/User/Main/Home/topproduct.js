import { Link } from "react-router-dom"
function TopProduct(){
    return(
        <>
              <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px'}} >
                        
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#777'}}>
                            <h6 style={{fontSize:'20px'}}> Bán chạy</h6>
                        </div>
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#20242e',fontFamily:'Quicksand',fontSize:'48px'}}>
                            <h3 style={{fontSize:'48px'}}>    Sản phẩm thịnh hành</h3>
                        </div>
                    
                        
                        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px',width:'89%'}}>
                            <div style={{width:'65%',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
                                   
                                    <div class="card mb-3" style={{maxWidth:'540px'}}>
                                        <div class="row g-0">
                                            <div class="col-md-6">
                                            <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" height={'247px'} width={'247px'}   alt="..."/>
                                            </div>
                                            <div class="col-md-6" style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <div class="card-body" >
                                            <center >
                                            <Link className="card-title cardtitle" style={{color:'#83bb3e'}} >Hoa qủa</Link>
                                            <div >
                                            <p > <del className="carddel">400,000đ</del></p>
                                                <p className="carddel" style={{fontWeight: 'bold'}}>300,000đ</p>
                                            </div>
                                            </center>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-3" style={{maxWidth:'540px'}}>
                                        <div class="row g-0">
                                            <div class="col-md-6">
                                            <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" height={'247px'} width={'247px'}   alt="..."/>
                                            </div>
                                            <div class="col-md-6" style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <div class="card-body" >
                                            <center >
                                            <Link className="card-title cardtitle" style={{color:'#83bb3e'}} >Hoa qủa</Link>
                                            <div >
                                            <p > <del className="carddel">400,000đ</del></p>
                                                <p className="carddel" style={{fontWeight: 'bold'}}>300,000đ</p>
                                            </div>
                                            </center>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                            </div>


                            <div style={{borderRadius:'16px',width:'500px',height:'500px',backgroundColor:'#005350',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div style={{width:'65%',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
                                   <p style={{ color:'white',fontSize:'25px'}}>
                                    Giảm giá trong tuần
                                   </p>
                                   <div className="card" style={{width: '18rem'}}>
                                           <center >
                                           <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" height={'247px'} width={'247px'}  />
                                           </center>
                                           <div className="card-body" >
                                         <center >
                                         <Link className="card-title cardtitle" style={{color:'#83bb3e'}} >Hoa qủa</Link>
                                          <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
                                         <p > <del className="carddel">400,000đ</del></p>
                                           <p className="carddel" style={{fontWeight: 'bold'}}>300,000đ</p>
                                          </div>
                                         </center>
                                         
                                       </div>
                                   </div>
                                   </div>
                            </div>
                        </div>

                        
           
        </div>
        </>
    )
}
export default TopProduct