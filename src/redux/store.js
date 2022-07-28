import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterContacts } from './sliceFilter';
import { contactApi } from 'server/contacts';
import { curentToken } from './sliceToken';
import { curentUser } from './sliceAuth'; 

// ***********************работа с локалкой*********************************
// https://www.youtube.com/watch?v=sdlYNKjCGU0 гайд по локалке

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const tokenPersistConfig = {
    key: 'root', //это ключь под которым мы сохраняем сторе
    storage,
    whitelist: ['token'], // этот ключь вытягивает уже из slice
  };
  const rootReduser = combineReducers({
    [contactApi.reducerPath]: contactApi.reducer,
    // [loginUserApi.reducerPath]: loginUserApi.reducer,
    filter: filterContacts.reducer,
    token: curentToken.reducer,
    auth: curentUser.reducer,
  });
  const persistedReducer = persistReducer(tokenPersistConfig, rootReduser);
  // *************************************************

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(contactApi.middleware),
  });
  
  export const persistor = persistStore(store); 