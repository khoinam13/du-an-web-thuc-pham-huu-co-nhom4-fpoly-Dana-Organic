function UpdateAdminCategory(){
    return(
        <>
            <div style={{padding:'30px'}}>
                <h3> Cập nhật danh mục</h3>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Tên Danh Mục</label>
                    <div class="col-sm-4">
                    <input type="text"  class="form-control" style={{fontWeight:'500'}} placeholder="Nhập tên danh mục..." />
                    </div>
                </div>
                
                <button type="button" class="btn btn-primary" style={{fontWeight:'900'}}>Thêm danh mục</button>
            </div>
        </>
        
    )
}

export default UpdateAdminCategory;