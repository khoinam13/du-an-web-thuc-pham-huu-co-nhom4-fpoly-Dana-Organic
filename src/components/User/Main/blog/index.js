import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/blog');
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>BÀI VIẾT</h2>
      <div
        style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '10%',
          marginRight: '10%',
          marginBottom: '70px',
        }}
      >
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {blog.map((item) => (
            <div className="col" style={{ width: '385px', justifyContent: 'center', alignItems: 'center' }} key={item.id}>
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title} width={'150px'} height={'300px'} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
                <div className="card-body">
                  <Link to={`/detailblog/${item.id}`} className="card-link link">
                    Xem Thêm
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
