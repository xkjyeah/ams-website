<script>
export default {
  methods: {
    trackGA() {
      if (window.gtag) {
        window.gtag('event', 'conversion', { 'send_to': 'AW-952434988/sbHXCMT5-IcBEKyClMYD' })
      }
    }
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service provides 24/7 private transportation for medical emergencies in Singapore, as well as patient evacuation to some nearby countries. Call us at 6281-8111 or drop us a message here!'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/contact-us/", hreflang: 'x-default' },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/contact-us/", hreflang: 'en-sg' }
      ]
    }
  }
}
</script>

<template>
  <default-page>
    <h1>Contact Us</h1>
    <form id="form1" action="https://ams-bookings.ambulanceservice.com.sg/enquiry" method="post" name="form1"
      @submit="trackGA">
      <input type="hidden" name="redirect" value="http://www.ambulanceservice.com.sg/contact-success">
      <label class="enquiry_text_area">
        <span>Name:</span>
        <input name="name" size="32" type="text" placeholder="John">
      </label>
      <label class="enquiry_text_area">
        <span>Contact No:</span>
        <input type="tel" name="telephone" size="32" placeholder="6123 4567">
      </label>
      <label class="enquiry_text_area">
        <span>Email:</span>
        <input name="email" size="32" type="email" placeholder="john@example.com">
      </label>
      <label class="enquiry_text_area">
        <span>Organization:</span>
        <input name="organization" size="32" type="text" placeholder="ACME Corporation">
      </label>
      <label class="enquiry_text_area">
        <span>Service:</span>
        <select name="service">
          <option selected="selected">Services (Please select one)</option>
          <option value="Local Transport">Local Transport</option>
          <option value="Transport of Critically Ill">Transport of Critically Ill</option>
          <option value="Overseas Transport">Overseas Transport</option>
          <option value="Event StandBy">Event StandBy</option>
          <option value="Rent Oxygen Cylinders">Rent Oxygen Cylinders</option>
          <option value="Purchase AED">Purchase AED</option>
        </select>
      </label>
      <label class="enquiry_text_area">
        <span>Message:</span>
        <textarea name="message" placeholder="Message" />
      </label>

      <ReCaptcha />

      <label class="enquiry_text_area">
        <button type="submit">
          Submit
        </button>
      </label>
    </form>
    <br>
    <MapComponent />

    <template v-slot:sidebar>
      <address-area />
      <facebook-widget />
    </template>
  </default-page>
</template>
