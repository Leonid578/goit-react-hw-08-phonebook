import { createSlice } from '@reduxjs/toolkit';

const initialUser = '';

export const curentUser = createSlice({
  name: 'auth',
  initialState: initialUser,
  reducers: {
    isAuth(_state, action) {
      return action.payload;
    },
  },
});

export const { isAuth } = curentUser.actions;
