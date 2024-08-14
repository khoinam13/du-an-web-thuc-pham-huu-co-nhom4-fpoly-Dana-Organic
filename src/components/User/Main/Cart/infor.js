import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
function Infor() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState({});
  const totalAmount = cart.reduce((acc, product) => {
    const productCount = count[product.id] || 1;
    return acc + product.price * productCount;
  }, 0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/carts");
        const data = await res.json();
        setCart(data);

        const initialCount = data.reduce((acc, item) => {
          acc[item.id] = item.quantity || 1;
          return acc;
        }, {});
        setCount(initialCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let idUser = localStorage.getItem('idUser');

    const formData = new FormData(e.target);
    const data = {
      orderItems: cart.map((product) => ({
        productId: product.productId,
        quantity: count[product.id] || 1,
      })),
      subTotal: totalAmount,
      note: formData.get("note"),
      customerId: idUser || "66b0ff2b035efaa198944171",
      locationId: "66b0ffa7906d3966737be28e",
      paymentMethodId: formData.get("option"),
      status: false,
      paymentStatus: "chưa thanh toán",
    };
    console.log(data);
    // check bank or cod
    const option = formData.get("option");
    let res = await axios.post("http://localhost:3030/v1/orders", data);

    if (option === "bank") {
      let response = await axios.post("http://localhost:3030/v1/orders/momo", {
        orderId: res.data.data._id,
        amount: totalAmount,
        paymentMethod: "bank",
      });
      let url = response.data.data.shortLink;
      if (url) {
        window.location.href = url;

      } else {
        alert("Thanh toán thất bại")
      }

    }
    if (option === "cod") {
      navigate("/order/payment?orderId=123&paymentMethod=cod");
    }
  };
  return (
    <>
      <table className="table" style={{ width: "720px" }}>
        <thead>
          <tr className="thcol">
            <th scope="col" className="thcoll">
              Sản Phẩm
            </th>
            <th scope="col" className="thcoll">
              Tên Sản Phẩm
            </th>
            <th scope="col" className="thcoll">
              Đơn Giá
            </th>
            <th scope="col" className="thcoll">
              Số Lượng
            </th>
            <th scope="col" className="thcoll">
              Tạm tính
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            const unitPrice = product.price;
            const productCount = count[product.id] || 1;

            return (
              <tr key={product.id} className="tdcol">
                <td style={{ width: "200px" }}>
                  <img
                    src={product.image}
                    width="100px"
                    height="100px"
                    alt={product.name}
                  />
                </td>
                <td style={{ width: "200px" }} className="namecoll">
                  {product.name}
                </td>
                <td className="tdcoll">
                  {unitPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td className="tdcoll">
                  <div className="counter-container">
                    <input
                      style={{ borderRadius: "5px" }}
                      className="counter-input"
                      type="number"
                      min="1"
                      max="10"
                      value={productCount}
                    />
                  </div>
                </td>
                <td className="tdcoll">
                  {(unitPrice * productCount).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          flexWrap: "wrap",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              width: "720px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: "100%" }}>
              <label
                for="exampleInput"
                className="form-label"
                style={{
                  fontSize: "25px",
                  color: " #20242e",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                THÔNG TIN THANH TOÁN
              </label>
            </div>
            <div style={{ width: "100%" }}>
              <label
                for="exampleInput"
                className="form-label"
                style={{
                  fontSize: "17px",
                  color: " #20242e",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                Họ Tên
              </label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div style={{ width: "100%" }}>
              <label
                for="exampleInput"
                className="form-label"
                style={{
                  fontSize: "17px",
                  color: " #20242e",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                Địa Chỉ
              </label>
              <input type="text" className="form-control" name="address" />
            </div>
            <div style={{ width: "100%" }}>
              <label
                for="exampleInput"
                className="form-label"
                style={{
                  fontSize: "17px",
                  color: " #20242e",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                Số Điện Thoại
              </label>
              <input type="text" className="form-control" name="phone" />
            </div>
            <div style={{ width: "100%" }}>
              <label
                for="exampleInput"
                className="form-label"
                style={{
                  fontSize: "17px",
                  color: " #20242e",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                Ghi Chú
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Ghi chú  về đơn hàng!"
                rows="3"
                name="note"
              ></textarea>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "flex-start",
              placeSelf: "normal",
            }}
          >
            <table className="table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      fontSize: "25px",
                      color: " #20242e",
                      textTransform: "uppercase",
                      fontWeight: "700",
                    }}
                  >
                    Đơn Hàng Của Bạn
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="thcoll">
                    Sản Phẩm
                  </th>
                  <th scope="col" className="tdcolll ">
                    Tạm Tính
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col" className="thcoll">
                    Tạm Tính
                  </th>
                  <th scope="col" className="tdcolll">
                    {totalAmount} đ
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="thcoll">
                    Tổng
                  </th>
                  <td className="tdcolll">{totalAmount} đ</td>
                </tr>
                <tr>
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="option"
                        id="exampleRadios1"
                        value="bank"
                        checked
                      />
                      <label className="form-check-label" for="exampleRadios1">
                        Chuyển Khoản Ngân Hàng
                      </label>
                    </div>
                  </th>
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="option"
                        id="exampleRadios1"
                        value="cod"
                      />
                      <label className="form-check-label" for="exampleRadios1">
                        Thanh Toán Khi Nhận Hàng
                      </label>
                    </div>
                  </th>
                </tr>
              </tbody>
              <center>
                <button
                  type="submit"
                  className="btn btn"
                  style={{
                    backgroundColor: "#83bb3e",
                    width: "250px",
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#fff",
                    marginTop: "30px",
                  }}
                >
                  Đặt Hàng
                </button>
              </center>
            </table>
          </div>
        </form>
      </div>
    </>
  );
}
export default Infor;
