import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./Home.css"; 

function SellProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3030/v1/products');
        const result = await res.json();
        console.log(result);
  
        if (Array.isArray(result.data)) {
          // Hàm trộn mảng ngẫu nhiên
          const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          };
          
          // Trộn mảng và lấy 10 phần tử ngẫu nhiên
          const shuffledProducts = shuffleArray(result.data).slice(0, 10);
  
          // Cập nhật state với sản phẩm đã trộn
          setProducts(shuffledProducts);
        } else {
          console.error('Unexpected data format:', result);
        }
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <>
      <div style={{ marginBottom: "60px" }}>
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
            <h6 style={{ fontSize: "20px" }}>Gợi ý</h6>
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
            <h3 style={{ fontSize: "48px" }}>Gợi ý hôm nay</h3>
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
            {Array.isArray(products) && products.map((item) => {
              console.log("Product Item:", item._id);
              const discountedPrice = item.price * 0.7;

              return (
                <div style={{ width: "18rem" }} key={item._id}>
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
                        to={`/detail-product/${item._id}`}
                        className="card-title cardtitle"
                        style={{ color: "#83bb3e" }}
                      >
                        {item.productName}
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
      </div>
    </>
  );
}

export default SellProduct;
