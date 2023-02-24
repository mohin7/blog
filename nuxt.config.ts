// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: "Mohin's Daily Blog",
      titleTemplate: "%s Mohin's Daily Blog",
      meta: [{ name: 'description', content: "Mohin's Daily Blog" }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: true,
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673372476/',
    },
  },
})
