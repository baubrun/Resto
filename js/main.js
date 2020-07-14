$(document).ready(function(){

    // rRipples
    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0
      });

      //img magnigic-popup
      $(".img-gallery-popup-container").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
          enabled: true,
          type: "image"
        }
      })


})