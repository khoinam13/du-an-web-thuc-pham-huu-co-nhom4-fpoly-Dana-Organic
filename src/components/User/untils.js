import * as yup from "yup";

export const validattionSchemaRegister = yup.object().shape({
  registerName: yup
    .string()
    .required("Họ tên không được để trống")
    .matches(/^[A-Za-z\s]+$/, "Họ chỉ có thể chứa chữ cái")
    .min(4, "Họ tên chứa ít nhất 4 kí tự"),
  registerEmail: yup
    .string()
    .required("Email không được để trống")
    .email("Email không hợp lệ"),
  registerAddress: yup
    .string()
    .required("Địa chỉ là bắt buộc")
    .min(10, "Địa chỉ phải có ít nhất 10 ký tự")
    ,
  registerPhone: yup
    .string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^[0-9]{10,15}$/, "Số điện thoại phải chứa từ 10 đến 15 ký tự số")
    ,
  registerPassword: yup
    .string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/,
      "Mật khẩu không phù hợp (Từ 8-20 kí tự, gồm ít nhất 1 kí tự hoa và thường, 1 kí tự đặc biệt(?!.*))"
    ),
  registerPasswordRetype: yup
    .string()
    .required("Nhập lại mật khẩu là bắt buộc")
    .oneOf([yup.ref("registerPassword"), null], "Mật khẩu nhập lại không khớp")
    ,
});
export const validationSchemaLogin = yup.object().shape({
  loginName: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  loginPassword: yup
    .string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/,
      "Mật khẩu không phù hợp (Từ 8-20 kí tự, gồm ít nhất 1 kí tự hoa và thường, 1 kí tự đặc biệt(?!.*))"
    ),
});
