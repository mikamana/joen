<?php include "header.php" ?>
<script src="./js/home.js"></script>
<section class="home_visual">
  <div class="swiper-wrapper"><!-- 넓이는 알아서 지정 높이는 지정해야함-->
    <figure class="swiper-slide"><img src="./img/home/main01.jpg" alt="">
      <figcaption>
        <h6>creative design</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </figcaption>
    </figure>
    <figure class="swiper-slide"><img src="./img/home/main02.jpg" alt="">
      <figcaption>
        <h6>creative design</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </figcaption>
    </figure>
    <figure class="swiper-slide"><img src="./img/home/main03.jpg" alt="">
      <figcaption>
        <h6>creative design</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </figcaption>
    </figure>
    <figure class="swiper-slide"><img src="./img/home/main04.jpg" alt="">
      <figcaption>
        <h6>creative design</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </figcaption>
    </figure>
  </div>
  <button class="swiper-button-prev"><i class="fa-solid fa-arrow-left"></i></button>
  <button class="swiper-button-next"><i class="fa-solid fa-arrow-right"></i></button>
  <div class="indicator"></div>
</section>
<main>
  <section class="feature">
    <figure>
      <a href="./biz-intro.php">
        <div>
          <img src="./img/home/banner01.jpg" alt="배너1">
          <figcaption>
            <h3>BUSINESS INFO</h3>
            <p>회사만의 특화되고 세분화된 사업영역을 바탕으로
              최고의 비즈니스를 제안합니다.</p>
          </figcaption>
        </div>
      </a>
    </figure>
    <figure>
      <a href="./online.php">
        <div>
          <img src="./img/home/banner02.jpg" alt="배너2">
          <figcaption>
            <h3>ONLINE INQUIRY</h3>
            <p>온라인 무료상담 및 견적받기로 빠르고 효율적인
              상담을 받으세요.</p>
          </figcaption>
        </div>
      </a>
    </figure>
    <figure>
      <a href="./gallery.php">
        <div>
          <img src="./img/home/banner03.jpg" alt="배너3">
          <figcaption>
            <h3>PRODUCT INFO</h3>
            <p>최고의 기술력과 최상의 품질, 착한 가격으로<br>
              보답하여 드리겠습니다.</p>
          </figcaption>
        </div>
      </a>
    </figure>
    <figure>
      <a href="./location.php">
        <div>
          <img src="./img/home/banner04.jpg" alt="배너4">
          <figcaption>
            <h3>LOCATION INFO</h3>
            <p>당사로 찾아오시는 길을 상세하게 안내해<br>
              드리겠습니다.</p>
          </figcaption>
        </div>
      </a>
    </figure>
  </section>
  <section class="latest">
    <article class="news">
      <div class="center">
        <h3><i class="fa-solid fa-volume-high"></i> LATEST NEWS</h3>
        <div class="rolling_container">
          <div class="rolling">
            <p>1. Lorem ipsum dolor sit amet</p>
            <p>2. Lorem ipsum dolor sit amet</p>
          </div><!-- rolling -->
        </div>
      </div>
    </article>
    <div class="bottom_contents">
      <article class="latest_notice">
        <h3><i class="fa-solid fa-volume-low"></i>notice</h3>
        <ul>
          <li>
            <a href="#">[공지사항] 최신글 테스트 5번 Lorem, ipsum dolor.</a>
            <time>2016-12-21</time> <!-- 시간표시엘리먼트 -->
          </li>
          <li>
            <a href="#">[공지사항] 최신글 테스트 4번</a>
            <time>2016-12-21</time> <!-- 시간표시엘리먼트 -->
          </li>
          <li>
            <a href="#">[공지사항] 최신글 테스트 3번</a>
            <time>2016-12-21</time> <!-- 시간표시엘리먼트 -->
          </li>
          <li>
            <a href="#">[공지사항] 최신글 테스트 2번</a>
            <time>2016-12-21</time> <!-- 시간표시엘리먼트 -->
          </li>
          <li>
            <a href="#">[공지사항] 최신글 테스트 1번</a>
            <time>2016-12-21</time> <!-- 시간표시엘리먼트 -->
          </li>
        </ul>
        <a href="./notice.php" class="more">MORE +</a>
      </article>

      <article class="latest_gallery">
        <h3><i class="fa-regular fa-image"></i>gallery</h3>
        <ul>
          <li>
            <a href="#;">
              <img src="./img/sub3/1.jpg" alt="1번이미지">
              <h4>img title1</h4>
            </a>
          </li>
          <li>
            <a href="#;">
              <img src="./img/sub3/2.jpg" alt="1번이미지">
              <h4>img title1</h4>
            </a>
          </li>
          <li>
            <a href="#;">
              <img src="./img/sub3/3.jpg" alt="1번이미지">
              <h4>img title1</h4>
            </a>
          </li>
          <li>
            <a href="#;">
              <img src="./img/sub3/4.jpg" alt="1번이미지">
              <h4>img title1</h4>
            </a>
          </li>
        </ul>
        <a href="./gallery.php" class="more">MORE +</a>
      </article>

      <article class="banner">
        <a href="tel:01012345678">
          <img src="./img/sub/side.gif" alt="커스텀이미지">
        </a>
      </article>
    </div>
  </section>
</main>
<?php include "footer.php" ?>