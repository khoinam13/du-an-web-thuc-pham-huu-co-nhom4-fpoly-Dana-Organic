function NewAdminProduct(){
    return(
        <>
            <div style={{padding:'30px'}}>
            <h3> Thêm sản phẩm mới</h3>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Tên Sản Phẩm</label>
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
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Giá</label>
                    <div class="col-sm-4">
                    <input type="number" style={{fontWeight:'500'}}  class="form-control" placeholder="Giá" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Mô Tả</label>
                    <div class="col-sm-4">
                    <textarea  class="form-control" style={{fontWeight:'500'}} placeholder="Mô tả" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Số Lượng</label>
                    <div class="col-sm-4">
                    <input type="number"  class="form-control" style={{fontWeight:'500'}} placeholder="Số lượng"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Danh mục</label>
                    <div class="col-sm-4">
                    <select class="form-control" >
                        <option>Trái Cây</option>
                        <option>Rau</option>
                        <option>Củ</option>
                    </select>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" style={{fontWeight:'900'}}>Thêm sản phẩm</button>
            </div>
        </>
        
    )
}

export default NewAdminProduct;