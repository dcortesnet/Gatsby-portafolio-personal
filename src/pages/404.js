import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: No encontrado</h1>
    <p>Acabas de llegar a una ruta que no existe... la tristeza.</p>
  </Layout>
)

export default NotFoundPage
