import './Cart.css'
function Infor() {
    return (
            <>
                <div style={{ display:'flex',gap:'20px',justifyContent:'center',alignItems:'center',width:'90%',flexWrap:'wrap'}}> 
                   
                    <div style={{ display:'flex',gap:'20px',justifyContent:'center',alignItems:'center',width:'720px',flexWrap:'wrap'}}>
                                
                                <div style={{width:'100%'}} >
                                    <label for="exampleInput" class="form-label" style={{ fontSize:'25px',color:' #20242e',textTransform:"uppercase",fontWeight:'700'}}>THÔNG TIN THANH TOÁN</label>
                                </div>
                                <div style={{width:'100%'}}>
                                    <label for="exampleInput" class="form-label" style={{ fontSize:'17px',color:' #20242e',textTransform:"uppercase",fontWeight:'700'}}>Họ Tên</label>
                                    <input type="text" class="form-control"  />
                                </div>
                                <div style={{width:'100%'}}>
                                    <label for="exampleInput" class="form-label" style={{ fontSize:'17px',color:' #20242e',textTransform:"uppercase",fontWeight:'700'}}>Địa Chỉ</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div style={{width:'100%'}}>
                                    <label for="exampleInput" class="form-label" style={{ fontSize:'17px',color:' #20242e',textTransform:"uppercase",fontWeight:'700'}}>Số Điện Thoại</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div style={{width:'100%'}}>
                                    <label for="exampleInput" class="form-label" style={{ fontSize:'17px',color:' #20242e',textTransform:"uppercase",fontWeight:'700'}}>Ghi Chú</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Ghi chú  về đơn hàng!" rows="3" ></textarea>
                                </div>
                                
                                
                    </div>
                    <div style={{ display:'flex',gap:'20px',justifyContent:'center',alignItems:'flex-start',placeSelf:'normal'}}>
                    
                    <table class="table">
                        <thead>

                            <tr>
                            <th scope="col" style={{ fontSize:'25px',color:' #20242e',textTransform:"uppercase",fontWeight:'700'}}>Đơn Hàng Của Bạn</th>
                          
                            
                            </tr>
                            <tr>
                            <th scope="col" className='thcoll'>Sản Phẩm</th>
                            <th scope="col" className='tdcolll '>Tạm Tính</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                            <th scope="col" className='thcoll'>Tạm Tính</th>
                            <td scope="col" className='tdcolll'>300.000đ</td>
                        
                            </tr>
                            <tr>
                            <th scope="row" className='thcoll'>Tổng</th>
                            <td className='tdcolll'>300.000đ</td>
                            
                            </tr>
                            <tr>
                          

                                <th>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                <label class="form-check-label" for="exampleRadios1">
                                   Chuyển Khoản Ngân Hàng
                                </label>
                                </div>
                                </th>
                                <th>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label class="form-check-label" for="exampleRadios2">
                                    Thanh Toán Khi Nhận Hàng
                                </label>
                                </div>
                                </th>
                                
                            </tr>
                           
                         
                        </tbody>
                        <center>
                        <button type="button" class="btn btn" style={{backgroundColor:'#83bb3e',width:'250px',fontSize:'20px',fontWeight:'500',color:'#fff',marginTop:'30px'}}>Đặt Hàng</button>
                        </center>
                        </table>
                        

                    </div>
                </div>
            </>
    )}
    export default Infor;