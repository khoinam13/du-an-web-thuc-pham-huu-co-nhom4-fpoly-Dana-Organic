import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function PostBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); 
  };
 

  const handleSubmit = async () => {
    
    const postData = {
      title: title,
      content: content,
    };
  
    console.log('Post Data:', postData);
  
    try {
      const response = await fetch('http://localhost:3000/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      console.log('Response:', await response.text());
  
      if (response.ok) {
        console.log('Bài viết đã được đăng thành công!');
        
        setTitle('');
        setContent('');
        setImage(null);

        navigate('/blog');
      } else {
        console.error('Lỗi khi đăng bài viết');
      }
    } catch (error) {
      console.error('Lỗi khi gửi bài viết:', error);
    }
  };
  

  return (
    <>
      <div style={{ padding: '30px', width: '50%', margin: '0 auto', marginBottom: '60px', marginTop: '40px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .13)' }}>
        <h3>Đăng bài viết</h3>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Tên bài</label>
          <div className="col-sm-10">
            <input 
              type="text" 
              className="form-control" 
              style={{ fontWeight: '500' }} 
              placeholder={'Nhập Tên...'} 
              value={title}
              onChange={handleTitleChange} 
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Hình Ảnh</label>
          <div className="col-sm-10">
            <input 
              type="file" 
              style={{ fontWeight: '500' }} 
              className="form-control" 
              onChange={handleImageChange} 
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Nội dung</label>
          <div className="col-sm-10">
            <textarea 
              className="form-control" 
              style={{ fontWeight: '500', height: '200px' }} 
              placeholder={'Viết nội dung...'}
              value={content}
              onChange={handleContentChange} 
            />
          </div>
        </div>

        <center>
          <button type="button" className="btn btn-primary" style={{ fontWeight: '900' }} onClick={handleSubmit}>
            Đăng Bài
          </button>
        </center>
      </div>
    </>
  );
}

export default PostBlog;
