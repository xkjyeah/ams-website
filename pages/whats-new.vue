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
        }
      ]
    }
  }
}
</script>

<template>
<default-page>
  <img src="/images/what'snews_img.png" width="200" border="0" hspace="20" vspace="20" align="left" />
  <h3>Oct 2016 </h3>
  <p>
    We have purchased the AutoPulse® Resuscitation System by Zoll to provide high-quality automated CPR to victims of sudden cardiac
    arrest on the move. This device is NOW available at our First Aid station during medical cover for large scale events.
  </p>
  <p>The Autopulse has improved outcomes in numerous clinical trials. The AutoPulse’s stabilizing board can be placed on a
    soft stretcher, so that high-quality CPR can continue while our paramedics carry the patient to the nearest ambulance for hospital evacuation.
  </p>
  <p>
    Find out more about AutoPulse
    <a href="http://www.zoll.com/medical-products/cardiac-support-pump/autopulse/"
        target="new" class="text_link">here</a>.
  </p>
  <div slot="sidebar">
    <enquiry-box/>
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
