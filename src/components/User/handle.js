import axios from "axios";
// chức năng toggle đăng kí đăng nhập
export const handleToggle = (isToggle, setIsToggle) => {
  setIsToggle(!isToggle);
};
// chức năng ẩn element
export const hiddenElement = (element) =>{
  element.style.display = 'none'
}
// đăng kí tài khoản
export const  createAccount = async (values, actions) =>{
  await axios
  .get(`http://localhost:3001/account?registerName=${values.registerName}`)
  .then((response) => {
    if (response.data.length !== 0) {
      actions.setFieldError("registerName", "Email này đã tồn tại");
    } else {
      axios.post("http://localhost:3001/account", values);
      values.registerName = "";
      values.registerPassword = "";
      document.querySelector('.successful').style.display = 'flex'
    }
  })
}
// đăng nhập tài khoản
export const loginAccount = async (values, actions) =>{
    await axios
    .get(`http://localhost:3001/account?registerName=${values.loginName}`)
    .then(response =>{
        if(response.data.length ===0){
          actions.setFieldError("loginName", "Tài khoản không đúng")
        }
        else{
          const registerPassword = response.data[0].registerPassword
          if(values.loginPassword !== registerPassword){
            actions.setFieldError("loginPassword", "Mật khẩu không đúng")
          }
          else{
            alert('dăng nhâp thành công')
          }
        }
    })
}


