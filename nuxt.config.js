let development = process.env.NODE_ENV !== 'production'
export default {

  // Base route to loa the app
  router: {
    base: '/page/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landing-pages',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Volkhov: wght@400; 700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/gradely_asset_store/dist/css/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-lazyload', ssr:false},

  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/node_modules/gradely_asset_store/src/basic_scss/_colors.scss',
      '~/node_modules/gradely_asset_store/src/basic_scss/_breakpoints.scss',
      '~/node_modules/gradely_asset_store/src/basic_scss/_mixins.scss',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: development? 'https://testapi.gradely.ng/v2/': 'https://api.gradely.ng/v2/'
  },

  env: {
    // baseUrl: process.env.BASE_URL || 'https://localhost:3000'
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
