import { Link } from "react-router-dom";
function Voucher() {
  return (
    <>
      <div>
      <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
           
           <div style={{ position:'relative', display: 'inline-block',}}>
     <input type="search" placeholder="Search..." style={{borderRadius: '6px', border: '1px solid #777777', paddingRight: '30px'}} />
     <i class="fa-solid fa-magnifying-glass" style={{position: 'absolute', top: '50%', right: '10px' ,transform: 'translateY(-50%)'}}></i>
   </div>
     <Link to={'/admin/newvoucher'}><button className="btn btn-link"><i class="fa-solid fa-plus"> </i></button></Link>

  
 </div>
    
       
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tên</th>
                <th scope="col">Mã sản phẩm</th>
                <th scope="col"> Giảm giá</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              
                <td>
                <div style={{ display:'flex',gap:'15px',alignItems:'center'}}>
                <Link to={'/admin/updatevoucher'}> <i class="fa-solid fa-edit" style={{fontSize:'20px'}}></i></Link>

                   <Link> <i class="fa-solid fa-trash" style={{fontSize:'20px',color:'red'}}></i> </Link>
                </div>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Voucher;
