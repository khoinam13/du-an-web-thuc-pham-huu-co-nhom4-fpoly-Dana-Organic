import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './blog.css';

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

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

    const fetchRelatedBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3000/blog'); 
        const data = await res.json();
        setRelatedBlogs(data.slice(0, 3));
      } catch (error) {
        console.error('Lỗi dữ liệu bài viết khác!!', error);
      }
    };

    fetchData();
    fetchRelatedBlogs();
  }, [id]);

  if (!blog.length) return <p>Đang tải...</p>;


  return (
    <>
      {/* <h2>BÀI VIẾT</h2> */}
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px',width:'90%',margin:'0 auto' }} >
        <div className='col-3 ' style={{ marginBottom:'auto'}}>
        <div style={{ width: '400px'}}>
          <h3 style={{ color: 'white', fontFamily: '"Quicksand", sans-serif',  backgroundColor:'#00923f',borderRadius:'20px',height:'50px',padding:'10px' }}>
            TIN NỔI BẬT
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {relatedBlogs.map((item) => (
              <div class="card mb-3" style={{maxWidth: "540px;"}} key={item.id}>
               {/* bỏ className="card" */}
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
        <div className='col-7'
 >
          {blog.map((item) => (
            <div class="card mb-3" style={{maxWidth: "540px;"}} key={item.id}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={item.image} class="img-fluid rounded-start fluid" alt="..."  />
                </div>
                <div class="col-md-8">
                  <div class="card-body" style={{padding:'20px'}}>
                    <h5 class="card-title">{item.title}</h5>
                    <p  className="card-text"  style={{   display: '-webkit-box',   WebkitBoxOrient: 'vertical',   WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis', height: '50px' }}>
                      {item.content}
                    </p>
                    <p class="card-text"><small class="text-body-secondary"> <Link to={`/detailblog/${item.id}`} className="card-link link">
                                Xem Thêm
                              </Link></small></p>
                  </div>
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
