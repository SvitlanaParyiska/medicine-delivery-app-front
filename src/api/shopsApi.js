import axios from 'axios';

axios.defaults.baseURL = 'https://medicine-delivery-app-back.onrender.com/';

export const getDrugsByShop = async page => {
  const { data } = await axios.get('shops');
  return data;
};

export const getAllShops = async page => {
  const { data } = await axios.get('shopsList');
  return data;
};

export const addCartList = async product => {
  const { data } = await axios.post('cart', product);
  return data;
};
