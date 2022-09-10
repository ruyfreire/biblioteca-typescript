import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import { Grid, Input } from 'ui-app'

import { Header } from 'components'
import routes from 'utils/routes'

const BuscarAutores = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  return (
    <>
      <Header
        title={routes.autoresBuscar.name}
        header={routes.autoresBuscar.name}
        backButton={() => router.push(routes.autores.path)}
      />

      <Grid container flexDirection="column" gap={16}>
        <Grid item>
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Digite o nome do autor"
            icon={<FiSearch />}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  )
}

export default BuscarAutores
