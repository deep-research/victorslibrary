// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Victor's Library",
  siteUrl: 'https://victorslibrary.com',
  siteDescription: 'Research on Music and Religion',
  titleTemplate: "Victor's Library",
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['songs', 'recordings'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  templates: {
    StrapiSongs: [
      {
        path: '/music/:slug',
        component: './src/templates/Songs.vue'
      }
    ]
  }
}
