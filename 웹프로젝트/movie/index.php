<?php include "header.php" ?>
<!-- 헤더에 홈.js를 넣지않고 index에 넣은 이유는 헤더에 넣으면 다른 페이지에서도 해당 스크립트가 작동이 되기때문에-->
<script src="./js/home.js" type="module"></script>
<!--   API 키 : 4083cf1422a7ce0777bcce27836bb4ff -->
<section class="home-visual">
  <div class="swiper-wrapper"> <!-- swiper에 넓이 자동으로 설정되어 넓이 설정하면 안됨 -->
    <!-- 화면크기에 따라 넓이,높이 조절하고싶으면 넓이와 높이 둘다 설정하면 안됌 -->
    <!-- <figure class="swiper-slide">
      <img src="" alt="">
      <figcaption class="text_box">
        <small class="original_title">영화 원제목</small>
        <h6 class="title">한글 영화제목 : 부제부제부제부제</h6>
        <p class="overview">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium deserunt deleniti, vel ab itaque illo consequuntur animi corporis consectetur minima, nesciunt blanditiis. Deleniti eos in, ipsum amet quod minima.
        </p> 
        <button class="play_btn"><i class="fa-brands fa-google-play"></i>재생</button>
        <button class="detail_btn"><i class="fa-solid fa-circle-info"></i>상세정보</button>
      </figcaption>
    </figure> -->
    <!-- figcaption 자식으로 a(앵커)를 못씀 유효성문제 -->

    <!--     <figure class="swiper-slide">2</figure>
    <figure class="swiper-slide">3</figure>
    <figure class="swiper-slide">4</figure>
    <figure class="swiper-slide">5</figure> -->
  </div>
  <button class="next"></button>
  <button class="prev"></button>
  <button class="wheel_btn">
    <i class="fa-solid fa-arrow-down"></i>
  </button>
</section>
<?php include "video-modal.php" ?>

<main class="home-content">
  <section class="common_section movie-grid-section swiper-section popular-section">
    <h2 class="common_title">
      <i class="fa-solid fa-clapperboard"></i>
      <span>인기 영화</span>
    </h2>
    <div class="carousel grid-container"> <!-- 동적생성 -->
      <div class="swiper-wrapper">
      </div>
      <button class="next"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="prev"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </section>
  <section class="common_section movie-grid-section swiper-section upcoming-section">
    <h2 class="common_title">
      <i class="fa-solid fa-calendar-days"></i>
      <span>최신,개봉 예정</span>
    </h2>
    <div class="carousel grid-container"> <!-- 동적생성 -->
      <div class="swiper-wrapper">

      </div>
      <button class="next"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="prev"><i class="fa-solid fa-arrow-right"></i></button>
    </div>

  </section>
  <section class="common_section movie-grid-section swiper-section rated-section">
    <h2 class="common_title">
      <i class="fa-solid fa-square-poll-vertical"></i>
      <span>평점이 높은 명작</span>
    </h2>
    <div class="carousel grid-container"> <!-- 동적생성 -->
      <div class="swiper-wrapper">

      </div>
      <button class="next"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="prev"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </section>
  <section class="common_section movie-grid-section swiper-section trend-section">
    <h2 class="common_title">
      <i class="fa-solid fa-comments"></i>
      <span>주간 화제의 영화들</span>
    </h2>
    <div class="carousel grid-container"> <!-- 동적생성 -->
      <div class="swiper-wrapper">

      </div>
      <button class="next"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="prev"><i class="fa-solid fa-arrow-right"></i></button>
    </div>

  </section>
</main>
<!-- https://api.themoviedb.org/3/movie/latest? 쿼리스트링이 시작될때는 ?을 붙여야한다.-->
<!-- https://api.themoviedb.org/3/movie/latest?api_key={key}&language=ko-KR&include_adult=false&sort_by=popularity 쿼리스트링의 파람은 api_key include_와 같은 것 ?-->
<?php include "footer.php" ?>