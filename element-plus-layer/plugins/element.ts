import ElementPlus from 'element-plus';

export default defineNuxtPlugin((nuxtApp) => {
  // ElementPlus
  nuxtApp.vueApp.use(ElementPlus, { size: 'small', zIndex: 3000 });
});
