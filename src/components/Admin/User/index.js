import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminUser() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/account');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          setFilteredUsers(data);
        } else {
          console.error('Lỗi khi lấy dữ liệu người dùng');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    setCurrentPage(1); 
  }, [searchTerm, users]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
      try {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setUsers(users.filter(user => user.id !== id));
          setFilteredUsers(filteredUsers.filter(user => user.id !== id));
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
        } else {
          console.error('Lỗi khi xóa người dùng');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu xóa:', error);
      }
    }
  };

// Tính toán phân trang
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="search"
              placeholder="Search..."
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px', height: '38px' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
            ></i>
          </div>
          <Link to={'/admin/newuser'}>
            <button className="btn btn-primary">
              <i className="fa-solid fa-plus"></i> Thêm người dùng
            </button>
          </Link>
        </div>
        <div>
          {filteredUsers.length === 0 && <p>Không Tìm thấy dữ liệu!!</p>}
          <table className="table">
            <thead>
              <tr style={{ color: 'red' }}>
                <th scope="col">ID</th>
                <th scope="col">Tên</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Email</th>
                <th scope="col">Mật Khẩu</th>
                <th scope="col">Ngày Sinh</th>
                <th scope="col">Vai Trò</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user.id}>
                  <td style={{ fontSize: '18px', fontWeight: '500' }}>{user.id}</td>
                  <td style={{ fontSize: '18px', fontWeight: '500' }}>{user.name}</td>
                  <td>
                    <img
                      src={user.image}
                      alt={user.username}
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                  </td>
                  <td style={{ fontSize: '18px', fontWeight: '500' }}>{user.email}</td>
                  <td style={{ fontSize: '18px', fontWeight: '500' }}>{user.password}</td>
                  <td style={{ fontSize: '18px', fontWeight: '500' }}>{user.date}</td>
                  <td style={{ fontSize: '18px', fontWeight: '500' }}>{user.role}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                      <Link to={`/admin/updateuser/${user.id}`}>
                        <i className="fa-solid fa-edit" style={{ fontSize: '20px' }}></i>
                      </Link>
                      <button onClick={() => handleDelete(user.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <i className="fa-solid fa-trash" style={{ fontSize: '20px', color: 'red' }}></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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

export default AdminUser;
