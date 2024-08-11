import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

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
    setCurrentPage(1); 
  }, [searchQuery, blogs]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa blog này?')) {
      try {
        const response = await fetch(`http://localhost:3000/blog/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        setBlogs(blogs.filter(blog => blog.id !== id));
        setFilteredBlogs(filteredBlogs.filter(blog => blog.id !== id));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Xóa thành công!',
        });
        console.log(`Blog with id ${id} deleted successfully`);
      } catch (error) {
        console.error(`There was an error deleting the blog with id ${id}!`, error);
      }
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

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
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px', height: '38px' }}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
            ></i>
          </div>
          <Link to={'/admin/newblog'}>
            <button className="btn btn-primary">
              <i className="fa-solid fa-plus"></i> Thêm tin tức
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
              {currentBlogs.length > 0 ? (
                currentBlogs.map(blog => (
                  <tr key={blog.id}>
                    <td style={{ fontSize: '18px', fontWeight: '500', width: '300px' }}>{blog.title}</td>
                    <td>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{ width: '100px', height: 'auto' }}
                      />
                    </td>
                    <td style={{ fontSize: '18px', fontWeight: '500', width: '700px' }}>{blog.content}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Link to={`/admin/updateblog/${blog.id}`}>
                          <i className="fa-solid fa-edit" style={{ fontSize: '20px' }}></i>
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <i className="fa-solid fa-trash" style={{ fontSize: '20px', color: 'red' }}></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Không Tìm Thấy Blog!</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* phân trang */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <nav>
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Trước</button>
                </li>
                {[...Array(totalPages).keys()].map(page => (
                  <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Sau</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminBlog;
