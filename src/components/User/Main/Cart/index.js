import React, { useState, useEffect } from 'react';
import './Cart.css';
import ProductCart from './productcart';
import Total from './totalproduct';
import { Outlet, useLocation } from 'react-router-dom';

export default function Cart() {
  const [showComponents, setShowComponents] = useState(true);
  const location = useLocation();

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
          <div style={{ width: '750px', placeSelf: 'normal' }}>
            <ProductCart />
          </div>
          <div style={{ width: '750px',marginBottom:'auto' }}>
            <Total />
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}
