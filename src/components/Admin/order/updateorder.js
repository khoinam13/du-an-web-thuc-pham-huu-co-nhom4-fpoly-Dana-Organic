function UpdatOrder(){
    return(
        <>
            <div style={{padding:'30px'}}>
            <h3> Cập nhật đơn hàng</h3>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Mã khách hàng</label>
                    <div class="col-sm-4">
                    <input type="text"  class="form-control" style={{fontWeight:'500'}} disabled />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Địa chỉ giao hàng</label>
                    <div class="col-sm-4">
                    <input type="text" class="form-control"  />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Phương thức thanh toán</label>
                    <div class="col-sm-4">
                    <select class="form-control" >
                        <option>Thanh toán khi nhận hàng</option>
                        <option>Chuyển khoản</option>
                    </select>
                    </div>
                </div>
                
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Số điện thoại</label>
                    <div class="col-sm-4">
                    <input type="phone"  class="form-control" style={{fontWeight:'500'}} />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Trạng thái</label>
                    <div class="col-sm-4">
                    <select class="form-control" >
                        <option>Đã xác nhận</option>
                        <option>Đã vận chuyển</option>
                        <option>Đã giao hàng</option>
                    </select>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" style={{fontWeight:'900'}}>Cập nhập đơn hàng</button>
            </div>
        
        </>
    )
}

export default UpdatOrder;