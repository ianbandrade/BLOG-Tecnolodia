import React from "react"
import { graphql } from "gatsby"
import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import { Box } from "@chakra-ui/react"

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(
      filter: { status: { eq: "published" }, category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 660) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug }) {
      name
    }
  }
`

const Category = ({ data }) => {
  const articles = data.articles.edges
  const category = data.category.name
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  }

  return (
    <Layout seo={seo}>
      <Box>
        <Box p={5}>
          <h1>{category}</h1>
          <ArticlesComponent articles={articles} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Category
