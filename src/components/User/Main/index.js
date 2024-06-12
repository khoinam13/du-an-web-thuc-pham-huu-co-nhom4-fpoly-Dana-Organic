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
            path: "products",
            element: <Products />,
          }
        ]
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "detail-product",
        element: <DetailProduct />,
      },
      {
        path: "contact",
        element: <Contact />,
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
  // {
  //   path: "/admin",
  //   element: <Admin />,
  // },
]);

export default router;
