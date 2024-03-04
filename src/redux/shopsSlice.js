import { createSlice } from '@reduxjs/toolkit';
import { getShopsList, getDrugs, addCart } from './shopsOperations';

const shopInitialState = {
  shopsList: [],
  drugsByShop: [],
  cartList: [],
  favoritesDrugs: [],
  cartsHistory: [],
  filter: 'all',
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
  reducers: {
    upTotal(state, { payload }) {
      const index = state.cartList.findIndex(
        item => item.drugName === payload.drugName
      );
      if (index === -1) {
        state.cartList.push({
          imgURL: payload.imgURL,
          drugName: payload.drugName,
          price: Number(payload.price),
          total: 1,
        });
      } else {
        state.cartList[index].total += 1;
      }
    },
    downTotal(state, { payload }) {
      const index = state.cartList.findIndex(
        item => item.drugName === payload.drugName
      );
      if (index !== -1 && state.cartList[index].total > 0) {
        state.cartList[index].total -= 1;
        if (state.cartList[index].total === 0) {
          state.cartList.splice(index, 1);
        }
      }
    },
    clearCart(state, _) {
      state.cartList = [];
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },

    deleteFavorite(state, { payload }) {
      const index = state.favoritesDrugs.findIndex(
        item => item._id === payload
      );
      state.favoritesDrugs.splice(index, 1);
    },
    addFavorite(state, { payload }) {
      state.favoritesDrugs.push({ ...payload });
    },
  },
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
        state.drugsByShop = payload[0].drugs;
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

export const {
  upTotal,
  downTotal,
  clearCart,
  deleteFavorite,
  addFavorite,
  changeFilter,
} = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
