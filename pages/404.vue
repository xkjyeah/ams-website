<script>
export default {
  head: {
    title: 'The page was not found!',
  }
}
</script>
<template>
<default-page>
  <div>
    <h3>The requested page was not found</h3>

    <p>Over time there have been changes to the architecture of this web server and despite our best efforts some older links may bring you to this page.</p>

    <p>You may not be able to visit this page because of:</p

    <ul type="disc">
      <li>an out-of-date bookmark/favorite</li>
      <li>a search engine that has an <b>out-of-date listing for this site</b></li>
      <li>a <b>mistyped address</b> you have <b>no access</b> to this page</li>
      <li>the requested resource was not found</li>
      <li>an error has occurred while processing your request</li>
    </ul>
    <p><nuxt-link to="/">Return to the homepage</nuxt-link></p>
  </div>
  <div class="inner_service_box">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.737575813785!2d103.88555031533105!3d1.3336209119974474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178daeef4207%3A0x5d4be4b51a1b033!2sCitimac+Industrial+Complex!5e0!3m2!1sen!2ssg!4v1469789694051"
        width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
    <div style="clear:both;"></div>
  </div>

  <div id="bottom_call_action_area" style="margin:30px 0 0 0;">
    <div id="bottom_call_action_text">call our <span>hotline</span> at</div>
    <div id="bottom_call_number"><a href="tel:6281 8111">6281 8111</a></div>
    <div style="clear:both;"></div>
  </div>

  <div slot="sidebar">
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
