import { Link } from "react-router-dom";
function Comment() {
  return (
    <>
      <div>
        <div style={{display:'flex',gap:'10px'}}>
           
            <input type={'search'} placeholder="Search..." style={{borderRadius:'6px',border:'1px solid #777777 '}}/><i class="fa-solid fa-magnifying-glass" style={{position:'absolute',top:'92px',left:'24%'}}></i>

         
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Mã khách hàng</th>
                <th scope="col">Nội dung</th>
                <th scope="col">Ngày </th>
                <th scope="col">Đánh giá</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              
                <td>
                <div style={{ display:'flex',gap:'15px',alignItems:'center'}}>
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

export default Comment;
