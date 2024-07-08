import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Image() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  const products = [
    {
      id: 1,
      name: "Cà rốt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftGAQnVj13MX03LZo4yv3vFFimI_nBDBiiA&usqp=CAU",
      sameimage:[
        "https://kenh14cdn.com/203336854389633024/2023/7/30/photo-3-16906864058292115155894.png",
        "https://thanhnien.mediacdn.vn/Uploaded/ngocthanh/2022_03_03/ca-rot-2275.jpg",
      ],
      price: 15990,
      description: "Cà rốt rất tốt cho sức khỏe",
      quantity: 10,
    },
    {
      id: 2,
      name: "Su hào",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_S9VFO3nqpsP0F6BCmNES5kgqemIPU7Ebw&usqp=CAU",
      sameimage:[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTho0azp-PzVWcUgvoxmThzBWuUKjL8lgyPcA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgKuw56q0562wYFIIn0xlRx9DPMfSpEnPgQ&usqp=CAU",
      ],
      price: 15990,
      description: "Su hào rất tốt cho sức khỏe",
      quantity: 10,
    },
  ];

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(id));
    setProduct(product);
    if (product) {
      setSelectedImage(product.image);
    }
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

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountedPrice = product.price * 0.7;

  return (
    <>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <div style={{ width: "720px", border: "1px solid #ebebeb" }}>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={selectedImage}
                alt={product.name}
                style={{ width: "500px", height: "500px" }}
              />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "20px",
            }}
          >
            {product.sameimage.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                width={"130px"}
                height={"130px"}
                style={{ border: "1px solid #ebebeb", cursor: "pointer" }}
                onClick={() => setSelectedImage(img)}
              />
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
            <p
              className="carddel"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
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
                <span
                  style={{
                    backgroundColor: "#00923f",
                    color: "#fff",
                    marginLeft: "5px",
                    padding: "5px",
                  }}
                >
                  <i className="fa-solid fa-check"></i> Còn hàng
                </span>
              ) : (
                <span
                  style={{
                    backgroundColor: "#ff0000",
                    color: "#fff",
                    marginLeft: "5px",
                    padding: "5px",
                  }}
                >
                  <i className="fa-solid fa-times"></i> Hết hàng
                </span>
              )}
            </p>
            <div className="counter-container">
              <button
                type="button"
                onClick={handleDecrease}
                className="counter-button"
                disabled={product.quantity === 0}
              >
                -
              </button>
              <input
                className="counter-input"
                type="number"
                min="1"
                value={count}
                onChange={handleChange}
                disabled={product.quantity === 0}
              />
              <button
                type="button"
                onClick={handleIncrease}
                className="counter-button"
                disabled={product.quantity === 0}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn"
                style={{
                  backgroundColor: "#83bb3e",
                  width: "250px",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#fff",
                  marginLeft: "30px",
                }}
                disabled={product.quantity === 0}
              >
                Thêm Vào Giỏ Hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl d-flex justify-content-center align-items-center">
          <div className="modal-content" style={{ width: "900px", maxHeight: "80vh" }}>
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">
              <img
                src={selectedImage}
                alt={product.name}
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
