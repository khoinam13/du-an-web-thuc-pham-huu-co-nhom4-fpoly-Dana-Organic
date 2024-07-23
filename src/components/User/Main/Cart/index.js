

// import React, { useEffect, useState } from 'react';
// import './Cart.scss';
// import {  Col, Divider, Input, Row, Space, Table, Tag } from 'antd';
// import { MdDiscount } from "react-icons/md";
// import { CiCircleRemove } from "react-icons/ci";
// import { useDispatch, useSelector } from 'react-redux';
// import { doDeleteCartProduct } from '../../../../redux/order/orderSlice';
// import { InputNumber } from 'antd';
// const onChange = (value) => {
//   console.log('changed',value);
// };

// // cột trong bảng
// const columns = [
//   {
//     title: 'Sản phẩm',
//     dataIndex: 'name',
//     key: 'name',
//     render: (nameArray) => (
//       <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
//         {nameArray.map((nameObj, index) => (
//           <div key={index}>
//             {Object.keys(nameObj).map((key) => (
//               <span key={key}>{nameObj[key]} </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     ),
//   },
//   {
//     title: 'Giá',
//     dataIndex: 'price',
//     key: 'price',
//   },
//   {
//     title: 'Số lượng',
//     dataIndex: 'quantity',
//     key: 'quantity',
    
   
//   },
//   {
//     title: 'Tạm tính',
//     dataIndex: 'totalPrice',
//     key: 'totalPrice',
//   },
// ];

// export default function Cart() {
//   const dispatch = useDispatch();
//   const listOrder = useSelector(state => state.order.carts);

//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     console.log(listOrder);
//     // hàm tính tổng giá tiền
//     const total = listOrder.reduce((sum, order) => sum + (order.quantity * (order.detail.price || 0)), 0);
//     setTotalPrice(total);
//   }, [listOrder]);

//   // dữ liệu trong bảng
//   const data = listOrder.map((order, index) => ({
//     key: index,
//     name: [
//       { icon: <span onClick={() => { dispatch(doDeleteCartProduct({ _id: order.detail._id })) }} style={{ fontSize: '25px' }}><CiCircleRemove /></span> },
//       { image: <img style={{ width: '75px', height: 'auto' }} src={order.detail?.image} alt={order.name} /> },
//       { name: <span style={{ color: 'green' }}>{order.detail?.name}</span> },
//     ],
//     price: <span style={{ color: 'darkOrange', fontWeight: 'bold' }}>{order.detail?.price.toLocaleString('IT', {style : 'currency', currency : 'VND'}) || 0}</span>,
//     quantity: <InputNumber defaultValue={order.quantity} onChange={onChange} /> ,
//     totalPrice: <span style={{ color: 'darkOrange', fontWeight: 'bold' }}>{(order.quantity * order.detail?.price).toLocaleString('IT', {style : 'currency', currency : 'VND'})}</span>,
//   }));

//   return (
//     <Row className='cart-container'>
//       <Col className='left' span={15}>
//         <Table columns={columns} dataSource={data} />
//       </Col>
//       <Col span={1}></Col>
//       <Col className='right' span={8}>
//         <span className='title'>Cộng giỏ hàng</span>
//         <hr />
//         <div className='tamtinh'>
//           <span style={{ color: 'gray' }}>Tạm tính</span>
//           <span style={{ color: 'orange', fontWeight: 'bold' }}>
//             {totalPrice.toLocaleString('IT', {style : 'currency', currency : 'VND'})}
//           </span>
//         </div>
//         <hr />
//         <div className='tamtinh'>
//           <span style={{ color: 'gray' }}>Tổng tiền</span>
//           <span style={{ color: 'orange', fontWeight: 'bold' }}>
//             {totalPrice.toLocaleString('IT', {style : 'currency', currency : 'VND'})}
//           </span>
//         </div>
//         <hr />
//         <button className='btn-submit'>Tiến hành thanh toán</button>
//         <div className='discounts'>
//           <span style={{ fontSize: '17px' }}><MdDiscount /></span>
//           <span style={{ fontSize: '15px', padding: '0 5px' }}>Phiếu ưu đãi</span>
//         </div>
//         <hr />
//         <Input style={{ padding: '10px', outline: 'none' }} placeholder='Mã giảm giá' />
//         <button className='btn-discounts'>Áp dụng</button>
//       </Col>
//     </Row>
//   );
// }

