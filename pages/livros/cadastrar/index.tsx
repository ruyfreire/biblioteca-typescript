import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { Button, Grid, Input } from 'ui-app'

import { BoxBottom, Header } from 'components'
import routes from 'utils/routes'

const Cadastrar = () => {
  const router = useRouter()
  const [bookName, setBookName] = useState('')

  return (
    <>
      <Header
        title={routes.livrosCadastrar.name}
        header={routes.livrosCadastrar.name}
        backButton={() => router.push(routes.livros.path)}
      />

      <Grid container flexDirection="column" gap={16}>
        <Grid item>
          <Input
            label="Nome do livro"
            value={bookName}
            onChange={(event) => setBookName(event.target.value)}
            placeholder="Digite o nome do livro"
            fullWidth
          />
        </Grid>
      </Grid>

      <BoxBottom>
        <Button
          variant="secondary"
          onClick={() => router.push(routes.livros.path)}
        >
          Cancelar
        </Button>

        <Button>Cadastrar</Button>
      </BoxBottom>
    </>
  )
}

export default Cadastrar
