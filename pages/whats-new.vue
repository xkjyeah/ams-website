<script>
export default {
  head () {
    return {
      title: 'What\'s New',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service is committed to continuously upgrading our equipment to serve our patients better in emergencies. See our latest updates here!'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        },
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/whats-new/", hreflang: 'x-default'},
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/whats-new/", hreflang: 'en-sg'},
      ]
    }
  }
}
</script>

<template>
  <default-page>
    <h1>What's New</h1>
    <h3>April 2020</h3>
    <p>
      As of April 2020, we have expanded our fleet to 39 ambulances!
    </p>
    <p>
      We are proud to support COVID-19 since February 2020 and have dedicated a section of our fleet to support 993 transport services of suspect and confirmed cases. Rest assured that to avoid cross-infectivity with our regular patients, the COVID team is separate from our regular teams. Our COVID crew is well trained and adheres to strict personal-protection and sanitisation protocol. Preventive measures have also been ramped up for all regular cases.
    </p>
    <p>
      Under new MOH regulations for improving stricter standards for <nuxt-link to="/">private ambulances</nuxt-link>, AMS has been accredited for both Emergency Ambulance Services (EAS) and Medical Transport Services (MTS). With our commitment to maintaining professional services and top-line equipment, we are one of the earliest private ambulances to pass accreditation standards!
    </p>

    <h3>November 2019</h3>
    <p>
      We have received ISO 9001 : 2015 from November 2019. It is awarded to companies that meet requirements for a quality management system that consistently meet high standards of service and customer satisfaction. See more details at https://www.iso.org/standard/62085.html
    </p>
    <p>
      We have also been promoted from BizSafe Level 3 to BizSafe Level 4!
    </p>

    <div slot="sidebar">
      <enquiry-box />
      <address-area />
      <facebook-widget />
    </div>
  </default-page>
</template>
