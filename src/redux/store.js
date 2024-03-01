import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { shopReducer } from './shopsSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartList', 'favoritesDrugs', 'cartsHistory'],
};
const shopPersistReducer = persistReducer(persistConfig, shopReducer);

export const store = configureStore({
  reducer: shopPersistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
