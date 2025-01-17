require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "https://ianbandrade-blog.herokuapp.com",
        contentTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/icon.svg`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
