<?php include "./header.php" ?>


<main>
    <section class="todo">
        <div class="todo_wrap">
            <ul class="todo_list">
                <li>
                    <p><i class="fa-solid fa-list"></i> 할일 리스트</p>
                    <p><input class="works" type="text" placeholder="할 일 입력" size="10"> 입력</p>
                </li>
                <li>
                    <p><i class="fa-regular fa-calendar-check"></i> 날짜</p>
                    <p><input class="check" type="date"> 선택</p>

                </li>
                <li>
                    <p><i class="fa-regular fa-clock"></i> 시간</p>
                    <p><input class="time" type="time"> 선택</p>
                </li>
            </ul>
            <div class="do_wrap">
                <ul class="result">할 수 있습니다.</ul>
                <div class="btn_wrap">
                    <button class="start_btn">시작하기</button>
                    <div class="range">
                        <p class="search"><span>검색 </span><input class="input_search" type="text" placeholder="일정명으로 검색" size="12"></p>
                        <p>
                            <select>
                                <option value="latest">최신등록순</option>
                                <option value="reverse">등록순</option>
                                <option value="title">최신등록순</option>
                                <option value="date">시간순</option>
                            </select>
                        </p>
                        <!-- <button class="array"><span>날짜순으로 정렬</span></button> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>



<?php include "./footer.php" ?>