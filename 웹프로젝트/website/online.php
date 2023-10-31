<?php include "sub-header.php" ?>
<script src="./js/online.js"></script>
<h2 class="sub_title">온라인문의</h2>

<section class="online">

  <div class="sub_summery">
    <p class="emphasis">궁금하신 사항이나 프로젝트 문의사항을 작성해 주세요.</p>
    <p class="subinfo">담당자가 확인후 빠른 회신을 약속합니다.</p>
  </div>
  <form class="online_form">
    <!-- 1 -->
    <div>
      <label for="name">성명</label>
      <p><input required id="name" type="text"></p>
    </div>
    <!-- 2 -->
    <div>
      <label>휴대전화</label>
      <p class="tel">
        <input required maxlength="3" type="tel" title="연락처 첫번째 세자리">
        <input required maxlength="4" type="tel" title="연락처 두번째 세자리">
        <input required maxlength="4" type="tel" title="연락처 세번째 세자리">
      </p>
    </div>
    <!-- 3 -->
    <div>
      <label for="mail">이메일</label>
      <p><input required id="mail" type="email"></p>
    </div>
    <!-- 4 -->
    <div>
      <label for="title">제목</label>
      <p><input required id="title" type="text"></p>
    </div>
    <!-- 5 -->
    <div>
      <label for="info">설명</label>
      <p><textarea required id="info"></textarea></p>
    </div>
    <!-- 6 -->
    <div>
      <label for="file">파일첨부</label>
      <p><input id="file" type="file"></p>
    </div>
    <!-- 7 -->
    <p>
      <button type="submit" disabled>전송</button>
      <button type="reset">취소</button>
    </p>
  </form>
</section>

<?php include "sub-footer.php" ?>