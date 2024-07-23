import { Link } from 'react-router-dom';
import './blog.css'
function Blog(){
    return (
        <>
        <h2>  BÀI VIẾT </h2>
          <div style={{display:'flex',width:"80%",justifyContent:"center",alignItems:'center',marginLeft:'10%',marginRight:'10%',marginBottom:'70px' }}>
          
          <div className="row row-cols-1 row-cols-md-3 g-4 " style={{justifyContent:'center',alignItems:'center'}} >
                <div className="col" style={{width:'385px ',justifyContent:'center',alignItems:"center"}} >
                    <div className="card h-100" >
                    <img src="https://png.pngtree.com/background/20211216/original/pngtree-new-year-chinese-food-dining-gourmet-home-cooking-red-braised-fish-picture-image_1547737.jpg" className="card-img-top" alt="..." width={'100%'} height={'100%'}/>
                    <div className="card-body">
                        <h5 className="card-title ">Card title</h5>
                        
                    </div>
                    <div className="card-body">
                    <Link to={'/detailblog'} className="card-link link">Xem Thêm</Link>
                </div>
                    </div>
                </div>
 
                <div className="col" style={{width:'385px ',justifyContent:'center',alignItems:"center"}} >
                    <div className="card h-100" >
                    <img src="https://png.pngtree.com/background/20211216/original/pngtree-new-year-chinese-food-dining-gourmet-home-cooking-red-braised-fish-picture-image_1547737.jpg" className="card-img-top" alt="..." width={'100%'} height={'100%'}/>
                    <div className="card-body">
                        <h5 className="card-title ">Card title</h5>
                        
                    </div>
                    <div className="card-body">
                    <a href="#" className="card-link link">Xem Thêm</a>
                </div>
                    </div>
                </div>
 
                <div className="col" style={{width:'385px ',justifyContent:'center',alignItems:"center"}} >
                    <div className="card h-100" >
                    <img src="https://png.pngtree.com/background/20211216/original/pngtree-new-year-chinese-food-dining-gourmet-home-cooking-red-braised-fish-picture-image_1547737.jpg" className="card-img-top" alt="..." width={'100%'} height={'100%'}/>
                    <div className="card-body">
                        <h5 className="card-title ">Card title</h5>
                        
                    </div>
                    <div className="card-body">
                    <a href="#" className="card-link link">Xem Thêm</a>
                </div>
                    </div>
                </div>
 
                <div className="col" style={{width:'385px ',justifyContent:'center',alignItems:"center"}} >
                    <div className="card h-100" >
                    <img src="https://png.pngtree.com/background/20211216/original/pngtree-new-year-chinese-food-dining-gourmet-home-cooking-red-braised-fish-picture-image_1547737.jpg" className="card-img-top" alt="..." width={'100%'} height={'100%'}/>
                    <div className="card-body">
                        <h5 className="card-title ">Card title</h5>
                        
                    </div>
                    <div className="card-body">
                    <a href="#" className="card-link link">Xem Thêm</a>
                </div>
                    </div>
                </div>
 
  
          </div>
          </div>
        </>
    )
}

export default Blog;