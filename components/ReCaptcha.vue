<script>
export default {
  mounted () {
    window.grecaptcha.render(
      this.$refs.root,
      {
        sitekey: '6LcZNygTAAAAAKPt757U3VcKOzCXGkLyl2sC2jCp'
      }
    )
  }
}
</script>

<template>
  <div ref="root" />
</template>
