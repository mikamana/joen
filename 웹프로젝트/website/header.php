<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.css' integrity='sha512-2dJkRM/DmWkZqINs3QixNKKsgG9mlBT9/PieLVF8OEGHCpPNBoPFYmGPL/yD7JuQVVm2IESF5K0zTDBaf4qehQ==' crossorigin='anonymous' />
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/sub-layout.css">
  <link rel="stylesheet" href="./css/home.css">
  <link rel="stylesheet" href="./css/greet.css">
  <link rel="stylesheet" href="./css/preloader.css">
  <link rel="stylesheet" href="./css/location.css">
  <link rel="stylesheet" href="./css/biz-intro.css">
  <link rel="stylesheet" href="./css/biz-area.css">
  <link rel="stylesheet" href="./css/gallery.css">
  <link rel="stylesheet" href="./css/online.css">
  <link rel="stylesheet" href="./css/faq.css">
  <link rel="stylesheet" href="./css/board.css">
  <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
  <script src="https://kit.fontawesome.com/8d9a711cad.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="./js/common.js"></script> <!-- 모든 js 파일에 공통적으로 쓰일 js파일이라 jquery 뒤에 넣어준다. -->
  <title>header</title>
</head>

<body>
  <?php include "preloader.php" ?>
  <header>
    <nav class="member">
      <div class="inner center">
        <ul class="sns_list">
          <li><a href="#">로그인</a></li>
          <li><a href="#">회원가입</a></li>
          <li><a href="#">SNS</a></li>
        </ul>
      </div>
    </nav>
    <div class="inner bottom">
      <h1>
        <a href="./index.php">
          <img src="./img/icons/logo.png" alt="로고">
        </a>
      </h1>
      <script src="./js/gnb.js"></script>
      <nav class="gnb">
        <?php include "menu.php" ?>
      </nav>
    </div>
  </header>
  <nav class="quick">
    <ul>
      <li><a href="#"><b>quick</b><br>menu</a></li>
      <li><a href="./biz-area.php"><i class="fa-solid fa-building"></i>
          <p>사업분야</p>
        </a></li>
      <li><a href="./online.php"><i class="fa-solid fa-phone"></i>
          <p>온라인문의</p>
        </a></li>
      <li><a href="./location.php"><i class="fa-solid fa-map-location-dot"></i>
          <p>오시는길</p>
        </a></li>
      <li><i class="fa-last fa-solid fa-arrow-up"></i><button class="top">Top</button></li>
    </ul>
  </nav>