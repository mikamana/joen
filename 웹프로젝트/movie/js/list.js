import { imgPaths, ko, options } from "./api-data.js";
import { displayMovies, getMovies } from "./api-functions.js";
import { qySel, qySelAll } from "./functions.js";

let url = new URL(location.href)
//쿼리
let params = new URLSearchParams(url.search)
// url안에서 search하겠다는 속성
let list = params.get('list')
// 그 중 list안에 있는 값을 get 가져옴
let page = parseInt(params.get('page'))
// 그 중 page안에 있는 값을 get 가져옴
// page옵션은 숫자로 받아와야함
let option;

if (list === 'playing') {
  option = options.playing
  qySel('.list-title').innerHTML = '현재상영작'
} else if (list === 'popular') {
  option = options.popular
  qySel('.list-title').innerHTML = '인기영화'
} else if (list === 'upcoming') {
  option = options.upcoming
  qySel('.list-title').innerHTML = '최신/개봉예정'
}

let movies = await getMovies(option, ko, page)
let totalPages = movies.total_pages
let movieData = await movies.results
let movie = movieData.slice(0, 15)
let startPaging = (page % 5 !== 0) ? Math.floor(page / 5) * 5 + 1 : Math.floor(page / 5) * 5 - 4
// 페이징카운트를 5개씩 출력한다.
if (totalPages > 500) {
  totalPages = 500
}
let finishPaging = Math.ceil(totalPages / 5) * 5 - 5
let endPaging = startPaging + 4
let prevPaging = startPaging - 5
let nextPaging = startPaging + 5

if (page >= 5) {

  qySel('.paging').insertAdjacentHTML('beforeend', `
  
  <a class="paging-btn" href="./list.php?list=${list}&page=${prevPaging}">이전</a>

`)
}

for (let i = startPaging; i <= endPaging; i++) {

  qySel('.paging').insertAdjacentHTML('beforeend', `
  
    <a class="paging-btn${i}" href="./list.php?list=${list}&page=${i}">${i}</a>

  `)

}




if (page <= finishPaging) {

  qySel('.paging').insertAdjacentHTML('beforeend', `
  
  <a class="paging-btn" href="./list.php?list=${list}&page=${nextPaging}">이후</a>

`)
}

qySel(`.paging-btn${page}`).classList.add('active')

displayMovies(movie, ".list-section .grid-container")

let images = movieData.slice(0, 5).map(v => {
  return `${imgPaths.original}${v.backdrop_path}`
})

const setSlide = (images) => {

  images.forEach((imgPath, i) => {

    qySel('.slide').insertAdjacentHTML(`beforeend`, `
        <img src="${imgPath}" class="slide-img${i + 1}"alt>
      `)
  })

  setTimeout(() => {

    qySel(`.slide-img1`).classList.add('active')

  }, 10);

  let n = 1;

  setInterval(() => {

    n++

    if (n > qySelAll(`.slide img`).length) n = 1

    qySelAll(`.slide img`).forEach(img => {

      img.classList.remove('active')

    })

    qySel(`.slide-img${n}`).classList.add('active')

  }, 5000)

}

setSlide(images)



console.log(totalPages);