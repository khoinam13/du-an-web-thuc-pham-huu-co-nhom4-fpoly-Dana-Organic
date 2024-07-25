import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Image() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
          setSelectedImage(data.image);
        } else {
          console.error('Sản phẩm không tìm thấy!');
        }
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, [id]);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const handleChange = (event) => {
    const value = Number(event.target.value);
    setCount(value);
  };

  const handleAddToCart = async () => {
    if (product && product.quantity > 0) {
      const cartItem = {
        productId: product.id,
        quantity: count,
        image: selectedImage,
        price: product.price,
        name: product.name,
      };

      try {
        const res = await fetch('http://localhost:3001/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItem),
        });

        if (res.ok) {
          console.log('Thêm vào giỏ hàng thành công!');
          navigate('/cart');
        } else {
          console.error('Không thể thêm vào giỏ hàng');
        }
      } catch (error) {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
      }
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountedPrice = product.price * 0.7;

  return (
    <>
      <div className="row d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
        <div style={{ width: "720px", border: "1px solid #ebebeb" }}>
          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={selectedImage} alt={product.name} style={{ width: "500px", height: "500px" }} />
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", padding: "20px" }}>
            {product.sameimage.map((img, index) => (
              <img key={index} src={img}  alt={product.name} width={"130px"} height={"130px"} style={{ border: "1px solid #ebebeb", cursor: "pointer" }} onClick={() => setSelectedImage(img)} />
            ))}
          </div>
        </div>
        <div style={{ width: "720px", marginBottom: "auto" }}>
          <h2 style={{ fontWeight: "600" }}>{product.name}</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <p>
              <del className="carddel" style={{ fontSize: "25px" }}>
                {product.price.toLocaleString()}đ
              </del>
            </p>
            <p className="carddel" style={{ fontWeight: "bold", fontSize: "25px" }}>
              {discountedPrice.toLocaleString()}đ
            </p>
          </div>
          <div>
            <p style={{ color: "#777", lineHeight: "25.6px", fontSize: "20px" }}>
              {product.description}
            </p>
          </div>
          <div>
            <p style={{ color: "#7a9c59", fontSize: "19px", fontWeight: "600" }}>
              Tình trạng:
              {product.quantity > 0 ? (
                <span style={{ backgroundColor: "#00923f", color: "#fff", marginLeft: "5px", padding: "5px" }}>
                  <i className="fa-solid fa-check"></i> Còn hàng
                </span>
              ) : (
                <span style={{ backgroundColor: "#ff0000", color: "#fff", marginLeft: "5px", padding: "5px" }}>
                  <i className="fa-solid fa-times"></i> Hết hàng
                </span>
              )}
            </p>
            <div className="counter-container">
              <button type="button" onClick={handleDecrease} className="counter-button" disabled={product.quantity === 0} > - </button>
              <input className="counter-input" type="number" min="1" value={count} onChange={handleChange} disabled={product.quantity === 0}/>
              <button type="button" onClick={handleIncrease} className="counter-button" disabled={product.quantity === 0} >
                +
              </button>
              <button
                type="button"
                className="btn btn"
                style={{ backgroundColor: "#83bb3e", width: "250px", fontSize: "20px", fontWeight: "500", color: "#fff", marginLeft: "30px",}} 
                onClick={handleAddToCart}
                disabled={product.quantity === 0} >
                Thêm Vào Giỏ Hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl d-flex justify-content-center align-items-center">
          <div className="modal-content" style={{ width: "900px", maxHeight: "80vh" }}>
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">
              <img src={selectedImage} alt={product.name} style={{ width: "500px", height: "500px" }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '76%', margin: '0 auto', marginBottom: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <button type="button" className="btn btn-success">Mô Tả</button>
        </div>
        <div>
          <div style={{ border: '1px solid #ebebeb', padding: '20px' }}>
            <p style={{ color:'#777',lineHeight:'25.6px',fontSize:'20px'}}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
