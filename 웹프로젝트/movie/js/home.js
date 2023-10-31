import { en, imgPaths, ko, options } from "./api-data.js";
import { getMovies, getMovie, getVideos, displayMovies } from "./api-functions.js";
import { qySel, qySelAll, setSwiper, showModal, videoResize } from "./functions.js";
const setVisual = () => {

  return new Promise(async (resolve) => { //async
    let movieData = await getMovies(options.playing) // 아무것도 없는 요소 호출할때 ''빈따옴표 사용, 현재상영작을 매개변수로 보내서 받아옴
    let movies = movieData.results // 현재상영작데이터 안에 있는 results 값만 가져오겠다.
    movies = movies.slice(0, 5) // 필요한만큼 잘라내기 0에서 5번 전까지 잘라내기 0,1,2,3,4
    // filter,map,forEach등은 함수안쪽에 await를 사용하면 처리를 하지못한다.
    // 해결방법 1. for구문을 사용 2. forOf를사용(배열일때사용) 3.forIn을사용 (객체일때사용)

    for (let movie of movies) {

      let { id, title, original_title, overview, backdrop_path } = movie

      if (!overview) {
        // 한글로된 리뷰가 없는 경우가 종종있어서 이럴 경우에 대안법으로 아래에 한글정보가 없을 때
        let movieEn = await getMovie(id, en)
        // 영어 데이터를 찾고,영어로라도 출력되게끔 만들어주었다.
        overview = movieEn.overview

        // 한글로된 영화정보가 없으면 영어로 된 영화정보를 가져온다
      }//if !overview
      overview = overview.slice(0, 150) + '...' //문자도 slice로 자를 수 있다.
      let imgPath = `${imgPaths.original}${backdrop_path}`;
      let videoData = await getVideos(id)
      if (videoData.results.length === 0) {
        videoData = await getVideos(id, en)
      }
      let videoKey = videoData.results[0].key;
      //비디오 배열 목록의 첫번째 비디오의 키값
      // 비디오 데이터의 results 는 배열
      // 배열의 첫번째 값의 키를 가져옴
      // 한글로된 비디오는 비디오가 한개도 없을 때는 에러가남
      qySel(`.home-visual .swiper-wrapper`).insertAdjacentHTML('beforeend', `
      <figure class="swiper-slide">
        <img src="${imgPath}" alt="#">
        <figcaption class="text_box">
          <small class="original_title">${original_title}</small>
          <h6 class="title">${title}</h6>
          <p class="overview">
            ${overview}
          </p> 
          <button class="play_btn" value="${videoKey}"><i class="fa-brands fa-google-play"></i>재생</button>
          <button class="detail_btn" value="${id}"><i class="fa-solid fa-circle-info"></i>상세정보</button>
        </figcaption>
      </figure>
          `)

      /* qySel(`.home-visual`).insertAdjacentHTML('beforeend', `
        <img src="https://img.youtube.com/vi/${videoKey}/mqdefault.jpg" alt>
        <iframe src="http://www.youtube.com/embed/${videoKey}?playlist=${videoKey}&autoplay=1&loop=1&mute=1&playsinline=1" allowfullscreen></iframe>
          `) *///insertAdhacentHTML
      //이미지를 퍼가는 방법
      // 비디오를 출력할때 영어비디오 출력안됌
      // 프로미스함수에는 함수 자체를 넣으면 안된다.
    }

    qySelAll('.home-visual .play_btn').forEach(btn => {
      btn.addEventListener('click', e => {
        showModal('.video-modal')
        qySel('.video-modal iframe').src = `http://www.youtube.com/embed/${e.target.value}?playlist=${e.target.value}&autoplay=1&loop=1&mute=1&playsinline=1`
        videoResize();
      })
    })
    qySelAll('.home-visual .detail_btn').forEach(btn => {
      btn.addEventListener('click', e => {
        let value = e.target.value
        location.href = `./detail.php?id=${value}`
      })
    })
    await setSwiper('.home-visual', 5000)
    resolve()
  })//promise
}
export const setHomeSection = (option, section) => {
  return new Promise(async (resolve) => {
    const moviesData = await getMovies(option)
    let movies = moviesData.results
    movies = movies.slice(0, 10);
    displayMovies(movies, `${section} .carousel .swiper-wrapper`, 'swiper-slide')
    setSwiper(`${section} .carousel`, false, true)
    resolve()
  })//promise
}//setHomeSection

/* const setHomeSection = (option, section) => {
  return new Promise(async (resolve) => {
    const moviesData = await getMovies(option)
    let movies = moviesData.results
    movies = movies.slice(0, 10);
    displayMovies(movies, `${section} .carousel .swiper-wrapper`, 'swiper-slide')
    setSwiper(`${section} .carousel`, false, true)
    resolve()
  })//promise
}//setHomeSection */

await setVisual()
await setHomeSection(options.popular, '.popular-section')
await setHomeSection(options.upcoming, '.upcoming-section')
await setHomeSection(options.rated, '.rated-section')
await setHomeSection(options.trend, '.trend-section')
// await setHomeSection('.popular-section')
// 스크립트 타입이 모듈인 상태여서 함수 바깥에서 await 사용가능
// 영화 최신작 5개를 출력할것

const scrollToSection = () => {

  let offsetTop = qySel('.popular-section').getBoundingClientRect().y + window.scrollY
  // let headerHeight = qySel(`header`).offsetHeight // 요소 보더+패딩 포함한 height크기
  //자바스크립트로 미디어쿼리를 사용하는 방법
  let headerHeight = matchMedia('screen and (min-width:1000px)').matches ? 80 : 60 //브라우저크기 1000픽셀 이상이면 true가 나옴
  //$('body,html').animate({'scrollTop:$('.popular-section').offset().top}) 제이쿼리
  window.scrollTo({ // 윈도우에서 스크롤 해주는 속성
    top: offsetTop - headerHeight,
    behavior: 'smooth'
  })


}

qySel(`.home-visual`).addEventListener("mousewheel", e => {

  e.preventDefault(); // preventDefault하면 휠이 작동하지 않음
  // let delta = e.wheelDelta / - 120 // 휠의 방향을 계산하기 편하게 120으로 나눠주고 1이나 -1로 계산하게끔 만들었다.
  let delta = (e.wheelDelta < 0) ? 1 : -1
  if (delta === -1) return false
  scrollToSection();

}, { passive: false }) //passive : false 크롬 경고창 제거

qySel('.wheel_btn').addEventListener('click', e => {

  scrollToSection();

})
