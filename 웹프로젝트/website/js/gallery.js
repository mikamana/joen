$(function () {


  var scrollMotion = function () {

    var isStartMotion = true;
    var raf;

    if (!isStartMotion) return
    isStartMotion = false;

    raf = requestAnimationFrame(function () {

      isStartMotion = true;

      if (scry)

        $(`ul.gallery_list>li`).each(function () {

          var ost = $(this).offset().top
          var osh = $(this).innerHeight()
          if (scry >= ost - winh * 0.8 + osh * 0.5) {

            $(this).addClass('active')

          } else {

            $(this).removeClass('active')

          }
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