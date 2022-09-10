import { configureStore } from '@reduxjs/toolkit'

import author from './reducers/author'
import book from './reducers/book'
import generics from './reducers/generics'

export const store = configureStore({
  reducer: {
    book,
    author,
    generics
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload'],
        ignoredPaths: ['generics.apiErrors']
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
