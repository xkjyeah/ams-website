<script>
// So that grecaptcha doesn't call nothing
window.onloadCallback = () => {};

export default {
  mounted() {
    const render = () =>
      window.grecaptcha.render(this.$refs.root, {
        sitekey: "6LcZNygTAAAAAKPt757U3VcKOzCXGkLyl2sC2jCp",
      });

    if (window.grecaptcha) {
      render();
    } else {
      // Let grecaptcha call this when it's loaded
      window.onloadCallback = render;
    }
  },
};
</script>

<template>
  <div ref="root" />
</template>
