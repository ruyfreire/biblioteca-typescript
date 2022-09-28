import { createReducer, createAction } from '@reduxjs/toolkit'
import { Book, BookState } from 'types'

export const bookActions = {
  createBook: createAction<Book>('book/CREATE'),
  saveBook: createAction<Book[]>('book/SAVE')
}

const initialState: BookState = {
  books: []
}

export default createReducer(initialState, (builder) => {
  builder.addCase(bookActions.saveBook, (state, action) => {
    state.books = action.payload
  })
})
