import React, { useState } from 'react';

function DanhGia() {
  const [rating, setRating] = useState(0); 
  const [modalRating, setModalRating] = useState(0); 

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleModalStarClick = (value) => {
    setModalRating(value);
  };

  const handleSubmitRating = () => {
    setRating(modalRating);
  };

  const ratings = [0, 0, 0, 0, 0]; 

  const getBarWidth = (star) => {
    const totalRatings = ratings.reduce((acc, count) => acc + count, 0);
    const percentage = totalRatings ? (ratings[star - 1] / totalRatings) * 100 : 0;
    return `${percentage}%`;
  };

  return (
    <div style={{ width: '76%', margin: '0 auto', marginBottom: '20px', marginTop: '20px' }}>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <button type="button" className="btn btn-success">
          Đánh giá
        </button>
      </div>

      <div>
        <div style={{  border: '1px solid #ebebeb',  padding: '20px',  display: 'flex',  justifyContent: 'center',  alignItems: 'center',  gap: '60px',  flexWrap: 'wrap',}}>
          <div
            style={{  width: '70%',  display: 'flex',  flexDirection: 'column',  border: '1px solid #ebebeb', padding: '20px',  gap: '30px',  }} >
            <h3>Đánh giá</h3>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} style={{  display: 'flex',  gap: '20px', alignItems: 'center',justifyContent:'center' }} >
                <span>
                  <h3 style={{ color: '#777777' }}>
                    {star}
                    <i  className="fa-solid fa-star" style={{ color: star <= rating ? '#f39c12' : '#dedede' }}></i>
                  </h3>
                </span>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#eee',  border: '1px solid #eee',  width: '400px',  height: '20px',   borderRadius: '3px',  position: 'relative',  }}>
                    <div style={{ backgroundColor: '#03a0e2', height: '100%', borderRadius: '3px', width: getBarWidth(star), }} ></div>
                  </div>
                </span>
                <span style={{ color: '#03a0e2', fontSize: '20px' }}>
                  <b>{ratings[star - 1]}</b> | {ratings[star - 1]} Đánh giá </span> 
                   </div>
                   ))}
                  <button  type="button"  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModall" >
              Đánh Giá Ngay
            </button>
            <div>
                <div style={{display:'block',display:"flex",justifyContent:'start',alignItems:'center',gap:'15px',marginBottom:"20px"}}>
                    <img src='https://vergewiki.com/uploads/biography/2019/7/6/Anh%20Do-1562430469201.jpg' alt='' width={'50px'} height={'50px'} style={{borderRadius:'50%'}}/>
                    <h4>Tuấn</h4>
                </div>
                <div style={{marginLeft:'30px',marginRight:'30px'}}>
                <div style={{ display: 'flex', gap: '20px',  justifyContent: 'start', alignItems: 'center', marginBottom:'10px'  }}>
                      
                            <i className="fa-solid fa-star" ></i>
                           

                      </div>
                    <img src='https://vergewiki.com/uploads/biography/2019/7/6/Anh%20Do-1562430469201.jpg' alt='' width={'50px'} height={'50px'} style={{marginBottom:'5px',marginRight:'15px'}}/>
                    <h4>Chất lượng ok, nên mua nhé</h4>
                </div>
             
              </div>
           
          </div>


           

            {/* Modal */}
            <div className="modal fade" id="exampleModall" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Đánh Giá
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                  </div>
                  <div className="modal-body">
                    <textarea  placeholder="Mời bạn chia sẻ cảm nhận về sản phẩm..." style={{ width: '100%', height: '140px', borderRadius: '5px',}}></textarea>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                      <h3 style={{ color: '#77777', fontSize: '25px' }}>
                        Ảnh Thực Tế Sản Phẩm
                      </h3>
                      <input type="file" />
                    </div>
                    <div>
                      <h3 style={{ color: '#77777', fontSize: '25px' }}>
                        Bạn cảm thấy sản phẩm như thế nào:
                      </h3>
                      <div style={{ display: 'flex', gap: '20px',  justifyContent: 'center', alignItems: 'center',  }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} style={{ fontSize: '25px', color: '#999', cursor: 'pointer' }} onClick={() => handleModalStarClick(star)}>
                            <i className="fa-solid fa-star" style={{ color: star <= modalRating ? '#f39c12' : '#dedede' }} ></i>
                            <span> {star === 1 ? 'Rất Tệ' : star === 2 ? 'Tệ' : star === 3 ? 'Bình Thường' : star === 4 ? 'Tốt' : 'Rất Tốt'}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={handleSubmitRating}>
                      Đánh giá
                    </button>
                  </div>
                </div>
              </div>
         
          </div>
        </div>

        {/* Phần bình luận */}
        <div style={{display: 'flex',flexDirection: 'column',border: '1px solid #ebebeb',padding: '20px',gap: '20px',}}>
          <textarea placeholder="Mời bạn bình luận sản phẩm..." style={{width: '100%',border: '1px solid #ebebeb',height: '70px',}}></textarea>

          <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center',gap: '20px', fontSize: '20px',marginTop: '20px', flexWrap: 'wrap', }}>
            <input type="radio" /> Anh
            <input type="radio" /> Chị
            <input type="text" placeholder="Họ Tên" style={{ border: '1px solid #ebebeb', borderRadius: '6px' }}/>
            <input  type="email" placeholder="Email" style={{ border: '1px solid #ebebeb', borderRadius: '6px' }}/>
            <button type="button" className="btn btn-warning">
              Gửi
            </button>
          </div>
          <div style={{ width: '100%' }}>
          <div>
                <div style={{display:'block',display:"flex",justifyContent:'start',alignItems:'center',gap:'15px',marginBottom:"20px"}}>
                    <img src='https://vergewiki.com/uploads/biography/2019/7/6/Anh%20Do-1562430469201.jpg' alt='' width={'50px'} height={'50px'} style={{borderRadius:'50%'}}/>
                    <h4>Tuấn</h4>
                </div>
                <div style={{marginLeft:'30px',marginRight:'30px'}}>
                <h4>Chất lượng ok, nên mua nhé</h4>
                </div>
             
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DanhGia;
