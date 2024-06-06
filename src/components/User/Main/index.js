import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import DetailProduct from './DetailProduct';
import Introduce from './Introduce';
import News from './News';
import Product from './Product';
import Products from './Product/product';
import App from '../../../App';

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
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <Admin />,
  // },
]);

export default router;
