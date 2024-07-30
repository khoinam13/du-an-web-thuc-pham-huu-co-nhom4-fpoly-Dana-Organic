import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailBlog() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/blog/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Lỗi dữ liệu blog!!', error);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3000/blog'); 
        const data = await res.json();
        setRelatedBlogs(data.slice(0, 3));
      
      } catch (error) {
        console.error('Lỗi dữ liệu bài viết khác!!', error);
      }
    };

    fetchBlogData();
    fetchRelatedBlogs();
  }, [id]);

  if (!blog) return <p>Đang tải...</p>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', padding: '30px' }}>
        <div style={{ width: '1200px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px' }}>
          <h3 style={{ color: 'black', fontFamily: '"Quicksand", sans-serif', textAlign: 'center', padding: '20px', fontSize: '40px' }}>
            {blog.title}
          </h3>
          <center style={{ marginBottom: '40px' }}>
            <img style={{ justifyContent: 'center' }} src={blog.image} alt={blog.title} width={'600ox'} height={'600px'} />
          </center>
          <p style={{ fontSize: '20px', padding: '30px', fontFamily: '"Quicksand", sans-serif' }}>
            {blog.content}
          </p>
        </div>
        <div style={{ width: '400px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px' }}>
          <h3 style={{ color: 'black', fontFamily: '"Quicksand", sans-serif', textAlign: 'center', padding: '20px' }}>
            BÀI VIẾT KHÁC
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {relatedBlogs.map((item) => (
              <div className="card" key={item.id} style={{ width: '20rem', marginBottom: '30px' }}>
               <center> <img src={item.image} className="card-img-top" alt={item.title} style={{width:'200px'}}/></center>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'left', fontSize:'25px'}}>{item.title}</h5>
                </div>
                <div className="card-body">
                  <Link to={`/detailblog/${item.id}`} className="card-link link">Xem Thêm</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailBlog;
