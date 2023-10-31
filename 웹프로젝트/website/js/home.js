$(function () {

  //rolling
  $(`.rolling`).clone().appendTo(`.rolling_container`)
  // var Clone = document.querySelector(`.rolling`).cloneNode(true)
  // document.querySelector(`.rolling_container`).append(clone)











  //swiper
  const swiper = new Swiper('.home_visual', {
    //autoplay:false,
    autoplay: { delay: 5000, }, //5초마다 한번씩 넘기기
    loop: true, // 계속 반복하기
    navigation: { // 양쪽 화살표
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: { // 아래쪽 도트
      el: '.indicator',
      type: 'bullets',
      clickable: true,
    },

    slidesPerView: 1,  //1 입력시 화면에 한장 보여주는 속성
    slidesPerGroup: 1,

  });













  var scrollMotion = function () {

    var isStartMotion = true;
    var raf;

    if (!isStartMotion) return

    isStartMotion = false;

    raf = requestAnimationFrame(function () { // 사양에 맞춰 애니메이션이 실행될 때에만 true로 바꾼다. 사양이 안되면 애니메이션의 속도가 줄어듬

      $(`section.feature figure`).each(function () {

        var ost = $(this).offset().top

        if (scry >= ost - winh * 0.9) {

          $(this).addClass('active')


        } else {

          $(this).removeClass('active')

        }

      })//each

      var ost = $(`section.feature figure a div`).offset().top
      var osh = $(`section.feature figure a div`).innerHeight()
      var meta = 0 + (scry - (ost - winh * 0.5 + osh * 0.5)) * 0.1
      if (meta > 10) meta = 10 // meta가 10 초과되면 다시 10로 초기화
      if (meta < -10) meta = -10
      console.log(meta);

      $(`section.feature figure a div img`).css({ 'transform': `translateY(${meta}%) scale(1.4)` })


      t = $(`.latest .bottom_contents`).offset().top
      if (scry >= t - winh * .8) {
        $(`.latest .bottom_contents`).addClass('active')
      } else {
        $(`.latest .bottom_contents`).removeClass('active')

      }

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