<script>
export default {
  head() {
    return {
      title: 'Join us',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service is looking for passionate individuals to join our team. We offer free training programs to the qualified candidate! To apply, download the application form here!'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/join-us/", hreflang: 'x-default' },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/join-us/", hreflang: 'en-sg' }
      ]
    }
  }
}
</script>

<template>
  <default-page>
    <h1>Join Us</h1>
    <div>
      <h2>Jobs at AMS</h2>
      <p>We’re always looking for more passionate individuals with a heart for service to join our crew!</p>

      <h3>Positions available:</h3>
      <ul>
        <li>Paramedic</li>
        <li>Medic</li>
        <li>Driver</li>
      </ul>

      <p>
        At AMS, we are renowned for keeping our crew trained and up-to-date with the latest courses / equipment.
        We are always looking for new employees.
        If you would like to join us, please
        email us with your CV, or give us a call!
      </p>

      <h2>Employee Benefits</h2>

      <ol>
        <li>Free training and development programmes</li>
        <li>Competitive salaries and bonuses</li>
        <li>Drivers may drive ambulance home (subject to approval)</li>
        <li>Wheelchair lifts in most ambulances to protect your health and safety</li>
        <li>Participate in high-profile events</li>
      </ol>
      <div id="inner_image">
        <img src="/images/company-crew.jpg">
      </div>
    </div>
    <template v-slot:sidebar>
      <address-area />
      <facebook-widget />
    </template>
  </default-page>
</template>
