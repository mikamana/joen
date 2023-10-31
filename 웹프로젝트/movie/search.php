<?php include "./header.php" ?>
<script type="module" src="./js/search.js"></script>
<figure class="slide">
  <!-- 동적생성 -->
</figure>
<main class="search-content"> <!--무한스크롤 구현 -->
  <form class="search-form">
    <fieldset class="search-keyword">
      <span class="search-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <input list="keyword-list" placeholder="영화 제목을 입력하세요." class="search-input" type="text">
      <datalist id="keyword-list">
      </datalist>
      <!-- 검색한기록 기준으로 옵션을 넣어주어야함 -->

      <button class="delete-btn" title="검색기록삭제" type="button"> <!-- 전송버튼이 아님 -->
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </fieldset> <!-- 검색기록구현 -->
    <fieldset class="genre-btns">
      <!-- 장르버튼 -->
    </fieldset>
  </form>

  <section class="common_section movie-grid-section wrap-section search-result-section">
    <h2 class="common_title">
      <i class="fa-solid fa-square-poll-vertical"></i>
      <em>검색결과</em>
    </h2>
    <div class="grid-container">
      <!-- 검색결과 동적생성 -->

    </div>
  </section>
</main>
<div class="trigger"></div>
<?php include "./footer.php" ?>