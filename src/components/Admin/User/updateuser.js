function UpdateAdminUser(){
    return(
        <>
            <div style={{padding:'30px'}}>
            <h3> Cập nhật người dùng</h3>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Tên </label>
                    <div class="col-sm-4">
                    <input type="text"  class="form-control" style={{fontWeight:'500'}} placeholder="Nhập tên sản phẩm..." />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Hình Ảnh</label>
                    <div class="col-sm-4">
                    <input type="file" class="form-control" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Ngày Sinh</label>
                    <div class="col-sm-4">
                    <input type="date" class="form-control" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Email</label>
                    <div class="col-sm-4">
                    <input type="email" style={{fontWeight:'500'}}  class="form-control" placeholder="Email" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Mật Khẩu</label>
                    <div class="col-sm-4">
                    <input  type="password" class="form-control" style={{fontWeight:'500'}} placeholder="Mật Khẩu" />
                    </div>
                </div>
               
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Vai Trò</label>
                    <div class="col-sm-4">
                    <select class="form-control" >
                        <option>Người Dùng</option>
                        <option>Admin</option>
                    </select>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" style={{fontWeight:'900'}}>Cập nhật Người Dùng</button>
            </div>
        </>
        
    )
}

export default UpdateAdminUser;