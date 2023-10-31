<?php include "sub-header.php" ?>
<h2 class="sub_title">공지사항</h2>
<div class="sub_summery">
  <p class="emphasis">고객님의 소중한 의견을 주셔서 감사합니다.</p>
  <p>언제나 고객님의 눈높이에 맞추어 최상의 서비스가 되기 위해 노력하겠습니다.</p>
</div>

<section class="board">
  <table>
    <thead>
      <tr>
        <th scope="col">번호</th>
        <th scope="col">제목</th>
        <th scope="col">작성자</th>
        <th scope="col">작성일자</th>
        <th scope="col">조회수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>공지사항 테스트 5번</td>
        <td>관리자</td>
        <td>2023-08-08</td>
        <td>56</td>
      </tr>
      <tr>
        <td>4</td>
        <td>공지사항 테스트 4번</td>
        <td>관리자</td>
        <td>2023-08-08</td>
        <td>31</td>
      </tr>
      <tr>
        <td>3</td>
        <td>공지사항 테스트 3번</td>
        <td>관리자</td>
        <td>2023-08-08</td>
        <td>53</td>
      </tr>
      <tr>
        <td>2</td>
        <td>공지사항 테스트 2번</td>
        <td>관리자</td>
        <td>2023-08-08</td>
        <td>34</td>
      </tr>
      <tr>
        <td>1</td>
        <td>공지사항 테스트 1번</td>
        <td>관리자</td>
        <td>2023-08-08</td>
        <td>21</td>
      </tr>
    </tbody>
  </table>
  <form>
    <select>
      <option label="제목"></option>
      <option label="작성자"></option>
      <option label="내용"></option>
    </select>
    <input type="text" title="검색어를 입력">
    <button>검색</button>
  </form>
</section>
<?php include "sub-footer.php" ?>