import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { Col, Divider, Input, Row, Space, Table, Tag } from 'antd';
import { MdDiscount } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { doDeleteCartProduct, doUpdateCartProduct } from '../../../../redux/order/orderSlice';
import { InputNumber } from 'antd';

const Cart = () => {
  const dispatch = useDispatch();
  const listOrder = useSelector(state => state.order.carts);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(listOrder);
    const total = listOrder.reduce((sum, order) => sum + order.totalPrice, 0);
    setTotalPrice(total);
  }, [listOrder]);

  const onChange = (value, _id) => {
    dispatch(doUpdateCartProduct({ _id, quantity: value }));
  };

  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (nameArray) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          {nameArray.map((nameObj, index) => (
            <div key={index}>
              {Object.keys(nameObj).map((key) => (
                <span key={key}>{nameObj[key]} </span>
              ))}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Tạm tính',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
  ];

  const data = listOrder.map((order, index) => ({
    key: index,
    name: [
      { icon: <span onClick={() => { dispatch(doDeleteCartProduct({ _id: order.detail._id })) }} style={{ fontSize: '25px' }}><CiCircleRemove /></span> },
      { image: <img style={{ width: '75px', height: 'auto' }} src={order.detail?.image} alt={order.name} /> },
      { name: <span style={{ color: 'green' }}>{order.detail?.name}</span> },
    ],
    price: <span style={{ color: 'darkOrange', fontWeight: 'bold' }}>{(order.detail?.price || 0).toLocaleString('IT', { style: 'currency', currency: 'VND' })}</span>,
    quantity: <InputNumber min={1} max={order.detail.stock} defaultValue={order.quantity} onChange={(value) => onChange(value, order.detail._id)} />,
    totalPrice: <span style={{ color: 'darkOrange', fontWeight: 'bold' }}>{(order.totalPrice || 0).toLocaleString('IT', { style: 'currency', currency: 'VND' })}</span>,
  }));

  return (
    <Row className='cart-container'>
      <Col className='left' span={15}>
        <Table columns={columns} dataSource={data} />
      </Col>
      <Col span={1}></Col>
      <Col className='right' span={8}>
        <span className='title'>Cộng giỏ hàng</span>
        <hr />
        <div className='tamtinh'>
          <span style={{ color: 'gray' }}>Tạm tính</span>
          <span style={{ color: 'orange', fontWeight: 'bold' }}>
            {totalPrice.toLocaleString('IT', { style: 'currency', currency: 'VND' })}
          </span>
        </div>
        <hr />
        <div className='tamtinh'>
          <span style={{ color: 'gray' }}>Tổng tiền</span>
          <span style={{ color: 'orange', fontWeight: 'bold' }}>
            {totalPrice.toLocaleString('IT', { style: 'currency', currency: 'VND' })}
          </span>
        </div>
        <hr />
        <button className='btn-submit'>Tiến hành thanh toán</button>
        <div className='discounts'>
          <span style={{ fontSize: '17px' }}><MdDiscount /></span>
          <span style={{ fontSize: '15px', padding: '0 5px' }}>Phiếu ưu đãi</span>
        </div>
        <hr />
        <Input style={{ padding: '10px', outline: 'none' }} placeholder='Mã giảm giá' />
        <button className='btn-discounts'>Áp dụng</button>
      </Col>
    </Row>
  );
};

export default Cart;
