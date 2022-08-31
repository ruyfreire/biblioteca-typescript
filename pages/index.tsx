import type { NextPage } from 'next'
import Image from 'next/image'

import { Box, Card, Grid } from 'ui-app'

import { Section } from 'components'
import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Home: NextPage = () => {
  return (
    <Layout title={routes.home.name} header={routes.home.name}>
      <Section>
        <Box display="flex" justifyContent="center" bgColor="#fff">
          <Image
            src="/home.jpg"
            alt="Ilustração de uma biblioteca"
            height={200}
            width={400}
          />
        </Box>
      </Section>

      <Grid container flexDirection="column" alignItems="center" gap={16}>
        <Grid item>
          <Card title="Cadastros">
            Cadastre livros e autores na biblioteca virtual, e compartilhe o
            conhecimento entre todos
          </Card>
        </Grid>

        <Grid item>
          <Card title="Buscas">
            Busque pelo seu livro preferido, ou autor de quem mais gosta.
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
