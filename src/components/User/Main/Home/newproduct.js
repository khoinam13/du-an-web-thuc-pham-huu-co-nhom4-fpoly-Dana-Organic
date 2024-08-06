import { Link,  } from "react-router-dom";
import "./Home.css";
// import products from "../../../../../db.json"
import { useState,useEffect } from 'react';


function NewProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "60px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "0 auto",
            textAlign: "center",
            color: "#777",
          }}
        >
          <h6 style={{ fontSize: "20px" }}> Sản phẩm vừa về cửa hàng</h6>
        </div>
        <div
          style={{
            width: "100%",
            margin: "0 auto",
            textAlign: "center",
            color: "#20242e",
            fontFamily: "Quicksand",
            fontSize: "48px",
          }}
        >
          <h3 style={{ fontSize: "48px" }}> Sản phẩm mới</h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "89%",
          }}
        >
          {products.map((item) => {
            const discountedPrice = item.price * 0.7;

            return (
              <div  style={{ width: "18rem" }} key={item.id}>
              {/* bỏ className="card" */}
                <center>
                  <img
                    src={item.image}
                    alt={item.name}
                    height={"247px"}
                    width={"247px"} 
                   
                  />
                </center>
                <div className="card-body">
                  <center>
                    <Link
                      to={`/detail-product/${item.id}`}
                      className="card-title cardtitle"
                      style={{ color: "#83bb3e" }}
                    >
                      {item.name}
                    </Link>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <p>
                        <del className="carddel">{item.price.toLocaleString()}đ</del>
                      </p>
                      <p className="carddel" style={{ fontWeight: "bold" }}>
                        {discountedPrice.toLocaleString()}đ
                      </p>
                    </div>
                  </center>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewProduct;
