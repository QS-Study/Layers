import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@pinia/nuxt', '@element-plus/nuxt'],
  // elementPlus: {
  //   importStyle: 'scss',
  // },
  // css
  // css: [join(currentDir, './assets/scss/index.scss')],
});
