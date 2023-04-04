export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Nasher Uddin | Software Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Transform your scribbles and strokes into stunning works of art with Scribble to Art. Doodle anything, select a style, and add prompts to create art that reflects your unique vision.',
      },

      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  css: ['@/styles/style.scss'],

  plugins: [],

  components: true,

  buildModules: [
    'nuxt-font-loader',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],

  modules: [],

  axios: {},

  build: {},
}
