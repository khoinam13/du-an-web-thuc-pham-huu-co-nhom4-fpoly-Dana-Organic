import React from 'react'
import './DetailProduct.css'
import Image from './img'
import Mota from './mota'
import ProductSlide from './productslide'
export default function DetailProduct() {
  return (
   <>
    <div>
      <Image/>
    </div>
    <div>
      <Mota/>
    </div>
    <div>
      <ProductSlide/>
    </div>
   </>
  )
}
