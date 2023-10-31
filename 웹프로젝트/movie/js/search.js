import { qySel, qySelAll, setSlide } from "./functions.js"
import { controller, displayMovies, searchByGeneres, searchByKeyword } from "./api-functions.js"
import { genreList } from "./api-data.js";
setSlide([])
///////////////////////////////////////////

let keywords;
let timeoutId;
//setTimeout에 선언할 변수
let page;
// 현재페이지
let totalPages;
// 모든페이지개수
let genreNumbers = [];
// 클릭할때마다 어떤 장르가 체크되어있는지 확인
let isRoading = true;
// 상태변수
// 입력하는 동안은 스크롤 기능 X
// 로딩되는 동안 스크롤 기능 X
// 제일 처음에 false로 설정하면 옵저버가 관찰하자마자 데이터를 불러오다가 오류가 남


const getData = () => {
  keywords = (localStorage.getItem('keywordsStorage'))
    ? JSON.parse(localStorage.getItem('keywordsStorage'))
    : [];
}//local.get

const setDataList = () => {

  // if (!localStorage.getItem('keywordsStorage')) return false
  // let keywords = JSON.parse(localStorage.getItem('keywordsStorage'))
  keywords.forEach(keyword => {
    qySel(`#keyword-list`).insertAdjacentHTML('beforeend', `
      <option>
        ${keyword}
      </option>
  `)
  })
}//FnforEach

getData()
setDataList()

qySel('.delete-btn').addEventListener('click', e => {
  if (!confirm('검색 기록을 삭제하시겠습니까?')) return
  // confirm이 확인이면 true를 반환, 만약 true가 !(아니면) return을 실행하지않음
  localStorage.removeItem('keywordsStorage')
  qySel('input.search-input').value = ''
  qySel('.search-result-section .grid-container').innerHTML = ''
  e.currentTarget.style.display = 'none'
  qySel(`#keyword-list`).innerHTML = ""
})

qySel('input.search-input').addEventListener('input', async (e) => {
  clearTimeout(timeoutId)
  isRoading = true;
  // 사용자가 키워드 검색할시에는 무한스크롤 기능 사용하지않음
  genreNumbers = [];
  // 입력할때마다 초기화
  qySelAll('.genre-btn').forEach(button => {

    button.classList.remove('active')

  })

  page = 1;

  qySel('.delete-btn').style.display = "block";
  qySel('.search-result-section .grid-container').innerHTML = ''

  if (e.target.value === '') return false
  timeoutId = setTimeout(async () => {
    controller.abort()
    let movieData = await searchByKeyword(e.target.value)
    // 이전 패치를 취소하는 속성 
    // 패치 누적을 막기위해서 사용
    //사용자가 버튼을 클릭하거나 입력을 할땐 마지막 fetch만 받기 위해서 clear하고 fetch해야함 (패치의 누적을 막음)
    // 입력할 때마다 fetch를 취소해야함
    // 사용성을 위해서 검색할때 1초 뒤에 출력되게끔 만든다. 입력한 타이밍에 따라 결과가 1초뒤에 나오게끔
    let movies = movieData.results
    displayMovies(movies, '.search-result-section .grid-container')

    getData() // local.get
    /*     let keywords = (localStorage.getItem('keywordsStorage'))
          ? JSON.parse(localStorage.getItem('keywordsStorage'))
          : []; */

    if (movies.length === 0 || keywords.includes(e.target.value)) return
    keywords.unshift(e.target.value)
    // unshift는 리턴하는 함수가 아님, 바로 뒤에 slice를 붙이면 안됌
    keywords = keywords.slice(0, 10)
    let setKeywords = JSON.stringify(keywords)
    localStorage.setItem('keywordsStorage', setKeywords)
    qySel(`#keyword-list`).innerHTML = ''
    setDataList() // forEach
    /* keywords.forEach(keyword => {
      qySel(`#keyword-list`).insertAdjacentHTML('beforeend', `
        <option>
          ${keyword}
        </option>
    `)
    }) */
  }, 1000)
})

qySel('.search-form').addEventListener('submit', e => {

  e.preventDefault()

})

const setGenreBtns = () => {

  for (let genreNumber in genreList) {
    // genreNumber는 index값으로 나옴
    // genreList[genreNumber]로 value에 접근가능
    document.querySelector(`.genre-btns`).insertAdjacentHTML('beforeend', `
      <button class="genre-btn" value="${genreNumber}">
        ${genreList[genreNumber]}
      </button>
    `)
  }
}
const genreBtnsHandler = () => {
  qySelAll('.genre-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      clearTimeout(timeoutId)
      isRoading = true;
      e.target.classList.toggle('active')
      qySel('.search-input').value = ''
      qySel(`.grid-container`).innerHTML = ''

      page = 1;
      //page는 스크롤할때만 늘어남

      let idx = genreNumbers.indexOf(e.target.value)
      if (idx === -1) genreNumbers.push(e.target.value)
      else genreNumbers.splice(idx, 1)
      if (genreNumbers.length === 0) return false
      let genreNum = genreNumbers.join(',')

      timeoutId = setTimeout(async () => {
        controller.abort() // 이전패치를 멈추고 새로운내용으로 다시 패치
        // 패치누적방지
        // 빠른 클릭으로 중첩되는걸 방지하기위해 setTimeout을 건다.
        let movieData = await searchByGeneres(genreNum)
        //장르 넘버 전달해야함, 장르 클릭시 장르에 맞는 value를 전달
        totalPages = movieData.total_pages
        let movies = movieData.results
        displayMovies(movies, '.search-result-section .grid-container')
        isRoading = false;
      }, 1000)
    })
  })
}

setGenreBtns()
genreBtnsHandler()

//
//인터섹션옵저버 :  특정한 객체가 화면에 들어오는지 안들어오는지 실시간 감시하는 기능
//사용법
//  - new IntersectionObserver 함수선언
//  - 반환할 변수 지정
//  - 실행할 함수 입력
//  - observe() 메서드 : 지정한 변수 안에있는 객체가 있는지 없는지 확인
const observer = new IntersectionObserver(async ([entry]) => {
  // 배열이 아닌 경우 구조분해를 해서 매개변수에 입력
  // new IntersectionObserver 함수에서는 if문이 필수로 들어와야함
  if (entry.intersectionRatio > .1 && isRoading === false) {
    // 다른데이터를 받아오지않을때만 실행하게끔
    // 화면의 10%보다 커졌을때를 의믜
    // intersectionRatio 프로퍼티
    isRoading = true;
    page++
    if (page > totalPages || page > 10) return false
    // 토탈페이지보다 커지면 스크롤 실행 X
    // 아니면 page가 10페이지 초과할경우 실행 X
    let movieData = await searchByGeneres(genreNumbers, page)
    let movies = movieData.results
    displayMovies(movies, '.grid-container')
    isRoading = false;
  }
})
observer.observe(qySel('.trigger'))