//반복되는 코드를 이 파일에다가 넣고 사용

import { apiKey, baseUrl, en, genreList, gradeColors, imgPaths, ko, options } from "./api-data.js";
import { qySel, qySelAll, setPersonModal, showModal, sortArray, videoResize } from "./functions.js";

export const getMovies = (option, lang = ko, page = 1) => {
  // query를 넣을때 ''를 넣으면 아무것도없는요소 호출할때 ''를 사용가능
  return new Promise(async (resolve) => {
    // 영화를 가져오고나서 만들도록 해야함
    let res = await fetch(`${baseUrl}${option}${apiKey}${lang}&include_adult=false&page=${page}`)
    let data = await res.json()
    resolve(data)
    // 만약 promise가 없으면 함수가 병렬적으로 순서에 상관없이 실행돼서 문제가 생길 수 있음
  })
}

export const getMovie = (movieId, lang = ko) => {
  return new Promise(async resolve => {
    let res = await fetch(`${baseUrl}/movie/${movieId}${apiKey}${lang}&include_adult=false&page=1`)
    let data = await res.json()
    resolve(data)
  })
}// query에 값 안넣으면 빈문자열로 간주

export const getCredits = (movieId, lang = ko) => {

  return new Promise(async (resolve) => {
    const result = await fetch(`${baseUrl}/movie/${movieId}/credits${apiKey}${lang}&include_adult=false&page=1`)
    const data = result.json()
    resolve(data)

  })//promise

}

export const getProfile = (personId, lang = en) => {

  return new Promise(async (resolve) => {

    let res = await fetch(`${baseUrl}/person/${personId}${apiKey}${lang}`)
    let data = await res.json()
    resolve(data)

  })
}

export const getVideos = (movieId, lang = ko) => {

  return new Promise(async resolve => {
    let res = await fetch(`${baseUrl}/movie/${movieId}/videos${apiKey}${lang}&include_adult=false&page=1`)
    let data = await res.json()
    resolve(data)
  })

}

export const getImages = (movieId) => {

  return new Promise(async (resolve) => {

    let res = await fetch(`${baseUrl}/movie/${movieId}/images${apiKey}&include_adult=false&page=1`)
    let data = await res.json()
    resolve(data)



  })

}

export const getSimilarMovies = (movieId, lang = ko) => {

  return new Promise(async (resolve) => {

    let result = await fetch(`${baseUrl}/movie/${movieId}/similar${apiKey}${lang}&include_adult=false&page=1`)
    let data = await result.json()

    resolve(data)

  })

}

export const displayMovies = (data, container, gridClassName = '') => {
  if (data.length === 0) {
    qySel(container).innerHTML = " <p class='no-data'>관련 정보가 없습니다."
    return false
  } //(!data.length)와 같음
  data.forEach(movie => {
    let { id, poster_path, title, vote_average, genre_ids, release_date } = movie //destructureing 디스트럭쳐링
    let imgPath = (poster_path) ? `${imgPaths.w500}${poster_path}` : './img/no-image.jpg';
    vote_average = vote_average.toFixed(1);
    let gradeLevel = Math.floor(vote_average - 5)
    if (gradeLevel > 4) gradeLevel = 4
    if (gradeLevel < 0) gradeLevel = 0
    let gradeColor = gradeColors[gradeLevel]
    let genre = genre_ids.map(num => genreList[num]).join('/')
    //컴퓨티드
    qySel(container).insertAdjacentHTML('beforeend', `
      <figure class="swiper-slide">
        <a href="./detail.php?id=${id}">
          <div class="imgbox">
            <img src=${imgPath} alt="이미지">
            <span style="background:${gradeColor}"></span>
            <small>${vote_average}</small>
          </div>
          <figcaption>
            <h3>${title}</h3>
            <p>${genre}</p> 
            <p>${release_date}</p>
          </figcaption>
        </a>
      </figure> 
      `)
  })
}

export const displayVideos = (data, container) => {
  if (data.length === 0) {

    qySel(container).innerHTML = "<p class='no-data'>관련 영상이 존재하지 않습니다."
    return false

  }

  data.forEach(video => {
    let { key } = video
    qySel(container).insertAdjacentHTML('beforeend', `
    <button value="${key}">
      <img src="https://img.youtube.com/vi/${key}/mqdefault.jpg" alt>
    </button>
    `)
  })
  qySelAll(`${container} button`).forEach(btn => {
    btn.addEventListener('click', e => {
      showModal('.video-modal')

      let youtubeId = e.currentTarget.value
      qySel('.video-modal iframe').src = `http://www.youtube.com/embed/${youtubeId}?playlist=${youtubeId}&autoplay=1&loop=1&mute=1&playsinline=1`
      videoResize();
    })
  })
}
export const displayImages = (data, container) => {
  if (data.length === 0) {
    qySel(container).innerHTML = "<p class='no-data'>관련 영상이 존재하지 않습니다."
    return false
  }//return false로 아래 요소 실행못하게 막음, false가 없어도 됌

  data.forEach(img => {

    let { file_path } = img
    let imgPathOriginal = `${imgPaths.original}${file_path}`
    let imgPathSmall = `${imgPaths.w500}${file_path}`

    qySel(container).insertAdjacentHTML('beforeend', `
      <a class="viewbox-btn" href="${imgPathOriginal}">
        <img src="${imgPathSmall}" alt>
      </a>
    `)
  })

  $(`.viewbox-btn`).viewbox()

}

