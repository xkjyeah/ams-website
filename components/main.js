import FormBackdrop from './form-backdrop.vue';
import Vue from 'vue/dist/vue.js';

document.addEventListener('DOMContentLoaded', () => {
  /*
    Enquiry form
  */
  var newElem = document.createElement("DIV");
  document.body.appendChild(newElem);

  Vue.component('FormBackdrop', FormBackdrop)

  var formBackdrop = new Vue({
    el: newElem,
    template: '<FormBackdrop @close="open=false" :open="open"/>',
    data: {
      open: false
    }
  })

  var l = document.querySelectorAll(".enquiry-box");
  for (let i of l) {
    i.addEventListener('click', () => {
      formBackdrop.open = true;
    })
  }
})
