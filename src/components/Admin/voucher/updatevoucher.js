function UpdateVoucher(){
    return(
        <>
            <div style={{padding:'30px'}}>
            <h3> Cập nhật mã giảm giá</h3>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Tên</label>
                    <div class="col-sm-4">
                    <input type="text"  class="form-control" style={{fontWeight:'500'}}  />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Mã sản phẩm</label>
                    <div class="col-sm-4">
                    <input type="text" class="form-control"  />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Giảm giá</label>
                    <div class="col-sm-4">
                    <input type="text" class="form-control"  />
                    </div>
                </div>
                
               
                <button type="button" class="btn btn-primary" style={{fontWeight:'900'}}>Cập nhập mã giảm giá</button>
            </div>
        
        </>
    )
}

export default UpdateVoucher;