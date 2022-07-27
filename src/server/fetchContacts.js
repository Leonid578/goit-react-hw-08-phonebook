import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62d12023d4eb6c69e7d70b93.mockapi.io/' }),
  tagTypes: ['Contact'],
    endpoints: (builder) => ({
      
    getAllContacts: builder.query({
        query: () => `contacts/`,
        providesTags: ['Contact'],
    }),
      
    deletedContact: builder.mutation({
        query: (id) => ({
            url: `contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contact'], 
    }),

    addContact: builder.mutation({
        query: (newContact) => ({
            url: `contacts`,
            method: 'POST',
            body: newContact,
        }),
        invalidatesTags: ['Contact'],
    }),
  }),
})

export const { useGetAllContactsQuery, useDeletedContactMutation, useAddContactMutation } = contactApi