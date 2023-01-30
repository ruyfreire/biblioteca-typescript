import React from 'react'

import useSWR, { Fetcher } from 'swr'

import { Table } from '@/components'

type Author = {
  id: string
  name: string
}

type ResponseError = {
  message: string
}

const fetcher: Fetcher<Author[], string> = (...args) =>
  fetch(...args).then((res) => res.json())

export default function Authors() {
  const { data } = useSWR<Author[], ResponseError>('/api/authors', fetcher)

  return (
    <div className="container mx-auto">
      <h4 className="mb-4 font-semibold uppercase">Listagem de livros</h4>

      {Array.isArray(data) && (
        <div className="h-full max-h-[75vh]">
          <Table>
            <Table.THead>
              <Table.TrTHead>
                <Table.Th>Nº</Table.Th>
                <Table.Th>Nome</Table.Th>
              </Table.TrTHead>
            </Table.THead>

            <Table.TBody>
              {data.map((author, index) => (
                <Table.TrTBody key={author.id}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{author.name}</Table.Td>
                </Table.TrTBody>
              ))}
            </Table.TBody>
          </Table>
        </div>
      )}
    </div>
  )
}
