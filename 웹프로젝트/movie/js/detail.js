import { en, gradeColors, imgPaths } from "./api-data.js";
import { displayImages, displayMovies, displayPeople, displayVideos, getCredits, getImages, getMovie, getSimilarMovies, getVideos } from "./api-functions.js";
import { qySel, setSlide, sortArray } from "./functions.js";
// import,export는 자바스크립트 끼리의 경로

//url search param

let url = new URL(location.href)
let params = new URLSearchParams(url.search) // search 안에 파라미터들이 들어가있다. 
let id = params.get('id') // id번호를 저장
let imageData = await getImages(id);
let { backdrops, posters } = imageData
let images = backdrops.slice(0, 15);
let slideImages = backdrops.slice(0, 4); // 4개로 분해 , 하지만 개수가 2개 밖에 없으면 2개까지 출력(꼭 4개가 아님)
let poster = (posters.length) ? `${imgPaths.w500}${posters[0].file_path}` : `./img/no-image.jpg`          //포스터의 길이가 있으면 포스터의 첫번째를 가져옴, 없으면 no-image
let movieData = await getMovie(id)
let { title, overview, original_title, vote_average, genres, production_companies, vote_count, runtime, release_date } = movieData
let hour = parseInt(runtime / 60)
let min = runtime % 60

release_date = (release_date) ? release_date : '출시일 정보 없음'

genres = (genres.length) ? genres.map(genre => genre.name).join('/') : '장르 정보 없음' //장르의 name들을 꺼내와서 배열로 만들어줌

vote_average = vote_average.toFixed(1); //소숫점한자리로 바꿈
let gradeLevel = Math.floor(vote_average - 5)
if (gradeLevel > 4) gradeLevel = 4
if (gradeLevel < 0) gradeLevel = 0
let gradeColor = gradeColors[gradeLevel]

if (!overview) {
  let MovieData = await getMovie(id, en)
  overview = (movieData.overview) ? movieData.overview : '영화 설명 정보가 없습니다.'
}

let company = (production_companies.length) ? production_companies.map(company => company.name).join(',') : '제작사 정보가 없습니다.' //이름만 꺼내진 하나의 배열이 만들어지고, 배열안에 값을 문자로 만듦

let credits = await getCredits(id)
let { cast, crew } = credits
cast = cast.slice(0, 10)
let directors = crew.filter(v => v.job === 'Director').map(v => v.name).join(', ') //감독정보반환
directors = (directors) ? directors : "감독 정보가 없습니다."
let producers = crew.filter(v => v.job === 'Producer').map(v => v.name).join(', ')
producers = (producers) ? producers : "제작자 정보가 없습니다."
let videoData = await getVideos(id)
let videos = videoData.results
if (videos.length === 0) {

  videoData = await getVideos(id, en)
  videos = videoData.results

}
///////////////////////////////
setSlide(slideImages)
///////////////////////////////

qySel('.poster').src = poster
qySel('.title').innerHTML = title
qySel('.average').innerHTML = vote_average
qySel('.average').style.color = gradeColor
qySel('.progress').style.strokeDashoffset = 10 - vote_average + 'px'
qySel('.progress').style.stroke = gradeColor
qySel('.vote_cnt').innerHTML = (`${vote_count}`)
qySel(`.hour`).innerHTML = hour
qySel(`.min`).innerHTML = min
qySel(`.date`).innerHTML = release_date
qySel(`.genre`).innerHTML = genres
qySel(`.overview`).innerHTML = overview
qySel(`.original_title`).innerHTML = original_title
qySel(`.production`).innerHTML = company
qySel(`.producer`).innerHTML = producers
qySel(`.director`).innerHTML = directors

///////////////////////////////
const setSimilarSection = () => {

  return new Promise(async (resolve) => {

    let movieData = await getSimilarMovies(id)
    let movies = movieData.results

    sortArray(movies, 'popularity', -1)
    movies = movies.slice(0, 15)
    displayMovies(movies, '.similar-section .grid-container')
    resolve()

  })
}

displayVideos(videos, ".video-section .grid-container")
displayImages(images, ".img-section .grid-container")
displayPeople(cast, ".people-section .grid-container")


await setSimilarSection()

