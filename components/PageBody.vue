<script>
export default {
  props: {
    'body': {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<template>
  <div :is="body.component" />
</template>
