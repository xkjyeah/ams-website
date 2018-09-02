<script>
export default {
  head: {
    title: 'Thank You',
    // category: 'contact',
  }
}
</script>

<template>
<default-page>
  <h2>Submission error</h2>
  <p>
    Ooops! There was an error during the form submission! Would you be able to give us a call instead?</p>
  <p>Our number is <strong>6281 3132</strong>.
  </p>
  <p>You can also email us directly at <strong>mail@ambulanceservice.com.sg</strong>
  </p>
  <div slot="sidebar">
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
