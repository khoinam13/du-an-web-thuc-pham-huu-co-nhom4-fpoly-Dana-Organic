import React from "react";
import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
function HomeMain() {
  const data = {
    labels: ["Tài khoản", "Danh mục", "Sản phẩm", "Bài viết", "Đơn hàng"],
    datasets: [
      {
        label: "Số lượng",
        data: [10, 5, 30, 8, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h1>Trang chủ</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "",
          gap: "20px",
          flexWrap: "wrap",
          marginLeft: "30px",
        }}
      >
        <div
          style={{
            width: "23%",
            fontSize: "100px",
            display: "flex",
            gap: "50px",
            color: "#ffffff",
            backgroundColor: "#007bff",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <i class="fa-solid fa-users"></i>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h5> Tài Khoản</h5>
            <h5> 10</h5>
          </div>
        </div>
        <div
          style={{
            width: "23%",
            fontSize: "100px",
            display: "flex",
            gap: "50px",
            color: "#ffffff",
            backgroundColor: "#6c757d",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <i class="fa-solid fa-bars-progress"></i>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h5> Danh mục</h5>
            <h5> 5</h5>
          </div>
        </div>
        <div
          style={{
            width: "23%",
            fontSize: "100px",
            display: "flex",
            gap: "50px",
            color: "#ffffff",
            backgroundColor: "#28a745",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <i className="fa-solid fa-inbox"></i>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h5> Sản phẩm</h5>
            <h5> 30</h5>
          </div>
        </div>
        <div
          style={{
            width: "23%",
            fontSize: "100px",
            display: "flex",
            gap: "50px",
            color: "#ffffff",
            backgroundColor: "#dc3545",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h5>Bài viết</h5>
            <h5> 8</h5>
          </div>
        </div>
        <div
          style={{
            width: "23%",
            fontSize: "100px",
            display: "flex",
            gap: "50px",
            color: "#ffffff",
            backgroundColor: "#ffc107",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <i className="fa-solid fa-truck-fast"></i>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h5> Đơn hàng</h5>
            <h5> 5</h5>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "800px",
          height: "800px",
          margin: "0 auto",
          marginTop: "100px",
        }}
      >
        <Pie data={data} />
      </div>
    </>
  );
}

export default HomeMain;
