<template>
  <div :is="body.component"></div>
</template>

<script>
export default {
  props: ['body']
}
</script>
