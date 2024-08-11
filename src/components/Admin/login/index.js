import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Swal from 'sweetalert2';


function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);

    if (email.length === 0 || !email.includes('@') || password.length === 0) {
      return;
    }

    const isAdmin = await checkIfAdmin(email, password);

    if (isAdmin) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Đăng nhập admin thành công"
          });
      navigate('/admin'); 
    } else {
      navigate('/account'); 
    }
  };

  const checkIfAdmin = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(email === 'admin123@gmail.com' && password === 'admin123');
      }, 1000);
    });
  };

  return (
    <div className="containerr" id="container" style={{ marginBottom: '20px' }}>
      <div className="form-container login-container">
        <form className="form-lg form" onSubmit={handleLoginSubmit}>
          <h1>Đăng nhập</h1>
          <div className="form-control2">
            <input
              type="email"
              className="email-2 input"
              name="email"
              value={email}
              onBlur={() => setEmailTouched(true)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div>
              {emailTouched && email.length === 0 && (
                <small className="help-block">Email không được để trống</small>
              )}
              {emailTouched && email.length > 0 && !email.includes('@') && (
                <small className="help-block">Email không đúng định dạng</small>
              )}
            </div>
            <span></span>
          </div>
          <div className="form-control2">
            <input 
              type="password"
              className="password-2 input"
              name="password"
              value={password}
              onBlur={() => setPasswordTouched(true)}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
            />
            <div>
              {passwordTouched && password.length === 0 && (
                <small className="help-block">Password không được để trống</small>
              )}
            </div>
            <span></span>
          </div>

          <div className="content">
            <div className="checkbox">
              <input 
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="checkbox">Ghi nhớ tôi!</label>
            </div>
          
          </div>
          <button className="button" type="submit" value="submit" style={{ width: '300px' }}>
            Đăng nhập
          </button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1 className="title">
              Đăng nhập Admin <br />
              ngay bây giờ.
            </h1>
            <p>Đăng nhập để quản lý các thông tin.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
