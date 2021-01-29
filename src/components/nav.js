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

      // <div>
      //   <div>
      //     <nav className="uk-navbar-container" data-uk-navbar>
      //       <div className="uk-navbar-left">
      //         <button
      //           className="uk-button uk-button-default uk-margin-right uk-button-small"
      //           type="button"
      //         >
      //           <img src={MenuIcon} alt="Menu icon" />
      //         </button>

      //         <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 600">
      //           <ul className="uk-nav uk-dropdown-nav">
      //             <li class="uk-nav-header">Categorias</li>
      //             {data.allStrapiCategory.edges.map((category, i) => (
      //               <li key={`category__${category.node.slug}`}>
      //                 <Link to={`/category/${category.node.slug}`}>
      //                   {category.node.name}
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //         </div>
      //       </div>

      //       <div className="uk-navbar-right">
      //         <ul className="uk-navbar-nav">
      //           <li>
      //             <Link to="/">{data.strapiGlobal.siteName}</Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      //   </div>
      // </div>
    )}
  />
)

export default Nav
