import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginUserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token; 
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    //запрос для регистрации нового пользователя ожидает тело в виде JSON объекта.
    //     {
    //   "name": "Adrian Cross",
    //   "email": "across@mail.com",
    //   "password": "examplepassword"
    // }
    registrationUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['contact', 'user'],
    }),

    //запрос получение нового токена для работы пользователя с бэкендом
    //     {
    //   "email": "string",
    //   "password": "string"
    // }
    loginUser: builder.mutation({
      query: userData => ({
        url: `/users/login`,
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['user'],
    }),

    //запрос который удаляет актуальный токен выданый пользователю на бекенде
    unLoginUser: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
        // headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['user'],
    }),

    //запрос для проверки валидный ли токен храниться в памяти для последующих запросов на бэкенд
    //отправляет только токен возвращает имя пользователя и эмеил
    getIsActivUser: builder.query({
      query: () => ({
        url: `/users/current`,
        method: 'GET',
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['user'],
    }),
  }),
});


export const {
  useGetIsActivUserQuery,
  useRegistrationUserMutation,
  useLoginUserMutation,
  useUnLoginUserMutation,
} = loginUserApi;
