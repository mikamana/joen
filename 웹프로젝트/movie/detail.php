<?php include "./header.php" ?>
<script type="module" src="./js/detail.js"></script>
<figure class="slide">
  <!-- 동적생성 -->
</figure>
<main class="detail-content">
  <section class="detail-section">
    <img class="poster" src="" alt="이미지">
    <div class="detail-info">
      <h2 class="title"></h2>
      <ul class="meta_list">
        <li>
          <div class="vote_average">
            <img class="logo-small" src="./img/logo-square.png" alt="로고서브이미지">
            <svg viewbox="0 0 100 100">
              <circle cx="50" cy="50" r="35" class="line" /><!-- cx,cy(센터)는 viewbox의 값을 기준으로 잡는다. -->
              <circle pathlength="10" cx="50" cy="50" r="35" class="progress" /> <!-- 도표, 진행상황 -->
              <!-- pathlength 지름의 길이 -->
            </svg>
            <b class="average"></b>
          </div>
          <small class="vote_cnt"></small>
        </li>
        <li>
          <i class="fa-solid fa-clock-rotate-left"></i>
          <em class="hour"></em>
          <small>Hour</small>
          <em class="min"></em>
          <small>Min</small>
        </li>
        <li>
          <i class="fa-regular fa-calendar-check"></i>
          <small class="date"></small>
        </li>
        <li class="genres">
          <i class="fa-solid fa-tags"></i>
          <small class="genre"></small>
        </li>
      </ul>
      <p class="overview"></p>
      <ul class="info">
        <li>
          <i class="fa-solid fa-clapperboard"></i>
          <small>제목</small>
          <em class="original_title"></em>
        </li>
        <li>
          <i class="fa-solid fa-building"></i>
          <small>제작사</small>
          <em class="production"></em>
        </li>
        <li>
          <i class="fa-solid fa-user-tie"></i>
          <small>감독</small>
          <em class="producer"></em>
        </li>
        <li>
          <i class="fa-solid fa-user-gear"></i>
          <small>제작</small>
          <em class="director"></em>
        </li>
      </ul>
    </div>
  </section>
  <section class="common_section scroll-section people-section">
    <h2 class="common_title">
      <i class="fa-solid fa-user-tie"></i>
      <em>출연진</em>
    </h2>
    <div class="grid-container">
    </div><!-- 동적생성 -->

  </section>
  <section class="common_section scroll-section img-section">
    <h2 class="common_title">
      <i class="fa-solid fa-image"></i>
      <em>관련 이미지</em>
    </h2>
    <div class="grid-container">

    </div><!-- 동적생성 -->
  </section>
  <section class="common_section scroll-section video-section">

    <h2 class="common_title">
      <i class="fa-solid fa-video"></i>
      <em>관련 영상</em>
    </h2>
    <div class="grid-container">

    </div><!-- 동적생성 -->
  </section>
  <section class="common_section movie-grid-section wrap-section similar-section">
    <h2 class="common_title">
      <i class="fa-solid fa-photo-film"></i>
      <em>유사한 영화</em>
    </h2>
    <div class="grid-container">
      <!-- 동적생성 -->

    </div>
  </section>
</main>
<?php include "video-modal.php" ?>
<?php include "./person-modal.php" ?>
<?php include "./footer.php" ?>

<!-- 
<i class="fa-solid fa-clock-rotate-left"></i>
//
<i class="fa-regular fa-calendar-check"></i>
//
<i class="fa-solid fa-tags"></i>
//


<i class="fa-solid fa-clapperboard"></i>
//
<i class="fa-solid fa-building"></i>
//
<i class="fa-solid fa-user-tie"></i>
//
<i class="fa-solid fa-user-gear"></i>
//
<i class="fa-solid fa-users"></i>
<i class="fa-solid fa-image"></i>
//
<i class="fa-solid fa-video"></i>
//
<i class="fa-solid fa-photo-film"></i>
//
-->