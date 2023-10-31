$(document).ready(function () {

  $(`.gnb>ul>li`).mouseenter(function () {

    $(this).children('ul').stop().slideDown(200)

  })

  $(`.gnb>ul>li`).mouseleave(function () {

    $(this).children('ul').stop().slideUp(200)

  })

  var rafId;
  var isMotionStart = true;
  var rafId2;
  var isQuickStart = true;


  var fnHeaderMotion = function () {

    var snsTop = $(`nav.member`).height()
    // var scry = $(window).scrollTop()
    if (!isMotionStart) return

    isMotionStart = false;

    rafId = requestAnimationFrame(function () {

      if (scry >= snsTop) {

        $(`header`).addClass('active')
        // $(`nav.member`).css({ 'display': 'none' })

      } else {

        $(`header`).removeClass('active')

      }

      isMotionStart = true;

    })

  }//fnHeaderMotion

  var fnQuickMenu = function () {

    if (!isQuickStart) return
    isQuickStart = false;

    var osh = $(`.quick`).innerHeight() // 브라우저의 높이값은 그냥 height 잡고 요소의 높이는 innerHeight을 잡는게좋다.
    // var ost = $(window).offset().top()

    rafId2 = requestAnimationFrame(function () {

      $(`.quick`).css({ 'top': scry + winh * 0.5 - osh * 0.5 })
      if (scry >= 300) {

        $(`.quick`).addClass('active')


      } else {

        $(`.quick`).removeClass('active')

      }

      isQuickStart = true;

    })


  }

  $(`.quick .top`).click(function () {

    window.scrollTo({

      top: 0,
      behavior: "smooth"

    })

  })


  fnQuickMenu()

  fnHeaderMotion()

  $(window).scroll(function () {

    fnHeaderMotion()
    fnQuickMenu()

  })

  $(window).resize(function () {

    fnHeaderMotion()
    fnQuickMenu()

  })

})