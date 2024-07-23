
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Cart from './components/User/Main/Cart/index';
import Product from './components/User/Main/Product/index';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Heading from './components/User/Heading/index';  // Corrected the path
import Footer from './components/User/Foodter/index'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'; // Thêm import này
import { ConfigProvider } from 'antd';
const Layout = () => {
  return (
    <div >
      <Heading />
      <div style={{padding:'0 12%'}}>
      <Outlet />
      
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "/cart", element: <Cart /> },
      { path: "/product", element: <Product /> },
    ],
    errorElement: <>404 not found</>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      </Provider>
  </ConfigProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

