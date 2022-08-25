import type { NextPage } from 'next'

import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Home: NextPage = () => {
  return (
    <Layout title={routes.home.name}>
      <p>Home</p>
    </Layout>
  )
}

export default Home
