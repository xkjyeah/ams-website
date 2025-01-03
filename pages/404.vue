<script>
export default {
  head: {
    title: 'The page was not found!'
  }
}
</script>
<template>
  <default-page>
    <div>
      <h3>The requested page was not found</h3>

      <p>Over time there have been changes to the architecture of this web server and despite our best efforts some
        older links may bring you to this page.</p>

      <p>You may not be able to visit this page because of:</p>

      <ul type="disc">
        <li>an out-of-date bookmark/favorite</li>
        <li>a search engine that has an <b>out-of-date listing for this site</b></li>
        <li>a <b>mistyped address</b> you have <b>no access</b> to this page</li>
        <li>the requested resource was not found</li>
        <li>an error has occurred while processing your request</li>
      </ul>
      <p>
        <nuxt-link to="/">
          Return to the homepage
        </nuxt-link>
      </p>
    </div>
    <MapComponent />
    <CallBanner />

    <template v-slot:sidebar>
      <address-area />
      <facebook-widget />
    </template>
  </default-page>
</template>
