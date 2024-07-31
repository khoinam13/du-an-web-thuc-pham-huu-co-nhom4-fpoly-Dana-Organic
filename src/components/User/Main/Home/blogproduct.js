import { Link } from "react-router-dom";
import {useState,useEffect} from "react"
function BlogProduct(){
    const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/blog');
        const data = await res.json();
        setBlog(data.slice(0, 4));
      } catch (error) {
        console.error('Lỗi dữ liệu!!', error);
      }
    };

    fetchData();
  }, []); 
    return(
       <>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px',marginBottom:'60px'}} >
                        
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#777'}}>
                            <h6 style={{fontSize:'20px'}}> Bài viết mới</h6>
                        </div>
                        <div style={{ width:'100%',margin:'0 auto',textAlign:'center',color:'#20242e',fontFamily:'Quicksand',fontSize:'48px'}}>
                            <h3 style={{fontSize:'48px'}}>    Bài viết </h3>
                        </div>
                    
                        
                        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px',width:'89%'}}>
                        {blog.map((item) => (
                            <div key={item.id} className="card" style={{ width: '20rem' }}>
                                <img src={item.image} className="card-img-top" alt="..." height={'270px'} />
                                <div className="card-body">
                                
                                 
                                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '15px' }}>
                                    <Link
                                    to={`/detailblog/${item.id}`} 
                                    className="card-title"
                                    style={{ color: 'black', fontSize: '20px',  textDecoration: 'none', fontFamily: '"Quicksand", sans-serif',fontWeight: 600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}} >
                                    {item.title}
                                    </Link>
                                    </div>
                                    <Link to={`/detailblog/${item.id}`} className="btn btn-secondary" style={{backgroundColor:'rgb(0, 83, 80)'}}>Chi Tiết</Link> 
                                </div>
                            </div>
                            ))}
                           
                       
                        </div>
                         
                    
            </div>
       </>
    )
}

export default BlogProduct;