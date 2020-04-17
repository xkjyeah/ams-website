<script>
export default {
  head () {
    return {
      title: 'Thank You',
      // category: 'contact',
      link: [{
        rel: 'canonical',
        href: process.env.baseUrl + this.$route.path + '/'
      }]
    }
  }
}
</script>

<template>
  <default-page>
    <div id="enquiry" style="margin:0 0 50px 0 !important;">
      <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
      <div style="clear:both;"></div>
    </div>

    <MapComponent />

    <div slot="sidebar">
      <address-area />
      <facebook-widget />
    </div>
  </default-page>
</template>
