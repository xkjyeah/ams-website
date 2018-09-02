<script>
export default {
  head: {
    title: 'Site Map'
  }
}
</script>

<template>
<default-page>
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
  <MapComponent />
  <CallBanner />
  
  <div slot="sidebar">
    <AddressArea />
    <FacebookWidget />
  </div>
</default-page>
</template>
