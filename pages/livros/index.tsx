import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import { Box, Button, Grid, Tooltip } from 'ui-app'

import { Header } from 'components'
import routes from 'utils/routes'

const Livro = () => {
  const router = useRouter()

  return (
    <>
      <Header title={routes.livros.name} header={routes.livros.name} />

      <Box display="flex" justifyContent="center" bgColor="#fff" mb={3}>
        <Image
          src="/books.jpg"
          alt="Ilustração de estante com livros"
          height={200}
          width={300}
        />
      </Box>

      <Grid container flexDirection="column">
        <Grid item>
          <Button
            variant="ghost"
            onClick={() => router.push(routes.livrosCadastrar.path)}
            fullWidth
          >
            Cadastrar
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="ghost"
            onClick={() => router.push(routes.livrosBuscar.path)}
            fullWidth
          >
            Buscar todos
          </Button>
        </Grid>

        <Grid item>
          <Tooltip text="Em breve">
            <Button variant="secondary" disabled fullWidth>
              Buscar por nome ou autor
            </Button>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip text="Em breve">
            <Button variant="secondary" disabled fullWidth>
              Emprestar
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  )
}

export default Livro
