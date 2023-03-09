import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.idx
      );

      if (!existingProduct) {
        state.totalPrice = state.totalPrice + newProduct.price;

        state.products.push({
          id: newProduct.idx,
          name: newProduct.name,
          mainImage: newProduct.image,
          description: newProduct.description,
          spaceCategory: newProduct.category,
          price: newProduct.price,
          productTotalPrice: newProduct.price,
          maximumPurchases: newProduct.maximum,
          registrationDate: newProduct.date,
          quantity: 1,
        });
      } else {
        // 모든 상품 총 결제 금액
        state.totalPrice = state.totalPrice + existingProduct.price;

        // 동일 상품 추가 구매 시 해당 상품 총 가격
        existingProduct.productTotalPrice =
          existingProduct.productTotalPrice + existingProduct.price;

        // 동일 상품 추가 구매 시 수량 증가
        existingProduct.quantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );

      state.totalPrice = state.totalPrice - existingProduct.price;
      if (existingProduct.quantity !== 1) {
        existingProduct.productTotalPrice =
          existingProduct.productTotalPrice - existingProduct.price;
        existingProduct.quantity--;
      } else {
        state.products = state.products.filter((product) => product.id !== id);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
