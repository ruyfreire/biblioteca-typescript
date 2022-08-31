import React from 'react'

import Layout from 'templates/Layout'
import routes from 'utils/routes'

const Autor = () => {
  return (
    <Layout title={routes.autor.name} header={routes.autor.name}>
      <p>Autor</p>
    </Layout>
  )
}

export default Autor
