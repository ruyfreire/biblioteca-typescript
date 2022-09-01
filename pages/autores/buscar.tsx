import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import { Grid, Input, Select } from 'ui-app'

import Layout from 'templates/Layout'
import routes from 'utils/routes'

type Option = {
  label: string
  value: string | number
  placeholder: string
}

const searchOptions: Array<Option> = [
  {
    label: 'Nome do autor',
    value: 'author',
    placeholder: 'Digite o nome do autor',
  },
  {
    label: 'Livros do autor',
    value: 'books',
    placeholder: 'Digite o nome de um livro',
  },
]

const Autor = () => {
  const router = useRouter()
  const [selectedSearch, setSelectedSearch] = useState(searchOptions[0])
  const [search, setSearch] = useState('')

  return (
    <Layout
      title={routes.autoresBuscar.name}
      header={routes.autoresBuscar.name}
      backButton={() => router.push(routes.autores.path)}
    >
      <Grid container flexDirection="column" gap={16}>
        <Grid item>
          <Select
            value={selectedSearch}
            options={searchOptions}
            onChange={setSelectedSearch}
            getOptionLabel={({ label }: Option) => label}
          />
        </Grid>

        <Grid item>
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={selectedSearch.placeholder}
            icon={<FiSearch />}
            fullWidth
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Autor
