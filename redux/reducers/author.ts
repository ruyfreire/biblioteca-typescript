import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import * as authorService from 'services/author'
import { Author, AuthorState } from 'types'

export const authorActions = {
  saveAuthor: createAction<Author[]>('author/SAVE'),
  createAuthor: createAsyncThunk(
    'author/CREATE',
    async (author: Author) => await authorService.postCreateAuthor(author)
    // { serializeError: (x: any) => x }
  )
}

const initialState: AuthorState = {
  authors: []
}

export default createReducer(initialState, (builder) => {
  builder.addCase(authorActions.saveAuthor, (state, action) => {
    state.authors = action.payload
  })
})
