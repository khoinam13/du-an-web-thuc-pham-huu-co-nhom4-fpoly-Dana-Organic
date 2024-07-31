import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateAdminUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Người Dùng');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(''); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/account/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
          setEmail(data.email);
          setPassword(data.password);
          setRole(data.role);
          setImage(data.image);
        } else {
          console.error('Lỗi khi lấy dữ liệu người dùng');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!username  || !email || !password) {
      setError('Vui lòng điền đầy đủ thông tin.'); 
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`http://localhost:3000/account/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('Người dùng đã được cập nhật thành công!');
        navigate('/admin/adminuser');
      } else {
        const errorText = await response.text();
        console.error('Lỗi khi cập nhật người dùng:', errorText);
        setError('Lỗi khi cập nhật người dùng'); 
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu cập nhật:', error);
      setError('Lỗi khi gửi yêu cầu cập nhật'); 
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h3>Cập nhật Người Dùng</h3>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Tên</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Nhập tên người dùng..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Hình Ảnh</label>
          <div className="col-sm-4">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
       
    
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Email</label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Mật Khẩu</label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Mật Khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Ngày Sinh</label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              style={{ fontWeight: '500' }}
              
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Vai Trò</label>
          <div className="col-sm-4">
            <select
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Người Dùng</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ fontWeight: '900' }}
        >
          Cập nhật Người Dùng
        </button>
      </form>
    </div>
  );
}

export default UpdateAdminUser;
