function DanhGia() {
  return (
    <>
      <div
        style={{
          width: "76%",
          margin: "0 auto",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <button type="button" class="btn btn-success">
            Đánh giá
          </button>
        </div>

        <div>
          <div
            style={{
              border: "1px solid #ebebeb",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "60px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ebebeb",
                padding: "20px",
                flexWrap: "wrap",
                gap: "30px",
              }}
            >
              <div>
                <h2> Đánh giá </h2>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <h2 style={{ color: "#777777" }}>
                      5
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#dedede" }}
                      ></i>
                    </h2>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#eee",
                        border: "1px solid #eee",
                        width: "400px",
                        height: "20px",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </span>
                  <span style={{ color: " #03a0e2", fontSize: "20px" }}>
                    <b>0%</b>| 0 Đánh giá
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <h2 style={{ color: "#777777" }}>
                      4
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#dedede" }}
                      ></i>
                    </h2>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#eee",
                        border: "1px solid #eee",
                        width: "400px",
                        height: "20px",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </span>
                  <span style={{ color: " #03a0e2", fontSize: "20px" }}>
                    <b>0%</b>| 0 Đánh giá
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <h2 style={{ color: "#777777" }}>
                      3
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#dedede" }}
                      ></i>
                    </h2>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#eee",
                        border: "1px solid #eee",
                        width: "400px",
                        height: "20px",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </span>
                  <span style={{ color: " #03a0e2", fontSize: "20px" }}>
                    <b>0%</b>| 0 Đánh giá
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <h2 style={{ color: "#777777" }}>
                      2
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#dedede" }}
                      ></i>
                    </h2>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#eee",
                        border: "1px solid #eee",
                        width: "400px",
                        height: "20px",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </span>
                  <span style={{ color: " #03a0e2", fontSize: "20px" }}>
                    <b>0%</b>| 0 Đánh giá
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <h2 style={{ color: "#777777" }}>
                      1
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#dedede" }}
                      ></i>
                    </h2>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#eee",
                        border: "1px solid #eee",
                        width: "400px",
                        height: "20px",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </span>
                  <span style={{ color: " #03a0e2", fontSize: "20px" }}>
                    <b>0%</b>| 0 Đánh giá
                  </span>
                </div>
                <div>chưa có đánh giá</div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModall"
                >
                  Đánh Giá Ngay
                </button>

                <div
                  class="modal fade"
                  id="exampleModall"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content" style={{ width: "700px" }}>
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Đánh Giá
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <textarea
                          placeholder="Mời bạn chia sẽ cảm nhận về sản phẩm..."
                          style={{
                            width: "100%",
                            height: "140px",
                            borderRadius: "5px",
                          }}
                        ></textarea>
                        <div
                          style={{ marginBottom: "20px", marginTop: "20px" }}
                        >
                          <h3 style={{ color: "#77777", fontSize: "25px" }}>
                            Ảnh Thực Tế Sản Phẩm
                          </h3>
                          <input type={"file"} />
                        </div>
                        <div>
                          <h3 style={{ color: "#77777", fontSize: "25px" }}>
                            Bạn cảm thấy sản phẩm như thế nào:
                          </h3>
                          <div
                            style={{
                              display: "flex",
                              gap: "20px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ fontSize: "25px", color: "#999" }}>
                              <span>
                                {" "}
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "#dedede" }}
                                ></i>
                              </span>
                              <span> Rất Tệ</span>
                            </span>
                            <span style={{ fontSize: "25px", color: "#999" }}>
                              <span>
                                {" "}
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "#dedede" }}
                                ></i>
                              </span>
                              <span> Tệ</span>
                            </span>
                            <span style={{ fontSize: "25px", color: "#999" }}>
                              <span>
                                {" "}
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "#dedede" }}
                                ></i>
                              </span>
                              <span> Bình Thường</span>
                            </span>
                            <span style={{ fontSize: "25px", color: "#999" }}>
                              <span>
                                {" "}
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "#dedede" }}
                                ></i>
                              </span>
                              <span> Tốt</span>
                            </span>
                            <span style={{ fontSize: "25px", color: "#999" }}>
                              <span>
                                {" "}
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "#dedede" }}
                                ></i>
                              </span>
                              <span> Rất Tốt</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">
                          Đánh giá
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ebebeb",
                padding: "20px",
                flexWrap: "wrap",
              }}
            >
              <textarea
                placeholder="Mời bạn bình luận sản phẩm..."
                style={{
                  width: "100%",
                  border: "1px solid #ebebeb",
                  height: "70px",
                }}
              ></textarea>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  fontSize: "20px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                <input type={"radio"} placeholder="" /> Anh
                <input type={"radio"} placeholder="" /> Chị
                <input
                  type={"text"}
                  placeholder="Họ Tên"
                  style={{ border: "1px solid #ebebeb", borderRadius: "6px" }}
                />
                <input
                  type={"email"}
                  placeholder=" Email"
                  style={{ border: "1px solid #ebebeb", borderRadius: "6px" }}
                />
                <button type="button" class="btn btn-warning">
                  Gửi
                </button>
              </div>
              <div style={{ width: "100%" }}>Chưa có bình luận</div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default DanhGia;
