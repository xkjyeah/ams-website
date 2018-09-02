<script>
export default {
  head: {
    title: 'Join us',
    meta: [{
      hid: 'description',
      name: 'description',
      content: 'Ambulance Medical Service is looking for passionate individuals to join our team. We offer free training programs to the qualified candidate! To apply, download the application form here!'
    }]
  }
}
</script>

<template>
<default-page>
  <div>
    <h2>Jobs at AMS</h2>

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
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJ509wOWpV6pSocYx5kOrNRuRZWedM_NGUeroycZMF0nSFuQ/viewform?usp=sf_link">
      fill up the online job application form</a>.
    </p>

    <h2>Employee Benefits</h2>

    <ol>
      <li>Free training and development programmes</li>
      <li>Competitive salaries and bonuses</li>
      <li>Drivers may drive ambulance home (subject to approval)</li>
      <li>Wheelchair lifts in most ambulances to protect your health and safety</li>
      <li>Participate in high-profile events</li>
    </ol>
    <div id="inner_image"><img src="/images/company-crew.jpg" /></div>
  </div>
  <div slot="sidebar">
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
