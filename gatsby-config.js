module.exports = {
  siteMetadata: {
    title: "Yosef Blandin Portfolio",
    description: "I am very passionate about Front End Development. Always improving my skills to bring you a better service",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    
     {
    resolve: "gatsby-plugin-google-fonts",
    options: {
      fonts: [
        'raleway'
      ],
      display: 'swap'
    }
  }],
};
