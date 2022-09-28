import { configureStore } from '@reduxjs/toolkit'

import middlewares from './middlewares'
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
        ignoredActionPaths: ['payload', 'error']
      }
    }).prepend(middlewares)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
