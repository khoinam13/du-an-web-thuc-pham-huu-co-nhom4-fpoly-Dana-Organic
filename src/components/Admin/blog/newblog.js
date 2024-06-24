function NewAdminBlog(){
    return(
        <>
            <div style={{padding:'30px'}}>
            <h3> Thêm bài viết mới</h3>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Tên bài viêt</label>
                    <div class="col-sm-4">
                    <input type="text"  class="form-control" style={{fontWeight:'500'}} placeholder="Nhập tên bài viết..." />
                    </div>
                </div>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Hình Ảnh</label>
                    <div class="col-sm-4">
                    <input type="file"  class="form-control" style={{fontWeight:'500'}}  />
                    </div>
                </div>
                
                
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Mô Tả</label>
                    <div class="col-sm-4">
                    <textarea  class="form-control" style={{fontWeight:'500'}} placeholder="Mô tả" />
                    </div>
                </div>
               
                
                <button type="button" class="btn btn-primary" style={{fontWeight:'900'}}>Thêm bài viết</button>
            </div>
        </>
        
    )
}

export default NewAdminBlog;