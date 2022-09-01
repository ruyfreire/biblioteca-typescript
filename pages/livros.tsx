import Image from 'next/image'
import React from 'react'

import { Box, Button, Grid, Tooltip } from 'ui-app'

import { Section } from 'components'
import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Livro = () => {
  return (
    <Layout title={routes.livros.name} header={routes.livros.name}>
      <Section>
        <Box display="flex" justifyContent="center" bgColor="#fff">
          <Image
            src="/books.jpg"
            alt="Ilustração de estante com livros"
            height={200}
            width={300}
          />
        </Box>
      </Section>

      <Grid container flexDirection="column">
        <Grid item>
          <Button variant="ghost" fullWidth>
            Buscar por nome ou autor
          </Button>
        </Grid>

        <Grid item>
          <Button variant="ghost" fullWidth>
            Buscar todos
          </Button>
        </Grid>

        <Grid item>
          <Button variant="ghost" fullWidth>
            Cadastrar
          </Button>
        </Grid>

        <Grid item>
          <Tooltip text="Em breve">
            <Button variant="ghost" fullWidth disabled>
              Emprestar
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Livro
