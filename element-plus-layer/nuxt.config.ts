// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@element-plus/nuxt'],
  build: {
    transpile: ['dayjs'],
  },
  vite: {
    optimizeDeps: {
      include: ['dayjs > dayjs'],
    },
  },
});
