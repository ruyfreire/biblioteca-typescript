import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import { Box, Button, Grid, Tooltip } from 'ui-app'

import { Header } from 'components'
import routes from 'utils/routes'

const Autor = () => {
  const router = useRouter()

  return (
    <>
      <Header title={routes.autores.name} header={routes.autores.name} />

      <Box display="flex" justifyContent="center" bgColor="#fff" mb={3}>
        <Image
          src="/author.jpg"
          alt="Ilustração de pessoa com livro"
          height={200}
          width={250}
        />
      </Box>

      <Grid container flexDirection="column">
        <Grid item>
          <Button
            variant="ghost"
            onClick={() => router.push(routes.autoresCadastrar.path)}
            fullWidth
          >
            Cadastrar
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="ghost"
            onClick={() => router.push(routes.autoresBuscar.path)}
            fullWidth
          >
            Buscar todos
          </Button>
        </Grid>

        <Grid item>
          <Tooltip text="Em breve">
            <Button
              variant="secondary"
              onClick={() => router.push(routes.autoresBuscar.path)}
              disabled
              fullWidth
            >
              Buscar por nome
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  )
}

export default Autor
