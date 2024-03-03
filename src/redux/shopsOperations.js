import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrugsByShop, getAllShops, addCartList } from 'api/shopsApi';

export const getShopsList = createAsyncThunk(
  'shop/getShops',
  async (page, thunkAPI) => {
    try {
      const data = await getAllShops();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getDrugs = createAsyncThunk(
  'shop/getDrugs',
  async (activeShop, thunkAPI) => {
    try {
      const data = await getDrugsByShop(activeShop);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCart = createAsyncThunk(
  'shop/addCart',
  async (cart, thunkAPI) => {
    try {
      const data = await addCartList(cart);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
