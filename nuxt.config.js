module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cryptoapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'local hack day project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
    
    
],
manifest: {
  name: 'CryptoApp',
  
  display: "standalone",
  orientation: "portrait",
  background_color: "#f5f5f5",
  theme_color: "#29434d"
 
},
meta:{
  name: "CryptoApp",
  nativeUI: true,
  favicon: true,
},
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Buildnp configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

