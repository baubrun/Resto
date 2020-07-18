$(document).ready(function () {

  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("change")
  })

  // sticky nav
  $(window).scroll(function () {
    let pos = $(this).scrollTop()
    if (pos >= 718) {
      $(".navbar").addClass("navbar-background")
      $(".navbar").addClass("fixed-top")
    } else {
      $(".navbar").removeClass("navbar-background")
      $(".navbar").removeClass("fixed-top")
    }
  })

  // sticky arrow scroll-to-top 
  $(window).scroll(function () {
    let pos = $(this).scrollTop()
    if (pos >= 718) {
      $("#to-top").addClass("scroll-to-top ")
    } else {
      $("#to-top").removeClass("scroll-to-top ")
    }
  })


  // smooth scroll
  $(".nav-item a, .header-link, #to-top").click(function (evt) {
    evt.preventDefault()

    let target = $(this).attr("href")
    $("html, body").stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000)
  })

  // Ripples
  $("#header, .info").ripples({
    dropRadius: 25,
    perturbance: 0
  });


  //img magnific-popup
  $(".img-gallery-popup-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
      type: "image"
    }
  })
})