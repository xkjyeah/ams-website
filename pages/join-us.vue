<script>
export default {
  head: {
    title: 'Company Profile and Crew',
    category: 'about',
  }
}
</script>

<template>
<default-page>
  <div>
    <h2>Joining AMS</h2>

    <p>
      At AMS, we are renowned for keeping our crew trained and up-to-date with the latest courses / equipment. We are always looking for new employees, so feel free to enquire if we have any job vacancies. If you would like to join us, please <a class="text_link"
          href="assets/Employment-Application.docx">download our employment application form</a> and email it to us at mail@ambulanceservice.com.sg
    </p>

    <h2>Employee Benefits</h2>

    <ol>
      <li>Free training and development programmes</li>
      <li>Competitive salaries and bonuses</li>
      <li>Drivers may drive ambulance home (subject to approval)</li>
      <li>Wheelchair lifts in most ambulances to protect your health and safety</li>
      <li>Participate in high-profile events</li>
    </ol>
    <div id="inner_image"><img src="images/company-crew.jpg" /></div>
  </div>
  <div slot="sidebar">
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
