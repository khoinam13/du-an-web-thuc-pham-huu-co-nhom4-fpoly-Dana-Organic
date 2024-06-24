import * as yup from "yup";
 
export const validattionSchema = yup.object().shape({
    registerName:
    yup
      .string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
    registerPassword:
    yup
    .string().required('Mật khẩu không được để trống')
    .matches( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/ , 'Mật khẩu không phù hợp (Từ 8-20 kí tự, gồm ít nhất 1 kí tự hoa và thường, 1 kí tự đặc biệt(?!.*))'),
});