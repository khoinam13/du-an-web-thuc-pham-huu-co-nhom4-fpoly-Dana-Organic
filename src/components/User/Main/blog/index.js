import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './blog.css';

function Blog() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3000/blog');
        const data = await res.json();
        setBlogs(data);
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

    fetchBlogs();
    fetchRelatedBlogs();
  }, [id]);

  if (!blogs.length) return <p>Đang tải...</p>;

 
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <>
      <div className='blog-container'>
        <div className='col-3'>
          <div style={{marginTop:'auto'}} >
            <h3 style={{ color: 'white', fontFamily: '"Quicksand", sans-serif', backgroundColor:'#00923f', borderRadius:'20px', height:'50px', padding:'10px' }}>
              TIN NỔI BẬT
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', border: '1px solid #ebebeb', borderRadius: '15px' }}>
              {relatedBlogs.map((item) => (
                <div className="mb-3" style={{ maxWidth: "540px" }} key={item.id}>
                  <div className="row g-0">
                    <div className="col-md-4" style={{ borderRadius: '6px' }}>
                      <img src={item.image} className="img-fluid rounded-start fluid" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <Link to={`/detailblog/${item.id}`} style={{ textDecoration: 'none' }}>
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
        
        <div className='col-7'>
          {currentBlogs.map((item,index) => (
            <div className="mb-3" style={{ border: '1px solid #ebebeb', borderRadius: '15px', padding: '10px' }} key={item.index}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start fluid" alt="..." style={{ borderRadius: '15px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{ padding: '20px' }}>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis', height: '50px' }}>
                      {item.content}
                    </p>
                    <p className="card-text"><small className="text-body-secondary">
                      <Link to={`/detailblog/${item.id}`} className="card-link link">Xem Thêm</Link>
                    </small></p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          
        </div>
        {/* phan trang */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <nav>
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Trước</button>
                </li>
                {[...Array(totalPages).keys()].map(page => (
                  <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Sau</button>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </>
  );
}

export default Blog;
