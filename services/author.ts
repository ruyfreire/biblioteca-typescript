import { Author, AuthorCreated, ResponseApi201 } from 'types'

import api from './api'

export const postCreateAuthor = async (
  body: Author
): Promise<ResponseApi201<AuthorCreated>> => {
  try {
    const response = await api.post('author', body)

    return response.data
  } catch (error: any) {
    console.error('postCreateAuthor -> ', error.message)
    throw error
  }
}
