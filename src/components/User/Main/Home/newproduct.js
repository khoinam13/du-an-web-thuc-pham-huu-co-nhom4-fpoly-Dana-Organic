import { Link } from "react-router-dom";
import "./Home.css";

function NewProduct() {
  const products = [
    {
      id: 1,
      name: "Cà rốt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftGAQnVj13MX03LZo4yv3vFFimI_nBDBiiA&usqp=CAU",
      sameimage:[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftGAQnVj13MX03LZo4yv3vFFimI_nBDBiiA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftGAQnVj13MX03LZo4yv3vFFimI_nBDBiiA&usqp=CAU",
      ],
      price: 15990,
      description:
        "Cà rốt rất tốt cho sức khỏe",
        quantity:"10",
    },
    {
      id: 2,
      name: "Su hào",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_S9VFO3nqpsP0F6BCmNES5kgqemIPU7Ebw&usqp=CAU",
      sameimage:[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftGAQnVj13MX03LZo4yv3vFFimI_nBDBiiA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftGAQnVj13MX03LZo4yv3vFFimI_nBDBiiA&usqp=CAU",
      ],
      price: 15990,
      description:
      "su hào rất tốt cho sức khỏe",
      quantity:"10",
    },
  ];

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
              <div className="card" style={{ width: "18rem" }} key={item.id}>
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
