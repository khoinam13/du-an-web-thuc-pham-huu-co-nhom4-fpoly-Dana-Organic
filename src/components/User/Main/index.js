import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import DetailProduct from './DetailProduct';
import Introduce from './Introduce';
import News from './News';
import Product from './Product';
import Products from './Product/product';
import Total from './Cart/totalproduct';
import App from '../../../App';
import Infor from './Cart/infor';
import Admin from '../../Admin/home';
import AdminProduct from '../../Admin/product';
import NewAdminProduct from '../../Admin/product/newadminproduct';
import UpdateAdminProduct from '../../Admin/product/updateadminproduct';
import AdminCategory from '../../Admin/category';
import NewAdminCategory from '../../Admin/category/newadmincategory';
import UpdateAdminCategory from '../../Admin/category/updatecategory';
import AdminUser from '../../Admin/User';
import NewAdminUser from '../../Admin/User/newuser';
import UpdateAdminUser from '../../Admin/User/updateuser';
import AdminBlog from '../../Admin/blog';
import NewAdminBlog from '../../Admin/blog/newblog';
import UpdateAdminBlog from '../../Admin/blog/updateblog';
import OrderProduct from '../../Admin/order';
import UpdateOrderProduct from '../../Admin/order/updateorder';
import Comment from '../../Admin/comment';
import Voucher from '../../Admin/voucher';
import UpdateVoucher from '../../Admin/voucher/updatevoucher';
import NewVoucher from '../../Admin/voucher/newvoucher';
import ThongKe from '../../Admin/thongke';
import Blog from './blog';
import DetailBlog from './blog/detailblog';
import Account from '../Heading/login/taikhoan';
import Order from '../Heading/login/order';
import PostBlog from '../Heading/login/postblog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
        children: [
          {
            path: "products/:categoryId",
            element: <Products />,
          },
          {
            path: "products",
            element: <Products searchQuery="" />,
          }
        ]
      },
      {
        path: "news",
        element: <News />,
      }, 
       {
        path: "blog",
        element: <Blog />,
      },
       {
        path: "detailblog/:id",
        element: <DetailBlog />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "detail-product/:id",
        element: <DetailProduct />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "acount",
        element: <Account />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "post",
        element: <PostBlog />,
      },
      {
        path: "cart",
        element: <Cart />,
        children: [
          {
            path: "infor",
            element: <Infor />,
          }
        ]
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "adminproduct",
        element: <AdminProduct />,
      },
      {
        path: "newadminproduct",
        element: <NewAdminProduct />,

      },
      {
        path: "updateadminproduct",
        element: <UpdateAdminProduct />,

      },
      {
        path: "admincategory",
        element: <AdminCategory />,

      },
      {
        path: "newadmincategory",
        element: <NewAdminCategory />,

      },
      {
        path: "updateadmincategory",
        element: <UpdateAdminCategory />,

      },
      {
        path: "adminuser",
        element: <AdminUser />,

      },
      {
        path: "newuser",
        element: <NewAdminUser />,

      },
      {
        path: "updateuser",
        element: <UpdateAdminUser />,

      },
      {
        path: "adminblog",
        element: <AdminBlog />,

      },
      {
        path: "newblog",
        element: <NewAdminBlog />,

      },
      {
        path: "updateblog",
        element: <UpdateAdminBlog />,

      },
      {
        path: "orderproduct",
        element: <OrderProduct />,

      },
      {
        path: "updateorderproduct",
        element: <UpdateOrderProduct />,

      },
      {
        path: "comment",
        element: <Comment />,

      },
      {
        path: "voucher",
        element: <Voucher />,

      },
      {
        path: "newvoucher",
        element: <NewVoucher />,

      },
      
      {
        path: "thongke",
        element: <ThongKe/>,

      },
        
      
    ]
  },
  
]);

export default router;
