<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@400;500;700&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/common/reset.css">
    <link rel="stylesheet" href="./css/common/common.css">
    <link rel="stylesheet" href="./css/guide/guide.css">
    <link rel="stylesheet" href="./css/header/header.css">
    <link rel="stylesheet" href="./css/header/menu.css">
    <link rel="stylesheet" href="./css/visual/visual.css">
    <link rel="stylesheet" href="./css/contents/quick.css">
    <link rel="stylesheet" href="./css/contents/news.css">
    <link rel="stylesheet" href="./css/contents/notice.css">
    <link rel="stylesheet" href="./css/contents/site.css">
    <link rel="stylesheet" href="./css/footer/footer.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <script src="https://kit.fontawesome.com/8d9a711cad.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script type="module" src="./js/header.js"></script>
    <title>KIST 전자도서관</title>
</head>

<body>
    <div class="menu_all_wrap">
        <div class="inner">
            <div class="menu_home_wrap">
                <a class="menu_home_btn" href="#">
                    <img src="./img/header/m_home.png" alt="홈바로가기아이콘">
                </a>
                <a class="menu_close_btn" href="#">
                    <img src="./img/header/close.png" alt="메뉴닫기아이콘">
                </a>
            </div>
            <div class="m_login_menu">
                <a href="#">
                    로그인
                </a>
                <a href="#">
                    KOR
                </a>
            </div>
            <nav class="menu_nav">
                <?php include "./inc/menu.php" ?>
            </nav>
        </div>
    </div>
    <section class="guide">
        <div class="inner">
            <div class="guide_box">
                <a href="#">
                    yes24 전자책 리뉴얼 안내
                </a>
                <div>
                    <p>
                        <input type="checkbox" name="check" id="chc"><span>오늘 하루 보지 않기</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <header>
        <section class="logo_wrap">
            <div class="inner">
                <h1 class="logo">
                    <a href="#">
                        <img src="./img/header/logo.png" alt="전자도서관로고">
                    </a>
                </h1>
                <nav class="login_menu">
                    <ul>
                        <li>
                            <a class="lang" href="#">ENG</a>
                        </li>
                        <li>
                            <a class="login" href="#">로그인</a>
                        </li>
                        <li>
                            <a class="menu_bar" href="#">
                                <img src="./img/header/btn_allmenu.png" alt="메뉴바">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <section class="menu_wrap">
            <div class="inner">
                <nav class="gnb_menu">
                    <?php include "./inc/menu.php" ?>
                </nav>
            </div>
        </section>
    </header>