$(function () {

  var scrollMotion = function () {

    var isStartMotion = true;
    var ralf;
    console.log(scry);

    if (!isStartMotion) return
    isStartMotion = false;

    ralf = requestAnimationFrame(function () {

      $(`section.greet_section>*`).each(function () {

        var t = $(this).offset().top

        if (scry >= t - winh * 0.8) {

          $(this).addClass('active')

        } else {

          $(this).removeClass('active')

        }

      })

      /* img  페러렉스 */

      var t = $(`section.greet_section figure`).offset().top
      var h = $(`section.greet_section figure`).innerHeight()
      var meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * 0.07

      if (meta < -13) { meta = -13 }
      if (meta > 13) { meta = 13 }
      $(`section.greet_section figure img`).css({
        'transform': `scale(1.5) translateY(${meta}%)`
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

})//ready