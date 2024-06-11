import React,{useState} from "react";

function Image(){
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount => Math.max(1, prevCount - 1)); 
  };

  const handleChange = (event) => {
    const value = Number(event.target.value);
    setCount(value);
  };
    return(
        <>
            <div className="row d-flex justify-content-center align-items-center" style={{width:'100%'}} >
                <div  style={{ width:'720px',border:'1px solid #ebebeb'}}>
                    <div className=" d-flex justify-content-center align-items-center">
                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" style={{width:'500px',height:'500px'}}/>
                        </button>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',padding:'20px'}}>
                        <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" width={'130px'} height={'130px'} style={{border:'1px solid #ebebeb'}}/>
                        <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" width={'130px'} height={'130px'} style={{border:'1px solid #ebebeb'}}/>
                        <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" width={'130px'} height={'130px'} style={{border:'1px solid #ebebeb'}}/>
                        <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" width={'130px'} height={'130px'} style={{border:'1px solid #ebebeb'}}/>
                    </div>
                   
                </div>
                <div style={{ width:'720px',marginBottom:'auto'}}>
             
                    <h2 style={{fontWeight:'600'}}>Rau Củ</h2> 
                    <div style={{display:'flex',gap:'20px'}}>
                            <p > <del className="carddel" style={{fontSize:'25px'}}>400,000đ</del></p>
                             <p className="carddel" style={{fontWeight: 'bold',fontSize:'25px'}}>300,000đ</p>
                    </div>
                    <div>
                    <p style={{ color:'#777',lineHeight:'25.6px',fontSize:'20px'}}>
                    Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt giúp duy trì sức…
                    </p>
                          
                    </div>
                    <div>
                    <p style={{ color:'#7a9c59',fontSize:'19px',fontWeight:'600'}}>
                        Tình trạng:<span style={{backgroundColor:'#00923f',color:'#fff'}}><i class="fa-solid fa-check"></i>  Còn hàng</span>
                    </p>
                    <div className="counter-container">
                    <button type="button" onClick={handleDecrease} className="counter-button">-</button>
                    <input 
                      className="counter-input"
                      type="number" 
                      min="1" 
                      value={count} 
                      onChange={handleChange} 
                    />
                    <button type="button" onClick={handleIncrease} className="counter-button">+</button>
                    <button type="button" class="btn btn" style={{backgroundColor:'#83bb3e',width:'250px',fontSize:'20px',fontWeight:'500',color:'#fff', marginLeft:'30px'}}>Thêm Vào Giỏ Hàng</button> 

              </div>
                    </div>

                </div>

            </div>
           
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl d-flex justify-content-center align-items-center">
    <div class="modal-content" style={{ width: '900px', maxHeight: '80vh' }}>
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex justify-content-center align-items-center">
        <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" style={{ width: '500px', height: '500px' }} />
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Image;