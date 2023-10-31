$(function () {

  var fnGetWinInfo = function () {

    window.scry = $(window).scrollTop() //다른 js파일에서도 사용할 수 있도록 전역변수로 만든다.
    window.scrx = $(window).scrollLeft()
    window.winh = $(window).height()
    window.winw = $(window).width()

  }

  fnGetWinInfo()

  $(window).scroll(function () {

    fnGetWinInfo()

  })


  $(window).resize(function () {

    fnGetWinInfo()

  })

})