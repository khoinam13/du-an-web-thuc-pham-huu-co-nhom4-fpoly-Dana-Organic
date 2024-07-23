import React, { useEffect, useState } from 'react';
import './Product.css';
import productData from "../../../../services/product.json";
import { Button, Image } from 'antd';
import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import { doCreateCartProduct } from '../../../../redux/order/orderSlice';
const { Meta } = Card;

export default function Product() {
  const [listProducts, setlistProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const handleBuyProduct = (productID) => {
    console.log(productID);
    const product = listProducts.find((p) => p._id === productID);
    setSelectedProduct(product);
    dispatch(doCreateCartProduct({
      userId: 'testId',
      quantity: 1,
      detail: product
    }));
    console.log(product); // In ra thông tin sản phẩm đã mua
  };

  useEffect(() => {
    setlistProducts(productData.products);
    console.log(productData);
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {listProducts.map((product) => (
          <div key={product._id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={product.image ? <img src={product.image} alt={product.name} /> : <span>No image</span>}
            >
              <Meta title={product.name} description={`${product.price} VND`} />
              <Button onClick={() => { handleBuyProduct(product._id) }}>Mua </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
