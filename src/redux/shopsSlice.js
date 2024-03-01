import { createSlice } from '@reduxjs/toolkit';
import { getShopsList, getDrugs, addCart } from './shopsOperations';

const shopInitialState = {
  shopsList: [],
  drugsByShop: [],
  cartList: [],
  favoritesDrugs: [],
  cartsHistory: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const shopSlice = createSlice({
  name: 'shop',
  initialState: shopInitialState,
  extraReducers: builder => {
    builder
      .addCase(getShopsList.pending, handlePending)
      .addCase(getShopsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.shopsList = payload;
      })
      .addCase(getShopsList.rejected, handleRejected)
      .addCase(getDrugs.pending, handlePending)
      .addCase(getDrugs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.drugsByShop = payload;
      })
      .addCase(getDrugs.rejected, handleRejected)
      .addCase(addCart.pending, handlePending)
      .addCase(addCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cartList = [];
        state.cartsHistory.push(payload);
      })
      .addCase(addCart.rejected, handleRejected);
  },
});

export const shopReducer = shopSlice.reducer;
