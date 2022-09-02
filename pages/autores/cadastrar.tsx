import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { Button, Grid, Input } from 'ui-app'

import { BoxBottom } from 'components'
import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Cadastrar = () => {
  const router = useRouter()
  const [authorName, setAuthorName] = useState('')

  return (
    <Layout
      title={routes.autoresCadastrar.name}
      header={routes.autoresCadastrar.name}
      backButton={() => router.push(routes.autores.path)}
    >
      <Grid container flexDirection="column" gap={16}>
        <Grid item>
          <Input
            label="Nome do autor"
            value={authorName}
            onChange={(event) => setAuthorName(event.target.value)}
            placeholder="Digite o nome do autor"
            fullWidth
          />
        </Grid>
      </Grid>

      <BoxBottom>
        <Button variant="secondary">Cancelar</Button>

        <Button>Cadastrar</Button>
      </BoxBottom>
    </Layout>
  )
}

export default Cadastrar
