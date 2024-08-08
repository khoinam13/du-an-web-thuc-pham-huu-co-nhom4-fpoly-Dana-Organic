import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/category');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
          setFilteredCategories(data);
        } else {
          console.error('Lỗi khi lấy dữ liệu danh mục');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    setFilteredCategories(
      categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, categories]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      try {
        const response = await fetch(`http://localhost:3000/category/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        setCategories(categories.filter(category => category.id !== id));
        setFilteredCategories(filteredCategories.filter(category => category.id !== id));
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "  Xóa thành công!"
        });
        console.log(`Category with id ${id} deleted successfully`);
      } catch (error) {
        console.error(`There was an error deleting the category with id ${id}!`, error);
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
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px',height: '38px' }}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
            ></i>
          </div>
          <Link to={'/admin/newadmincategory'}>
            <button className="btn btn-primary"> 
              <i className="fa-solid fa-plus"></i>Thêm danh mục
            </button>
          </Link>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tên Danh Mục</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map(category => (
                  <tr key={category.id}>
                    <td style={{fontSize:'18px',fontWeight:'500'}}>{category.id}</td>
                    <td style={{fontSize:'18px',fontWeight:'500'}}>{category.name}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Link to={`/admin/updateadmincategory/${category.id}`}>
                          <i className="fa-solid fa-edit" style={{ fontSize: '20px' }}></i>
                        </Link>
                        <button 
                          onClick={() => handleDelete(category.id)} 
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
                  <td colSpan="3">Không tìm thấy dữ liệu!!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminCategory;
