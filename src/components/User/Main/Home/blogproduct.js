import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css"; 

function BlogProduct() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3030/v1/posts');
        const result = await res.json();
        
        if (Array.isArray(result.data)) {
          setBlog(result.data.slice(0, 5));
        } else {
          console.error('Unexpected data format:', result);
        }
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '60px',
    }}>
      <div style={{
        textAlign: 'center',
        color: '#777',
        marginBottom: '20px',
      }}>
        <h6 style={{ fontSize: '20px' }}>Bài viết mới</h6>
      </div>
      <div style={{
        textAlign: 'center',
        color: '#20242e',
        fontFamily: 'Quicksand',
        fontSize: '48px',
        marginBottom: '40px',
      }}>
        <h3>Bài viết</h3>
      </div>

      <div   style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        {blog.map((item) => (
          <div  key={item.id} style={{ width: '18rem',border: "1px solid rgb(235, 235, 235)",borderRadius:'5px' }}>
            <center>
              <img 
                src={item.image} 
                alt={item.title} 
                height={'247px'} 
                width={'247px'} 
              />
            </center>
            <div className="card-body">
              <center>
                <Link
                  to={`/detailblog/${item._id}`}
                  className="card-title"
                  style={{
                    
                    color: '#83bb3e',
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                  {item.title}
                </Link>
                <div style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '15px',
                  marginTop: '10px',
                  marginLeft:'30px'
                 
                }}>
                  <Link 
                    to={`/detailblog/${item._id}`} 
                    className="btn btn-secondary" 
                    style={{ 
                      backgroundColor: 'rgb(0, 83, 80)', 
                      color: 'white' ,
                      marginBottom:'20px',
                      marginTop:'20px'
                    }}>
                    Chi Tiết
                  </Link>
                </div>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogProduct;
