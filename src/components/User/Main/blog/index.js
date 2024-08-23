import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './blog.css';

function Blog() {
  const { _id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`http://localhost:3030/v1/posts`);
        const data = await res.json();
        console.log("Fetched data:", data);
        setBlogs(data.data || []);
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3030/v1/posts');
        const data = await res.json();

        if (Array.isArray(data.data)) {
          setRelatedBlogs(data.data.slice(0, 4));
        } else {
          console.error('Unexpected data format for related blogs:', data);
        }
      } catch (error) {
        console.error('Lỗi dữ liệu bài viết khác!!', error);
      }
    };

    fetchBlogs();
    fetchRelatedBlogs();
  }, [_id]);

  if (!blogs.length) return <p>Đang tải...</p>;

  // Calculate current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  return (
    <div className='blog-container'>
      <div className='col-3'>
        <h3 style={{
          color: 'white',
          fontFamily: '"Quicksand", sans-serif',
          backgroundColor: '#00923f',
          borderRadius: '20px',
          height: '50px',
          padding: '10px',
          textAlign: 'center'
        }}>
          TIN NỔI BẬT
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          border: '1px solid #ebebeb',
          borderRadius: '15px',
          marginTop: '20px',
          padding: '10px'
        }}>
          {relatedBlogs.map((item) => (
            <div className="mb-3" style={{ maxWidth: "540px" }} key={item.id}>
              <div className="row g-0">
                <div className="col-md-4" style={{ borderRadius: '6px' }}>
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

      <div className='col-7'>
        {currentItems.map((item) => (
          <div className="mb-3" style={{
            border: '1px solid #ebebeb',
            borderRadius: '15px',
            padding: '10px'
          }} key={item.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt={item.title} style={{ borderRadius: '15px' }} />
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ padding: '20px' }}>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text" style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: '50px'
                  }}>
                    {item.content}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to={`/detailblog/${item._id}`} className="card-link" style={{textDecoration:'none',color:'#3c6',fontSize:'18px'}}>Xem Thêm</Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Phân trang */}
        <div className='col-10' style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          <nav>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Trước</button>
              </li>
              {[...Array(totalPages).keys()].map(page => (
                <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(page + 1)}>{page + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Sau</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Blog;
