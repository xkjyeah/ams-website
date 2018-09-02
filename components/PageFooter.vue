<template>
<footer id="copy_right_area">
  <div class="facebook">
    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAMS-Ambulance-Medical-Service-Pte-Ltd-587840834594309%2F&width=200&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId"
        width="100%" height="60" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
  </div>

  <div class="text">
    <div id="site_map">
      <ul class="links">
        <li><nuxt-link to="/" class="footer_link">Home</nuxt-link></li>
        <li><nuxt-link to="/companyprofile-crew" class="footer_link">Company Profile & Crew</nuxt-link></li>
        <li><nuxt-link to="/fleet-information" class="footer_link">Fleet Information</nuxt-link></li>
        <li><nuxt-link to="/ambulance-equipment-list" class="footer_link">Ambulance Equipment List</nuxt-link></li>
        <li><nuxt-link to="/transport" class="footer_link">Transport</nuxt-link></li>
        <li><nuxt-link to="/event-standby" class="footer_link">Event Standby</nuxt-link></li>
        <li><nuxt-link to="/gallery" class="footer_link">Gallery</nuxt-link></li>
        <li><nuxt-link to="/sales-purchase" class="footer_link">Sales &amp; Rental</nuxt-link></li>
        <li><nuxt-link to="/contact-us" class="footer_link">Contact AMS</nuxt-link></li>
        <li><nuxt-link to="/whats-new" class="footer_link">What's New</nuxt-link></li>
        <li><nuxt-link to="/join-us" class="footer_link">Jobs</nuxt-link></li>
      </ul>

      <ul class="links">
        <li>Email: <a href="mailto:mail@ambulanceservice.com.sg">mail@ambulanceservice.com.sg</a></li>
        <li>24H Hotline: <a href="tel:65 6281 8111">( 65 ) 6281 8111</a></li>
        <li>General Line<a href="tel:65 6281 3132">( 65 ) 6281 3132</a></li>
        <li>Fax: ( 65 ) 6281 1357</li>
      </ul>

      <ul class="links">
        <li class="links-wrap">Address: 605 Macpherson Road, #01-10 Citimac, Singapore 368239</li>
        <li>AMS on <a href="https://www.facebook.com/AMS-Ambulance-Medical-Service-Pte-Ltd-587840834594309/" target="new">Facebook</a>
        </li>
      </ul>

      <div class="a_links"><small>Copyright 2017 AMS Pte Ltd</small></div>
    </div>
  </div>

</footer>
</template>

<script>
export default {
  props: ['page']
}
</script>
