<script>
export default {
  head() {
    return {
      title: 'Site Map',
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        }
      ]
    }
  }
}
</script>

<template>
  <default-page>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li>
        About Us
        <ul>
          <li><a href="/companyprofile-crew">Company Profile &amp; Crew</a></li>
          <li><a href="/fleet-information">Fleet Information</a></li>
          <li><a href="/ambulance-equipment-list">Ambulance Equipment List</a></li>
          <li><a href="/whats-new">What's New</a></li>
        </ul>
      </li>
      <li>
        Transport
        <ul>
          <li><a href="/transport">Local Transport</a></li>
          <li><a href="/transport#critical-ill">Transport of Critically Ill</a></li>
          <li><a href="/transport#overseas-transport">Overseas Transport</a></li>
        </ul>
      </li>
      <li>
        Event Standby
        <ul>
          <li><a href="/event-standby">Information</a></li>

          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </li>
      <li>
        Sales &amp; Rental
        <ul>
          <li><a href="/sales-purchase">Rental of Oxygen Cylinders</a></li>
          <li><a href="/sales-purchase#purchaseAED">Sales of AED</a></li>
        </ul>
      </li>
      <li><a href="/contact-us">Contact Us</a></li>
    </ul>
    <MapComponent />
    <CallBanner />

    <template v-slot:sidebar>
      <AddressArea />
      <FacebookWidget />
    </template>
  </default-page>
</template>
