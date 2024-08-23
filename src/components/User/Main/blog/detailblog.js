import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailBlog() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { _id } = useParams(); 

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(`http://localhost:3030/v1/posts/${_id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Lỗi dữ liệu blog!!', error);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3030/v1/posts'); 
        const data = await res.json();
        console.log('Related blogs data:', data); // Log dữ liệu để kiểm tra

        // Kiểm tra nếu data.data tồn tại và là một mảng
        if (Array.isArray(data.data)) {
          setRelatedBlogs(data.data.slice(0, 3)); // Truy cập mảng data
        } else {
          console.error('Dữ liệu không phải là mảng:', data.data);
        }
      } catch (error) {
        console.error('Lỗi dữ liệu bài viết khác!!', error);
      }
    };

    fetchBlogData();
    fetchRelatedBlogs();
  }, [_id]);

  if (!blog) return <p>Đang tải...</p>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', padding: '30px' }}>
        <div style={{ width: '1200px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px' }}>
          <h3 style={{ color: 'black', fontFamily: '"Quicksand", sans-serif', textAlign: 'center', padding: '20px', fontSize: '40px' }}>
            {blog.data.title} {/* Kiểm tra lại cấu trúc này */}
          </h3>
          <center style={{ marginBottom: '40px' }}>
            <img style={{ justifyContent: 'center' }} src={blog.data.image} alt={blog.title} width={'600px'} height={'600px'} />
          </center>
          <p style={{ fontSize: '20px', padding: '30px', fontFamily: '"Quicksand", sans-serif' }}>
            {blog.data.content} {/* Kiểm tra lại cấu trúc này */}
          </p>
        </div>
        <div style={{ width: '400px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px' }}>
          <h3 style={{ color: 'black', fontFamily: '"Quicksand", sans-serif', textAlign: 'center', padding: '20px' }}>
            TIN TỨC KHÁC
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {relatedBlogs.map((item) => (
              <div className="mb-3" style={{ maxWidth: "540px" }} key={item.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <Link to={`/detailblog/${item._id}`} style={{ textDecoration: 'none' }}>
                        <h5 className="card-title" style={{ fontSize: '25px', color: '#83bb3e' }}>{item.title}</h5>
                      </Link>
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
