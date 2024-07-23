// import { createSlice } from '@reduxjs/toolkit';
// import { message } from 'antd';

// const initialState = {
//   carts: []
// }

// export const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {
//     doCreateCartProduct: (state, action) => {
//       const { userId, quantity, detail } = action.payload;
//       let carts = state.carts;

//       // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
//       const existingProductIndex = carts.findIndex(cartItem => cartItem.detail._id === detail._id && cartItem.userId === userId);

//       if (existingProductIndex > -1) {
//         // Nếu sản phẩm đã tồn tại, cộng dồn số lượng
//         carts[existingProductIndex].quantity += quantity;

//         // Kiểm tra xem số lượng mới có vượt quá số lượng tối đa không
//         if (carts[existingProductIndex].quantity > carts[existingProductIndex].detail.quantity) {
//           carts[existingProductIndex].quantity = carts[existingProductIndex].detail.quantity;
//           message.info('Số lượng sản phẩm đã đạt tối đa');
//         }
//       } else {
//         // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
//         carts.push({ userId, quantity, detail });
//       }

//       state.carts = carts;
//     },

//     // Các reducer khác
//     doDeleteCartProduct: (state, action) => {
//       state.carts = state.carts.filter(item => item.detail._id !== action.payload._id);
//       message.success('Xoá sản phẩm khỏi giỏ hàng thành công');
//     },
//     doResetCartProduct: (state, action) => {
//       state.carts = [];
//     }
//   },
// });

// export const { doCreateCartProduct, doDeleteCartProduct, doUpdateCartProduct, doResetCartProduct } = orderSlice.actions;

// export default orderSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

const initialState = {
  carts: []
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // hàm tạo sản phẩm trong giỏ hàng
    doCreateCartProduct: (state, action) => {
      const { userId, quantity, detail } = action.payload;
      let carts = state.carts;

      const existingProductIndex = carts.findIndex(cartItem => cartItem.detail._id === detail._id && cartItem.userId === userId);

      if (existingProductIndex > -1) {
        carts[existingProductIndex].quantity += quantity;
        // hàm xử lí ( nếu sản phẩm mua quá số lượng sản phẩm hiện có)
        if (carts[existingProductIndex].quantity > carts[existingProductIndex].detail.quantity) {
          carts[existingProductIndex].quantity = carts[existingProductIndex].detail.quantity;
          message.info('Số lượng sản phẩm đã đạt tối đa');
        }
        carts[existingProductIndex].totalPrice = carts[existingProductIndex].quantity * carts[existingProductIndex].detail.price;
      } else {
        carts.push({ userId, quantity, detail, totalPrice: quantity * detail.price });
        message.success(`Thêm ${detail.name} thành công`)
      }

      state.carts = carts;
    },
    // hàm cập nhật số lượng sản phẩm trong giỏ hàng trong redux
    doUpdateCartProduct: (state, action) => {
      let carts = state.carts;
      const { _id, quantity } = action.payload;
      const existingProductIndex = carts.findIndex(cartItem => cartItem.detail._id === _id);

      if (existingProductIndex > -1) {
        carts[existingProductIndex].quantity = quantity;
        carts[existingProductIndex].totalPrice = quantity * carts[existingProductIndex].detail.price;
      }
      
      state.carts = carts;
    },

    doDeleteCartProduct: (state, action) => {
      state.carts = state.carts.filter(item => item.detail._id !== action.payload._id);
      message.success('Xoá sản phẩm khỏi giỏ hàng thành công');
    },
    // hàm cập nhật lại giỏ hàng
    doResetCartProduct: (state, action) => {
      state.carts = [];
    }
  },
});

export const { doCreateCartProduct, doDeleteCartProduct, doUpdateCartProduct, doResetCartProduct } = orderSlice.actions;

export default orderSlice.reducer;
