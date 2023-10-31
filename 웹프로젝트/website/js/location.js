
$(function () {

  var scrollMotion = function () {

    var isStartMotion = true;
    var scry = $(window).scrollTop()
    var raf;

    if (!isStartMotion) return
    isStartMotion = false;

    raf = requestAnimationFrame(function () {

      $(`section.location_section>*`).each(function () {

        var t = $(this).offset().top

        if (scry >= t - winh * 0.8) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }

      })

      isStartMotion = true;

    })
  }


  scrollMotion()
  $(window).resize(function () {

    scrollMotion()

  })

  $(window).scroll(function () {

    scrollMotion()


  })


})


//ready