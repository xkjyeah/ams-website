<script>
export default {
  head: {
    title: 'Site Map'
  }
}
</script>

<template>
<default-page>
  <div id="site_map_text">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li>About Us
        <ul>
          <li><a href="companyprofile-crew.html">Company Profile & Crew</a></li>
          <li><a href="fleet-information.html">Fleet Information</a></li>
          <li><a href="ambulance-equipment-list.html">Ambulance Equipment List</a></li>
          <li><a href="what-news.html">What's New</a></li>

        </ul>
      </li>
      <li>Transport
        <ul>
          <li><a href="transport.html">Local Transport</a></li>
          <li><a href="transport.html#critical-ill">Transport of Critically Ill</a></li>
          <li><a href="transport.html#overseas-transport">Overseas Transport</a></li>

        </ul>
      </li>
      <li>Event Standby
        <ul>
          <li><a href="event-standby.html">Information</a></li>

          <li><a href="gallery.html">Gallery</a></li>

        </ul>
      </li>
      <li>Sales & Rental
        <ul>
          <li><a href="sales-purchase.html">Rental of Oxygen Cylinders</a></li>
          <li><a href="sales-purchase.html#purchaseAED">Sales of AED</a></li>

        </ul>
      </li>
      <li><a href="contact-us.html">Contact Us</a></li>
    </ul>
  </div>
  <div style="clear:both;"></div>
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
    <AddressArea />
    <FacebookWidget />
  </div>
</default-page>
</template>
