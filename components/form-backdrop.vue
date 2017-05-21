<template>
  <div class="backdrop" v-show="open">
    <a href="#" @click="close">Close</a>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeTdOE7fRZcLg3L5davFGs-yVL3APoYAafDQia-S2cfui5WqQ/viewform?embedded=true"
    class="iframe" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>
</template>

<style lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    width: 400px;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);

    a {
      color: white;
    }

    .iframe {
      position: absolute;
      top: 30px;
      bottom: 30px;
      right: 10px;
      left: 10px;
    }
  }
</style>

<script>
export default {
  props: ['open'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>
