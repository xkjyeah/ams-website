// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-jsonld'],
  runtimeConfig: {
    canonicalBaseUrl: 'https://www.ambulanceservice.com.sg',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      // Not converted
      title: 'Ambulance Medical Service', // Fallback title when no title is provided
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-latest.min.js' },
        { src: '/js/jquery.nivo.slider.js' },
        {
          innerHTML: `
// So that grecaptcha doesn't call nothing
window.onloadCallback = () => {};
        `
        },
        { async: true, src: "https://www.googletagmanager.com/gtag/js?id=UA-115289012-1" },
        {
          innerHTML: `
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-115289012-1');
        `},
        { src: 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit', async: true, defer: true }
      ]
    },
  }
})
