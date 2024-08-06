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
            TIN TỨC KHÁC
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {relatedBlogs.map((item) => (
              <div class=" mb-3" style={{maxWidth: "540px;"}} key={item.id}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={item.image} class="img-fluid rounded-start fluid" alt="..."  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <Link to={`/detailblog/${item.id}`} style={{textDecoration: 'none'}}><h5 class="card-title" style={{fontSize:'25px',color:'#83bb3e'}}>{item.title}</h5></Link>
                   
                  </div>
                </div>
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
