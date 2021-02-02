import React from "react"
import { Box } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"
import "../assets/css/main.css"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <Box p={5}>
        <h1>{data.strapiHomepage.hero.title}</h1>
        <ArticlesComponent articles={data.allStrapiArticle.edges} />
      </Box>
    </Layout>
  )
}

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
