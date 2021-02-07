import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Moment from "react-moment"
import Layout from "../components/layout"
import { MarkdownPreview } from "react-marked-markdown"
import { Box, Text, Divider, Flex } from "@chakra-ui/react"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      image {
        publicURL
        childImageSharp {
          fixed {
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
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <Layout seo={seo}>
      <Box>
        <Box
          h={300}
          id="banner"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <Text id="banner-text" fontSize="4xl" color="#33333">
            {article.title}
          </Text>
        </Box>

        <Box>
          <Box p={5}>
            <Box p={3}>
              <MarkdownPreview value={article.content} />
            </Box>
            <Divider orientation="horizontal" />
            <Flex>
              <Box w="40px">
                {article.author.picture && (
                  <Img
                    fixed={article.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </Box>
              <Box w="200px">
                <Text color="#333333" fontSize="lg">
                  Por {article.author.name}
                </Text>
                <Text color="#a1a4a9" fontSize="xs">
                  <Moment locale="pt-br" format="DD/MM/YYYY - h:mm">
                    {article.published_at}
                  </Moment>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Article
