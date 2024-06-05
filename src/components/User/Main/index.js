import React from "react";
import Home from "./Home";
import Cart from "./Cart";
import Contact from "./Contact";
import DetailProduct from "./DetailProduct";
import Introduce from "./Introduce";
import News from "./News";
import Product from "./Product";
import { Route, Routes } from "react-router-dom";
export default function Main() {
  return (
    <>
      {/* Định tuyến */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/news" element={<News />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}
