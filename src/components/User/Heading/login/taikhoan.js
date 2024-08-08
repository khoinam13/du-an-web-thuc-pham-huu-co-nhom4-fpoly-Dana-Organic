import Cookies from "js-cookie";
import { putData } from "../../handle";
import { validationSchemaEditUser } from "../../untils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Account() {
  let userName = Cookies.get("username");
  const [account, setAccount] = useState([]);
  const accountObject = account[0];
  const [image, setImage] = useState('');
  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    const accountData = async () => {
      const res = await fetch(
        `http://localhost:3001/account?email=${userName}`
      );
      const data = await res.json();
      setAccount(data);
      setImage(data[0].image);
      setInitialValues({
        accountId : data[0].id,
        accountName: data[0].name,
        accountEmail: data[0].email,
        accountPassword: data[0].password,
        accountPhone: data[0].phone,
        accountDate: data[0].date,
        accountImage: data[0].image,
        accountSex: data[0].sex
      });
    };
    accountData();
  }, []);
  // cập nhật ảnh vào api khi được thay dổi
  useEffect(() => {
    if (image) {
      putData(`http://localhost:3001/account/${accountObject.id}`, {
        ...accountObject,
        image: image,
      });
    }
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      //===== chuyển đổi ảnh sang base64 =======
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    // ==========================================
  };
  const updateAccount = async (values, actions) => {
    await axios
    .get(`http://localhost:3001/account?email=${values.accountEmail}`)
    .then((res)=>{
      if(res.data.length === 1 && res.data[0].email !== initialValues.accountEmail){
        actions.setFieldError("accountEmail", "Email này đã tồn tại");
      }else{
        console.log()
        axios.put(`http://localhost:3001/account/${initialValues.accountId}`, 
          {
            id: initialValues.accountId,
            image: initialValues.image,
            sex: initialValues.accountSex,
            name: values.accountName,
            email: values.accountEmail,
            password: values.accountPassword,
            phone: values.accountPhone,
            date: values.accountDate,
          }
        )
        alert('cập nhật tài khoản thành công')
      }
    })
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "70%",
          alignItems: "center",
          margin: "0 auto",
          boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, .13)",
          marginBottom: "40px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ padding: "30px", width: "600px" }}>
          <h3> Hồ Sơ Của Tôi</h3>

          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchemaEditUser}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitializ={true}
            onSubmit={updateAccount}
          >
            {({ handleChange, values }) => (
              <Form>
                <div class="mb-3 row">
                  <label
                    class="col-sm-2 col-form-label"
                    style={{ fontWeight: "900" }}
                    htmlFor="user-name"
                  >
                    Tên
                  </label>
                  <div class="col-sm-10">
                    <Field
                      type="text"
                      class="form-control"
                      id="user-name"
                      name="accountName"
                      style={{ fontWeight: "500" }}
                      value={values.accountName}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="accountName"
                      className="error"
                      component="div"
                    />
                  </div>
                </div>

                <div class="mb-3 row">
                  <label
                    class="col-sm-2 col-form-label"
                    style={{ fontWeight: "900" }}
                    htmlFor="user-email"
                  >
                    Email
                  </label>
                  <div class="col-sm-10">
                    <Field
                      type="email"
                      id="user-email"
                      name="accountEmail"
                      style={{ fontWeight: "500" }}
                      class="form-control"
                      value={values.accountEmail}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="accountEmail"
                      className="error"
                      component="div"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    class="col-sm-2 col-form-label"
                    style={{ fontWeight: "900" }}
                    htmlFor="user-password"
                  >
                    Mật Khẩu
                  </label>
                  <div class="col-sm-10">
                    <Field
                      type="password"
                      class="form-control"
                      id="user-password"
                      name="accountPassword"
                      style={{ fontWeight: "500" }}
                      value={values.accountPassword}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="accountPassword"
                      className="error"
                      component="div"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    class="col-sm-2 col-form-label"
                    style={{ fontWeight: "900" }}
                  >
                    Ngày Sinh
                  </label>
                  <div class="col-sm-10">
                    <Field
                      type="date"
                      class="form-control"
                      name="accountDate"
                      style={{ fontWeight: "500" }}
                      value={values.accountDate}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="accountDate"
                      className="error"
                      component="div"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    class="col-sm-2 col-form-label"
                    style={{ fontWeight: "900" }}
                  >
                    Số điện thoại
                  </label>
                  <div class="col-sm-10">
                    <Field
                      type="tel"
                      class="form-control"
                      name="accountPhone"
                      style={{ fontWeight: "500" }}
                      value={values.accountPhone}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="accountPhone"
                      className="error"
                      component="div"
                    />
                  </div>
                </div>
                <center>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ fontWeight: "900" }}
                  >
                    Lưu
                  </button>
                </center>
              </Form>
            )}
          </Formik>
        </div>
        {/*  */}
        <div>
          <div
            style={{
              border: "3px solid #3c6",
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "30px",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            {image  ? (
              <img
                src={image}
                alt="Selected"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <img
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                alt="Selected"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>
          <div className="mb-3 row">
            <div className="col-sm-9" style={{ width: "100%" }}>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
