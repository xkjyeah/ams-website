<script>
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
export default {
  components: {
    PageHeader,
    PageFooter
  },
}

</script>
<template>
  <div data-tag="tadsfas">

    <Head>
      <Meta hid="Device-Width" name="viewport" content="width=device-width, initial-scale=1.0" />
      <Link rel="shortcut icon" href="favicon.ico" />
      <Link rel="stylesheet" type="text/css" href="/css/nivo-slider.css" />
      <Link rel="stylesheet" type="text/css" href="/css/default.css" />
    </Head>
    <PageHeader />
    <slot />
    <PageFooter />
  </div>
  <div class="whatsapp-icon">
    <div>
      <a href="https://wa.me/6598514075" target="whatsapp"><img src="~/assets/images/whatsapp-icon.png" /></a>
    </div>
    <div>
      Chat with us!
    </div>
  </div>
</template>

<style>
.whatsapp-icon {
  text-align: center;
  text-shadow:
    0px 1px white, 1px 0px white, 0px -1px white, -1px 0px white;
  color: #090;
}
</style>

<style lang="scss" src="../assets/index.scss"></style>
