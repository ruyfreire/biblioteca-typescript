import type { NextPage } from 'next'
import Image from 'next/future/image'

import { Card, Grid } from 'ui-app'

import { Section } from 'components'
import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Home: NextPage = () => {
  return (
    <Layout title={routes.home.name}>
      <Section>
        <Image
          src="https://placeimg.com/1000/150/tech/grayscale"
          alt="Imagem randômica"
          sizes="100vw"
          fill
        />
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
