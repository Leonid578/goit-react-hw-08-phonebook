import { configureStore } from '@reduxjs/toolkit'
import { filterContacts } from './sliceFilter'

import {contactApi} from '../server/fetchContacts'

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        filter: filterContacts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
})  