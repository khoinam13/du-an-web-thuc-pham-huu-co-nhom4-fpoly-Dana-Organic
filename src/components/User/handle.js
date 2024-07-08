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

