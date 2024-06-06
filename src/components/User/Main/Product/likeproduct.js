
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import { Link } from 'react-router-dom'; 


function Likeproduct(){
    return(
        <>
            <div>
                <h3 className='h3'>Có thể bạn thích</h3>
                <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px',}}>
                            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
                                   
                                    <div className="card mb-3" style={{width:'90%'}}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                            <img src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg" height={'80%'} width={'100%'}   alt="..."/>
                                            </div>
                                            <div className="col-md-8" style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <div className="card-body" >
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
                </div>
            </div>
        </>
    )
}

export default Likeproduct;