export const displayFilmo = (filmoData) => {

  // crew, cast두개의 arr를 합친다.
  // 인지도순으로 20개를 자른후
  // 최근영화 순으로 출력한다.

  let { cast, crew } = filmoData // cast = filmoData.cast 구조분해
  let filmography = [...cast, ...crew]
  // 배열을 합칠때 사용하는 방법이다. 
  sortArray(filmography, 'popularity', -1)
  //sort는 값을 return하는게 아닌 값 자체를 바꾸는 함수라서 받아주는 요소가 필요하지않음
  filmography = filmography.slice(0, 20)
  // return을하는 함수인지, 자체적으로 값을 바꾸는 함수인지 알아야함
  // slice는 return을 하는 함수라서 받아주는 요소가 필요함
  // sort(정렬)된 값을 20개로 잘라준다.
  sortArray(filmography, 'release_date', -1)
  // 최신영화순도 내림차순 -1하여 정렬해주었다. 
  qySel('.filmography').innerHTML = ''
  // 클릭하면 ul안에 값이 추가되는데, 클릭할때마다 값이 추가되는걸 방지하기위해 안에있는 요소를 미리 비워준다.
  filmography.forEach(movie => {


    let { id, job, title, release_date } = movie // id = movie.id 구조분해

    job = (job) ? job : 'acting'
    //crew와 cast를 합친 배열을 forEach로 반복한 상태
    // crew는 job이 있고, cast는 job이 없어서 job이 있으면 그대로 값이 출력되고
    // job이 없으면 'acting'으로 넣어주었다.

    qySel('.filmography').insertAdjacentHTML('beforeend', `
      <li>
        <time>${release_date}</time>
        <a href="./detail.php?id=${id}">
          <em>${title}</em>
          <small>(${job})</small>
        </a>
      </li>
    `)
    //ul안에 li들을 추가해준다. 
    //이때 li안에 a태그를 넣고 클릭하면 href 주소에 id을 넣어준다.
    //id는 출연한 영화의 id값이다.
    //id를 클릭하면 출연한 영화의 정보가 있는 페이지로 이동한다.

  })


}
export const displayPeople = (data, container) => {

  if (data.length === 0) {
    qySel(container).innerHTML = "<p class='no-data'>관련 영상이 존재하지 않습니다."
  }


  data.forEach(person => {

    let { id, name, character, profile_path } = person
    let photo = (profile_path) ? `${imgPaths.w500}${profile_path}` : './img/no-image.jpg'
    qySel(container).insertAdjacentHTML('beforeend', `

      <figure>
        <a href="${id}">
          <img src="${photo}" alt>
          <figcaption>
            <em>${name}</em>
            <b>${character}</b>
          </figcaption>
        </a>
      </figure>
    `)

  })

  qySelAll(`${container} a`).forEach(anchor => {

    anchor.addEventListener('click', async (e) => { // 클릭했을 때 동작하는 이벤트라 forEach 사용 가능

      e.preventDefault() // 앵커에 preventDefault를 하면 링크로 이동하는걸 막아줌
      // ul 안쪽 내용이 ul height 값보다 크면 버튼을 보여주고 작으면 숨겨주기
      // 안쪽 내용의 height 값
      let id = e.currentTarget.getAttribute('href') // currentTarget
      //currentTarget은 이벤트리스너를 직접 호출시킨 대상을 가리키고
      //target은 요소안에 자식들이 있다면 자식이 먼저 클릭된다.
      // 클릭했을때 요소의 href 안에 있는 속성값을 id로 가져온다.
      let profile = await getProfile(id)
      let filmography = await getFilmography(id)

      displayProfile(profile)
      displayFilmo(filmography)
      showModal('.person-modal')
      //target으로 했을 때는 자식요소
      setPersonModal()
    })

  })
}

export const displayProfile = (profileData) => {

  let { profile_path, name, known_for_department, place_of_birth, birthday, deathday, biography } = profileData
  let img = (profile_path) ? `${imgPaths.w500}${profile_path}` : './img/no-image.jpg'
  qySel('.person-photo').src = img
  name = (name) ? name : '관련 정보가 없습니다.'
  known_for_department = (known_for_department) ? known_for_department : '관련 정보가 없습니다.'
  place_of_birth = (place_of_birth) ? place_of_birth : '관련 정보가 없습니다.'
  deathday = deathday ? deathday : "now"
  biography = (biography) ? biography : '관련 정보가 없습니다.'
  birthday = (birthday) ? `${birthday} ~ ${deathday}` : '관련 정보가 없습니다.'

  qySel('.person-photo').src = img
  qySel('.person-life').innerText = birthday
  qySel('.person-biography').innerText = biography
  qySel('.person-place').innerText = place_of_birth
  qySel('.person-job').innerText = known_for_department
  qySel('.person-name').innerText = name

}

export const getFilmography = (personId, lang = ko) => {

  return new Promise(async (resolve) => {

    let res = await fetch(`${baseUrl}/person/${personId}/movie_credits${apiKey}${lang}`)
    let data = await res.json()
    resolve(data)

  })

}



export let controller = new AbortController()
// fetch break
let signal = controller.signal

export const searchByKeyword = (keyword, lang = ko) => {
  return new Promise(async (resolve) => {
    controller = new AbortController()
    signal = controller.signal
    try {
      let res = await fetch(`${baseUrl}/search/movie${apiKey}${lang}&query=${keyword}`,
        { signal }
      )
      /* fetch의 두번째 값은 무조건 객체를 넣어야한다. */
      let data = await res.json()
      resolve(data)
    } catch {

    }
  })
}


export const searchByGeneres = (genreNumbers, page = 1) => {

  return new Promise(async (resolve) => {

    controller = new AbortController()
    signal = controller.signal
    // fetch break

    const result = await fetch(`${baseUrl}/discover/movie/${apiKey}&with_genres=${genreNumbers}&page=${page}`, { signal })
    const data = await result.json()
    resolve(data)

  })

}











