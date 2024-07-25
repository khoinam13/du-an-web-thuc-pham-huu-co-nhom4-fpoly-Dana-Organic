import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/blog');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
          setFilteredBlogs(data);
        } else {
          console.error('Lỗi khi lấy dữ liệu blog');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    setFilteredBlogs(
      blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, blogs]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px' }}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
            ></i>
          </div>
          <Link to={'/admin/newblog'}>
            <button className="btn btn-link">
              <i className="fa-solid fa-plus"></i>
            </button>
          </Link>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tên</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Mô Tả</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map(blog => (
                  <tr key={blog.id}>
                    <td>{blog.title}</td>
                    <td>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{ width: '100px', height: 'auto' }}
                      />
                    </td>
                    <td>{blog.content}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Link to={`/admin/updateblog/${blog.id}`}>
                          <i className="fa-solid fa-edit" style={{ fontSize: '20px' }}></i>
                        </Link>
                        <button>
                          <i className="fa-solid fa-trash" style={{ fontSize: '20px', color: 'red' }}></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Không Tìm Thấy Sản Phẩm!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminBlog;
