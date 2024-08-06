import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

function Range(){
    return(
        <>
            <div style={{border:'1px solid #ebebeb',borderRadius:'15px',}}>
                <h3 className='h3'>
                    Khoảng giá
                </h3>
                <center>
                <input type={'text'} style={{width:'40%',border:' 3px solid #ebebeb',borderRadius:'6px'}} placeholder={'₫ TỪ'}/>
                ------
                <input type={'text'} style={{width:'40%',border:' 3px solid #ebebeb',borderRadius:'6px'}} placeholder={'₫ ĐẾN'}/>
                </center>
                <center style={{ marginTop:'20px'}}>
                <button type="button" className="btn btn-success"style={{backgroundColor:'#00923f ',marginBottom:'20px'}}> Tìm kiếm</button>
                </center>
            </div>  
        </>

    )
}
export default Range;