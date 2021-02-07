import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Box, Text } from "@chakra-ui/react"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container maxW="xl" centerContent>
      <Box id="not-found">
        <h1>404: Not Found</h1>
        <Text>
          Opsss... P&aacute;gina não encontrada! Volte para a p&aacute;gina
          principal ;)
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default NotFoundPage
