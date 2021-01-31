import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Moment from "react-moment"
import Layout from "../components/layout"
import { MarkdownPreview } from "react-marked-markdown"
import { Box, Text } from "@chakra-ui/react"

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

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <MarkdownPreview value={article.content} />

            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                  <Img
                    fixed={article.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  Por {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment locale="pt-br" format="DD/MM/YYYY - h:mm">
                    {article.published_at}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default Article
