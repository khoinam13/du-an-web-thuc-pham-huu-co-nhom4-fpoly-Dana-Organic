import React, { useState, useEffect } from 'react';
import './Cart.css';
import ProductCart from './productcart';
import Total from './totalproduct';
import { Outlet, useLocation } from 'react-router-dom';

export default function Cart() {
  const [showComponents, setShowComponents] = useState(true);
  const location = useLocation();

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/carts');
        const data = await res.json();
        setCart(data);

        const initialCount = data.reduce((acc, item) => {
          acc[item.id] = item.quantity || 1; 
          return acc;
        }, {});
        setCount(initialCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const updateProductQuantity = async (id, newQuantity) => {
    try {
      const res = await fetch(`http://localhost:3000/carts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
      });

      if (!res.ok) {
        throw new Error('Failed to update the product quantity');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleIncrease = (id) => {
    setCount(prevCount => {
      const newCount = { ...prevCount, [id]: (prevCount[id] || 1) + 1 };
      updateProductQuantity(id, newCount[id]);
      return newCount;
    });
  };

  const handleDecrease = (id) => {
    setCount(prevCount => {
      const newCount = { ...prevCount, [id]: Math.max(1, (prevCount[id] || 1) - 1) };
      updateProductQuantity(id, newCount[id]);
      return newCount;
    });
  };

  const handleChange = (event, id) => {
    const value = Number(event.target.value);
    setCount(prevCount => {
      const newCount = { ...prevCount, [id]: value };
      updateProductQuantity(id, value);
      return newCount;
    });
  };

  const handleRemove = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/carts/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setCart(prevCart => prevCart.filter(product => product.id !== id));
        setCount(prevCount => {
          const newCount = { ...prevCount };
          delete newCount[id];
          return newCount;
        });
      } else {
        console.error('Failed to delete the product from the database');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const totalAmount = cart.reduce((acc, product) => {
    const productCount = count[product.id] || 1;
    return acc + product.price * productCount;
  }, 0);

  useEffect(() => {
    if (location.pathname !== '/cart') {
      setShowComponents(false);
    } else {
      setShowComponents(true);
    }
  }, [location]);

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: '0 auto',
        width: '90%',
        marginBottom: '20px',
      }}
    >
      {showComponents && (
        <>
          <div style={{ width: '750px', placeSelf: 'normal', marginBottom:'150px' }}>
            <ProductCart 
              cart={cart}
              count={count}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          </div>
          <div style={{ width: '750px', marginBottom:'auto' }}>
            <Total totalAmount={totalAmount} />
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}
