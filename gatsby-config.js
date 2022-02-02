module.exports = {
  plugins: [
    { resolve: "gatsby-plugin-image", options: {} },
    { resolve: "gatsby-plugin-sharp", options: {} },
    { resolve: "gatsby-transformer-sharp", options: {} },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: false,
        transpileTemplateLiterals: true
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
