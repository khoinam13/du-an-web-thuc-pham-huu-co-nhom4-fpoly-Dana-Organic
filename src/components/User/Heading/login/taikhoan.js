import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Account() {
  const [account, setAccount] = useState([]);
  useEffect(() => {
    const accountData = async () => {
      const userName = Cookies.get("username");
      const res = await fetch(
        `http://localhost:3001/account?email=${userName}`
      );
      const data = await res.json();
      setAccount(data);
    };
    accountData();
  }, []);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "70%",
          alignItems: "center",
          margin: "0 auto",
          boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, .13)",
          marginBottom: "40px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ padding: "30px", width: "600px" }}>
          <h3> Hồ Sơ Của Tôi</h3>
          {account.map((user) => (
            <>
              <div class="mb-3 row">
                <label
                  class="col-sm-2 col-form-label"
                  style={{ fontWeight: "900" }}
                  htmlFor="user-name"
                >
                  Tên
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="user-name"
                    style={{ fontWeight: "500" }}
                    value={user.name}
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label
                  class="col-sm-2 col-form-label"
                  style={{ fontWeight: "900" }}
                  htmlFor="user-email"
                >
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    id="user-email"
                    style={{ fontWeight: "500" }}
                    class="form-control"
                    value={user.email}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label
                  class="col-sm-2 col-form-label"
                  style={{ fontWeight: "900" }}
                  htmlFor="user-password"
                >
                  Mật Khẩu
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="user-password"
                    style={{ fontWeight: "500" }}
                    value={user.password}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label
                  class="col-sm-2 col-form-label"
                  style={{ fontWeight: "900" }}
                >
                  Ngày Sinh
                </label>
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    style={{ fontWeight: "500" }}
                    value={user.date}
                  />
                </div>
              </div>
            </>
          ))}

          <center>
            <button
              type="button"
              class="btn btn-primary"
              style={{ fontWeight: "900" }}
            >
              Lưu
            </button>
          </center>
        </div>
        {/*  */}
        <div>
          <div
            style={{
              border: "3px solid #3c6",
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "30px",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            {image ? (
              <img
                src={image}
                alt="Selected"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <img
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                alt="Selected"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>
          <div className="mb-3 row">
            <div className="col-sm-9" style={{ width: "100%" }}>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
                placeholder="Chọn Ảnh"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
