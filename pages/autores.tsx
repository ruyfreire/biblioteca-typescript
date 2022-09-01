import Image from 'next/image'
import React from 'react'

import { Box, Button, Grid } from 'ui-app'

import { Section } from 'components'
import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Autor = () => {
  return (
    <Layout title={routes.autores.name} header={routes.autores.name}>
      <Section>
        <Box display="flex" justifyContent="center" bgColor="#fff">
          <Image
            src="/author.jpg"
            alt="Ilustração de pessoa com livro"
            height={200}
            width={250}
          />
        </Box>
      </Section>

      <Grid container flexDirection="column">
        <Grid item>
          <Button variant="ghost" fullWidth>
            Buscar por nome ou livros
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
      </Grid>
    </Layout>
  )
}

export default Autor
