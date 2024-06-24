import { Link } from "react-router-dom";
import "./Home.css";

function NewProduct() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
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
          <div className="card" style={{ width: "18rem" }}>
            <center>
              <img
                src="https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg"
                height={"247px"}
                width={"247px"}
              />
            </center>
            <div className="card-body">
              <center>
                <Link
                  to={"/detail-product"}
                  className="card-title cardtitle"
                  style={{ color: "#83bb3e" }}
                >
                  Hoa qủa
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
                    {" "}
                    <del className="carddel">400,000đ</del>
                  </p>
                  <p className="carddel" style={{ fontWeight: "bold" }}>
                    300,000đ
                  </p>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewProduct;
