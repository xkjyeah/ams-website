<script>
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
export default {
  components: {
    PageHeader,
    PageFooter
  },
  head () {
    return {
      meta: [
        {hid: 'Device-Width', name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
      ],
      link: [
        {rel: 'shortcut icon', href: 'favicon.ico'},
        {rel: 'stylesheet', type: 'text/css', href: '/css/nivo-slider.css'},
        {rel: 'stylesheet', type: 'text/css', href: '/css/default.css'}
      ]
    }
  }
}

</script>
<template>
  <div data-tag="tadsfas">
    <PageHeader />
    <nuxt />
    <PageFooter />
  </div>
</template>

<style lang="scss" src="../assets/index.scss">
</style>

