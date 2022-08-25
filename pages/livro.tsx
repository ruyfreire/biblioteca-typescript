import React from 'react'

import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Livro = () => {
  return (
    <Layout title={routes.livro.name} header={routes.livro.name}>
      <p>Livro</p>
    </Layout>
  )
}

export default Livro
