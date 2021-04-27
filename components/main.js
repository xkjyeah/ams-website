import FormBackdrop from './form-backdrop.vue'
import Vue from 'vue/dist/vue.js'

document.addEventListener('DOMContentLoaded', () => {
  /*
    Enquiry form
  */
  var newElem = document.createElement('DIV')
  document.body.appendChild(newElem)

  Vue.component('FormBackdrop', FormBackdrop)

  var formBackdrop = new Vue({
    el: newElem,
    data: {
      open: false
    },
    template: '<FormBackdrop @close="open=false" :open="open"/>'
  })

  var l = document.querySelectorAll('.enquiry-box')
  for (let i of l) {
    i.addEventListener('click', () => {
      formBackdrop.open = true
    })
  }
})
