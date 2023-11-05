// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image"],
  // webpack: {
  //   extractCSS: true,
  //   optimizeCSS: true,
  // },
  experimental: {
    //   payloadExtraction: false,
    inlineSSRStyles: false, // or a function to determine inlining
  },
});
