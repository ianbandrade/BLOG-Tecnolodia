import React from "react"
import Card from "./card"

import { Box } from "@chakra-ui/react"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 1.5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <>
      <Box p={5} display={{ md: "flex" }} mb={[0, 2, 3, 5]}>
        {leftArticles.map((article, i) => {
          return (
            <Card
              article={article}
              key={`article__left__${article.node.slug}`}
            />
          )
        })}
      </Box>

      <Box p={5} display={{ md: "flex" }} mb={[0, 2, 3, 5]}>
        {rightArticles.map((article, i) => {
          return (
            <Card
              article={article}
              key={`article__right__${article.node.slug}`}
            />
          )
        })}
      </Box>
    </>
  )
}

export default Articles
