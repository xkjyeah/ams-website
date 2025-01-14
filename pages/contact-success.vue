<script setup>
useHead({
  title: 'Thank You',
  // category: 'contact',
  link: [{
    rel: 'canonical',
    href: useRuntimeConfig().canonicalBaseUrl + useRoute().path + '/'
  }]
})
</script>

<template>
  <default-page>
    <div id="enquiry" style="margin:0 0 50px 0 !important;">
      <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
      <div style="clear:both;" />
    </div>

    <MapComponent />

    <template v-slot:sidebar>
      <address-area />
      <facebook-widget />
    </template>
  </default-page>
</template>
