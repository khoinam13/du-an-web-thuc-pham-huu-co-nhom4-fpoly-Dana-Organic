import { Link } from "react-router-dom";
function AdminUser() {
  return (
    <>
      <div>
        <div style={{display:'flex',gap:'10px'}}>
           
            <input type={'search'} placeholder="Search..." style={{borderRadius:'6px',border:'1px solid #777777 '}}/><i class="fa-solid fa-magnifying-glass" style={{position:'absolute',top:'96px',left:'24%'}}></i>
            <Link to={'/admin/newuser'}> <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-plus"></i></button></Link>

         
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tên</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Email</th>
                <th scope="col">Mật Khẩu</th>
                <th scope="col">Vai Trò</th>
                
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                <div style={{ display:'flex',gap:'15px',alignItems:'center'}}>
                <Link to={'/admin/updateuser'}> <i class="fa-solid fa-edit" style={{fontSize:'20px'}}></i></Link>
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

export default AdminUser;
