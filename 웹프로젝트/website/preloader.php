<script>
  $('body').css({
    'overflow': 'hidden'
  })
  // body 엘리먼트는 구문분석을 하기전에 찾을 수 있다. 
  //사이트 들어오자마자 스크롤을 막는다.
  $(window).load(function() { // ready 는 태그만 읽음, load는 이미지, 비디오를 다 읽음 > ready가 빠름

    $(`.preloader`).fadeOut()
    $('body').css({
      'overflow': 'auto'
    })

  })
</script>
<div class="preloader">
  <span class="loader"></span>
</div>