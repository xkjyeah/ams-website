<script>

export default {
  created() {
    var newElem = document.createElement("DIV");
    document.body.appendChild(newElem);

    this.formBackdrop = new Vue({
      el: newElem,
      template: '<FormBackdrop />',
      data: {
        open: false
      }
    })
  },
  data() {
    formBackdrop: null,
  }
  methods: {
    open($event) {
      $event.preventDefault()
      this.formBackdrop.open = true
    }
    close($event) {
      $event.preventDefault()
      this.formBackdrop.open = false
    }
  }
}

</script>
