import React from 'react'
import DanhGia from './danhgia'
import './DetailProduct.css'
import Image from './img'
import ProductSlide from './productslide'
export default function DetailProduct() {
  const productId = 1; 
  return (
   <>
    <div>
      <Image/>
    </div>
   
    <div>
      <DanhGia/>
    </div>
    <div>
    <ProductSlide productId={productId} />
    </div>
   </>
  )
}
