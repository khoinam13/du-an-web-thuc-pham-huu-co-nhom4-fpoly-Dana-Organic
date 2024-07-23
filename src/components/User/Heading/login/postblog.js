function PostBlog(){
    return(
        <>
            
            <div style={{padding:'30px',width:'50%',margin:'0 auto',marginBottom:'60px',marginTop:'40px',boxShadow:' 0 1px 2px 0 rgba(0, 0, 0, .13)'}}>
            <h3>Đăng bài viết</h3>
                 <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Tên bài  </label>
                    <div class="col-sm-10">
                    <input type="text"  class="form-control" style={{fontWeight:'500'}}  placeholder={'Nhập Tên...'}/>
                    </div>
                </div>
               
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}> Hình Ảnh</label>
                    <div class="col-sm-10">
                    <input type="file" style={{fontWeight:'500'}}  class="form-control"  />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label" style={{fontWeight:'900'}}>Nội dung</label>
                    <div class="col-sm-10">
                    <textarea   class="form-control" style={{fontWeight:'500',height:'200px'}}  placeholder={'Viết nội dung...'}/>
                    </div>
                </div>
               
            <center>
            <button type="button" class="btn btn-primary" style={{fontWeight:'900'}}>Đăng Bài</button>

            </center>          
  
            </div>
        </>
    )
}

export default PostBlog;