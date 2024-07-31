import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdminUser() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, users]);

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
      try {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setUsers(users.filter(user => user.id !== id));
          setFilteredUsers(filteredUsers.filter(user => user.id !== id));
          console.log('Người dùng đã được xóa thành công!');
        } else {
          console.error('Lỗi khi xóa người dùng');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu xóa:', error);
      }
    }
  };

  return (
    <>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="search"
              placeholder="Search..."
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
            ></i>
          </div>
          <Link to={'/admin/newuser'}>
            <button className="btn btn-link">
              <i className="fa-solid fa-plus"></i>
            </button>
          </Link>
        </div>
        <div>
          {filteredUsers.length === 0 && <p>Không Tìm thấy dữ liệu!!</p>}
          <table className="table">
            <thead>
              <tr>
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
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>
                    <img
                      src={user.image}
                      alt={user.username}
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                  </td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.Dob}</td>
                  <td>{user.role}</td>
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
        </div>
      </div>
    </>
  );
}

export default AdminUser;
