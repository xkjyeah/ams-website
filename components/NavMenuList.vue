<script>
export default {
  props: {
    'label': {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      opened: false
    }
  }
}
</script>
<template>
  <li
    class="has-sub"
    :class="{opened: opened}"
  >
    <a
      href="javascript:void(0)"
      @click="opened = !opened"
    >{{ label }}</a>
    <ul>
      <slot />
    </ul>
  </li>
</template>
