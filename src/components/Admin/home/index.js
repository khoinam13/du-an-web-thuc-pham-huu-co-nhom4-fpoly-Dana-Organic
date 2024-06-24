import './home.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Admin() {
    const [selected, setSelected] = useState('');

    const handleSelect = (item) => {
        setSelected(item);
    };

    const buttonStyle = (item) => ({
        color: selected === item ? '#fff !important' : '#777777 !important',
        backgroundColor: selected === item ? '#007bff' : 'transparent',
        fontSize: '20px',
        fontWeight: '500',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
    });

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
                <div style={{ width: "15%", marginBottom: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
                        <Link to={'/admin'} style={{ textDecoration: 'none' }}>
                            <button type="button" style={{color: '#777777 !important', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '10px', alignItems: 'center'}} className="btn list-group-item list-group-item-action">
                                <img src="https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/lg.png" width={'150px'} height={'80px'} />
                            </button>
                        </Link>
                    </div>
                    <div style={{ width: '100%' }} className="list-group parent-class">
                        <Link to='/admin/adminuser' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('adminuser') } 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('adminuser')}
                            >
                                <i className="fa-solid fa-user"></i>Tài Khoản
                            </button>
                        </Link>
                        <Link to='/admin/admincategory' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('admincategory')} 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('admincategory')}
                            >
                                <i className="fa-solid fa-bars-progress"></i>Danh Mục
                            </button>
                        </Link>
                        <Link to='/admin/adminproduct' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('adminproduct')} 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('adminproduct')}
                            >
                                <i className="fa-solid fa-inbox"></i>Sản Phẩm
                            </button>
                        </Link>
                        <Link to='/admin/adminblog' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('adminblog')} 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('adminblog')}
                            >
                                <i className="fa-solid fa-pen-to-square"></i>Bài Viết
                            </button>
                        </Link>
                        <Link to='/admin/orderproduct' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('orderproduct')} 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('orderproduct')}
                            >
                                <i className="fa-solid fa-truck-fast"></i>Đơn hàng
                            </button>
                        </Link>
                        <Link to='/admin/comment' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('comment')} 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('comment')}
                            >
                                <i className="fa-solid fa-comment"></i>Bình luận
                            </button>
                        </Link>
                        <Link to='/admin/voucher' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('voucher')} 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('voucher')}
                            >
                                <i className="fa-solid fa-ticket"></i>Mã giảm giá
                            </button>
                        </Link>
                        <Link to='/admin/thongke' style={{ textDecoration: 'none' }}>
                            <button 
                                type="button" 
                                style={buttonStyle('thongke')} 
                                className="btn list-group-item list-group-item-action"
                                onClick={() => handleSelect('thongke')}
                            >
                                <i className="fa-solid fa-chart-simple"></i>Thống kê
                            </button>
                        </Link>
                    </div>
                    <div style={{ marginTop: '128%' }} className="list-group parent-class">
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <button type="button" style={{ color: '#777777 !important', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '10px', alignItems: 'center' }} className="btn list-group-item list-group-item-action">
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>Đăng Xuất
                            </button>
                        </Link>
                    </div>
                </div>
                <div style={{ width: "85%", marginBottom: 'auto' }}>
                    <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', display: 'flex', justifyContent: 'end', height: '40px', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '30px' }}> Xin Chào!</span>
                        <i className="fa-solid fa-circle-user " style={{ fontSize: '40px', marginRight: '50px' }}></i>
                    </div>
                    <div style={{ marginTop: '20px', padding: '20px' }}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;
