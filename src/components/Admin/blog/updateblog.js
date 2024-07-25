import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateAdminBlog() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blog/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTitle(data.title);
          setContent(data.content);
        
        } else {
          console.error('Lỗi khi lấy dữ liệu bài viết');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files[0]);
  const handleContentChange = (event) => setContent(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`http://localhost:3000/blog/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('Bài viết đã được cập nhật thành công!');
        navigate('/admin/blog'); 
      } else {
        const errorText = await response.text();
        console.error('Lỗi khi cập nhật bài viết:', errorText);
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu cập nhật:', error);
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h3>Cập nhật bài viết</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Tên bài viết</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Nhập tên bài viết..."
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Hình Ảnh</label>
          <div className="col-sm-4">
            <input
              type="file"
              className="form-control"
              style={{ fontWeight: '500' }}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Mô Tả</label>
          <div className="col-sm-4">
            <textarea
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Mô tả"
              value={content}
              onChange={handleContentChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ fontWeight: '900' }}
        >
          Cập nhật bài viết
        </button>
      </form>
    </div>
  );
}

export default UpdateAdminBlog;
