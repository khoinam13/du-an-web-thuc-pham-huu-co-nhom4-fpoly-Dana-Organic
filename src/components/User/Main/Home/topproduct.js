import { Link } from "react-router-dom"
import { useState,useEffect } from 'react';
function TopProduct(){
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []); 
    return(
        <>
              <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px',marginBottom:'60px',marginTop:'60px'}} >
                        
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#777'}}>
                            <h6 style={{fontSize:'20px'}}> Bán chạy</h6>
                        </div>
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#20242e',fontFamily:'Quicksand',fontSize:'48px'}}>
                            <h3 style={{fontSize:'48px'}}>    Sản phẩm thịnh hành</h3>
                        </div>
                    
                        
                        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px',width:'100%'}}>
                            <div style={{width:'65%',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
                            {products.map((item) => (
            <div key={item.id} style={{  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={item.image} height={'247px'} width={'247px'} alt="..." />
                  </div>
                  <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="card-body">
                      <center>
                        <Link to={`/detail-product/${item.id}`} className="card-title cardtitle" style={{ color: '#83bb3e' }}>{item.name}</Link>
                        <div>
                          <p><del className="carddel">400,000đ</del></p>
                          <p className="carddel" style={{ fontWeight: 'bold' }}>300,000đ</p>
                        </div>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

                            </div>


                            <div style={{borderRadius:'16px',width:'500px',height:'600px',backgroundColor:'#005350',display:'flex',justifyContent:'center',alignItems:'center'}}>
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