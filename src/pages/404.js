import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="uk-navbar-container uk-position-center">
      <h1>404: Not Found</h1>
      <p className="uk-text-center">
        Opsss... P&aacute;gina não encontrada! Volte para a p&aacute;gina
        principal ;)
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
