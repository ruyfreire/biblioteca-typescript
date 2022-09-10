export type Book = {
  name: string
  summary: string
  authors: Array<number>
}

export type BookState = {
  books: Array<Book>
}
