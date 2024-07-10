import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Products(){
 
   //========== render product ======================
   const [product, setProduct] = useState([])
   const [productErr, setProductErr] = useState(null)
   useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const responese  = await fetch('http://localhost:3001/product')
        if(!responese.ok){
          throw new Error ('Đã xảy ra lỗi dữ liệu khi render')
        }
        const result = await responese.json();
        setProduct(result)
      }
      catch(error){
        setProductErr(error)
      }
    }
    fetchData()
  },[])
  console.log(product)
  

  //========== author: Đặng Nam =============
    return(
        <>
        <div >
      
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px'}}>
                        {product.map (item =>
                            <div key={item.id} className="card" style={{width: '18rem'}}>
                              <center >
                              <img src={item.productImage} height={'247px'} width={'247px'}  />
                              </center>
                              <div className="card-body" >
                            <center >
                            <Link className="card-title cardtitle" style={{color:'#83bb3e'}} >{item.productName}</Link>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
                            <p > <del className="carddel">{item.productPriceOrigin}đ</del></p>
                              <p className="carddel" style={{fontWeight: 'bold'}}>{item.productPrice}đ</p>
                            </div>
                          </center>
                        </div>
                  </div>
                        )}
            </div>
        </div>
        </>
    )
}
export default Products;