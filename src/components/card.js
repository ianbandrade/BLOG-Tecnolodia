import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Box, Badge, Heading, Flex, Text, Divider } from "@chakra-ui/react"

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
      <Box p={2}>
        <Box>
          <Img
            fixed={article.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static" }}
          />
        </Box>
        <Box>
          <Badge variant="outline">{article.node.category.name}</Badge>
          <Heading mb={1}>{article.node.title}</Heading>
          <Box>
            <Divider orientation="horizontal" />
            <Flex>
              <Box w="40px">
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                    alt="Avatar autor"
                  />
                )}
              </Box>
              <Box w="200px">
                <Text fontSize="lg">{article.node.author.name}</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default Card
