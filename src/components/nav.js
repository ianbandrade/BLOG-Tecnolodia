import React from "react"
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react"

import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={data => (
      <Box p={6}>
        <Flex>
          <Box>
            <Menu isLazy={true}>
              <MenuButton size="sm" as={Button}>
                Categorias
              </MenuButton>
              <MenuList>
                {data.allStrapiCategory.edges.map((category, i) => (
                  <Link
                    style={{ color: "#333333" }}
                    to={`/category/${category.node.slug}`}
                  >
                    <MenuItem key={`category__${category.node.slug}`}>
                      {category.node.name}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p={1}>
            <Link style={{ color: "#333333" }} to="/">
              {data.strapiGlobal.siteName}
            </Link>
          </Box>
        </Flex>
      </Box>
    )}
  />
)

export default Nav
