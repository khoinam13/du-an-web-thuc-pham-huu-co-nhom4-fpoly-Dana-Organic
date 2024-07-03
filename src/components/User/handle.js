import axios from "axios";
// chức năng toggle đăng kí đăng nhập
export const handleToggle = (isToggle, setIsToggle) => {
  setIsToggle(!isToggle);
};
// chức năng ẩn element
export const hiddenElement = (element) =>{
  element.style.display = 'none'
}





