import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function UpdateAdminCategory() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [name, setName] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3000/category/${id}`);
        if (response.ok) {
          const data = await response.json();
          setName(data.name);
        } else {
          console.error('Lỗi khi lấy dữ liệu danh mục');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleNameChange = (event) => setName(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch(`http://localhost:3000/category/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        console.log('Danh mục đã được cập nhật thành công!');
        navigate('/admin/category');
      } else {
        const errorText = await response.text();
        console.error('Lỗi khi cập nhật danh mục:', errorText);
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu cập nhật:', error);
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h3>Cập nhật danh mục</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Tên Danh Mục</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Nhập tên danh mục..."
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <Link to="/admin/admincategory" >  <button type="button" class="btn btn-secondary" style={{marginRight:'20px'}}>Trở về</button></Link>

        <button type="submit" className="btn btn-primary" style={{ fontWeight: '900' }}>
          Cập nhật danh mục
        </button>
      </form>
    </div>
  );
}

export default UpdateAdminCategory;
