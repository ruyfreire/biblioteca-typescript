export type Author = {
  name: string
}

export type AuthorState = {
  authors: Array<Author>
}

export type AuthorCreated = {
  id: string
  name: string
}
