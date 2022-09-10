import { createReducer, createAction } from '@reduxjs/toolkit'
import { Book, BookState } from 'types'

const createBook = createAction<Book>('book/CREATE')
const saveBook = createAction<Book[]>('book/SAVE')

const initialState: BookState = {
  books: []
}

export const bookReducer = createReducer(initialState, (builder) => {
  builder.addCase(saveBook, (state, action) => {
    state.books = action.payload
  })
})

export const appActions = { createBook, saveBook }

export default bookReducer
