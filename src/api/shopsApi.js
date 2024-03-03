import axios from 'axios';

axios.defaults.baseURL = 'https://medicine-delivery-app-back.onrender.com/';

export const getDrugsByShop = async filter => {
  const { data } = await axios.get('shops', {
    params: { filter },
  });
  return data;
};

export const getAllShops = async page => {
  const { data } = await axios.get('allshops');
  return data;
};

export const addCartList = async product => {
  const { data } = await axios.post('cart', product);
  return data;
};
