$(function () {

  var scrollMotion = function () {

    var isStartMotion = true;
    var raf;

    if (!isStartMotion) return
    isStartMotion = false;

    raf = requestAnimationFrame(function () {

      isStartMotion = true;


      $(`section.biz_intro>p`).each(function () {

        var ost = $(this).offset().top
        if (scry > ost - winh * .8) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }

      })//each

      $(`.biz_intro figure`).each(function () {

        var ost = $(this).offset().top
        var osh = $(this).innerHeight()
        var meta = 1 + Math.abs(scry - (ost - winh * 0.5 + osh * 0.5)) * -0.0005
        if (meta < 0) meta = 0
        $(this).css({
          'transform': `scale(${meta})`,
          'opacity': meta,
        })

      })

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