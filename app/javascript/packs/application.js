// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$('.popover-markup>.trigger').popover({
  html: true,
  title: function () {
      return $(this).parent().find('.head').html();
  },
  content: function () {
      return $(this).parent().find('.content').html();
  }
});
// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
console.log('hello');
$(function () {
  $('[data-toggle="popover"]').popover({html: true})
})
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initMapbox } from '../plugins/init_mapbox';
import {displayinfo, getweatherdata } from '../plugins/getweather';
import {previewImageOnFileSelect} from '../components/photo_preview';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  getweatherdata();
  initMapbox();
  previewImageOnFileSelect();
});


// $(function () {
//   $('#social-media-popover').popover({
//     container: 'body',
//     html: 'true',
//     content: '<div><img width="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT69F22uXgbwgFnNQmXL3ZQFQOKCnAWZoVr0Q&usqp=CAU"/></div>'
//   })
// })
// $(document).ready(function() {
//   $("#social-media-popover").popover({
//       placement: 'bottom',
//       html: 'true',
//       title: '<span><strong>title</strong></span>'+
//               '<button type="button" id="close" onclick="$(&quot;#example&quot;).popover(&quot;hide&quot;);">&times;</button>',
//       content: 'test'
//   });
// // });
// <script>
// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// </script>

// var confirmed = $('.simpleConfirm').confirm('Are you sure?');
// if(confirmed) { 
//   /* do something when user clicks 'ok' */ 
// } else {
//  /* optionally do something else when user clicks 'cancel' */ 
// }