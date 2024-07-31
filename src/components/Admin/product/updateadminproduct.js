import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function UpdateAdminProduct() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('Trái Cây'); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setName(data.name);
          setPrice(data.price);
          setDescription(data.description);
          setQuantity(data.quantity);
          setCategory(data.category || 'Trái Cây'); 
        } else {
          console.error('Lỗi khi lấy dữ liệu sản phẩm');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleNameChange = (event) => setName(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files[0]);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('quantity', quantity);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('Sản phẩm đã được cập nhật thành công!');
        navigate('/admin/product'); 
      } else {
        const errorText = await response.text();
        console.error('Lỗi khi cập nhật sản phẩm:', errorText);
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu cập nhật:', error);
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h3>Cập nhật sản phẩm</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Tên Sản Phẩm</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Nhập tên sản phẩm..."
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Hình Ảnh</label>
          <div className="col-sm-4">
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Giá</label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Giá"
              value={price}
              onChange={handlePriceChange}
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
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Số Lượng</label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              style={{ fontWeight: '500' }}
              placeholder="Số lượng"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" style={{ fontWeight: '900' }}>Danh mục</label>
          <div className="col-sm-4">
            <select
              className="form-control"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="Trái Cây">Trái Cây</option>
              <option value="Rau">Rau</option>
              <option value="Củ">Củ</option>
            </select>
          </div>
        </div>
        <Link to="/admin/adminproduct" >  <button type="button" class="btn btn-secondary" style={{marginRight:'20px'}}>Trở về</button></Link>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ fontWeight: '900' }}
        >
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
}

export default UpdateAdminProduct;
