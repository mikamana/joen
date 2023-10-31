import { imgPaths } from "./api-data.js";


export const qySel = (el) => {

  return document.querySelector(el)

};

export const qySelAll = (el) => {

  return document.querySelectorAll(el)

}

export const setSwiper = (el, sec = false, breakpoint = false) => {
  // breakpoint에 값을 넣지않으면 개수를 하나로 지정한다.
  // sec에 값을 넣지않으면 false , 오토플레이를 하지않는다.

  const swiper = new Swiper(`${el}`, {
    //autoplay:false,
    autoplay: (!sec) ? false : { delay: sec, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    pagination: {
      el: '.pagination',
      type: 'bullets',
      clickable: true,
    },

    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: (breakpoint) && { // 전체가 return 됌
      // 이항연산자 && : (breakpoint)값이 있다면 &&는 결과 전체를 리턴하고, 없으면 false를 리턴함  
      300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      900: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      1500: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    }

  });


}

export const videoResize = () => {

  let videoWidth = qySel(`.video-modal .youtube-ratio`).clientWidth
  let videoHeight = qySel(`.video-modal .youtube-ratio`).clientHeight

  qySel(`.video-modal iframe`).style.width = `${videoWidth}px`
  qySel(`.video-modal iframe`).style.height = `${videoHeight}px`

}

export const setSlide = (images) => {

  if (images.length < 2) {

    for (let i = 1; i <= 4; i++) {
      qySel('.slide').insertAdjacentHTML(`beforeend`, `
        <img class="slide-img${i}" src="./img/film${i}.jpg" alt>
      `)
    }

  } else {

    images.forEach((v, i) => {

      let { file_path } = v
      let imgPath = `${imgPaths.original}${file_path}`

      qySel('.slide').insertAdjacentHTML(`beforeend`, `
        <img class="slide-img${i + 1}" src="${imgPath}" alt>
      `)
    })
  } // 이미지가 한장도 없거나 한장일때
  //영화에 대한 이미지 가져오기

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

export const sortArray = (arr, sortOption, asc) => {

  arr.sort((a, b) => {
    if (a[sortOption] > b[sortOption]) return asc
    else if (a[sortOption] < b[sortOption]) return -asc
    else return 0

  })//sort 
  // 솔트는 값을 리턴하는게 아니라 값 자체를 직접 바꾼다.
}//영화 정렬

export const showModal = (modal) => {

  qySel(modal).style.display = 'block';
  document.body.style.overflow = "hidden";

}

export const closeModal = (modal) => {

  qySel(modal).style.display = 'none';
  document.body.style.overflow = "auto";

}

export const setPersonModal = () => {

  qySelAll('.person-modal ul').forEach(ul => {
    console.log(ul.scrollHeight, ul.clientHeight);
    if (ul.scrollHeight <= ul.clientHeight) {

      ul.nextElementSibling.style.display = 'none' // 뒤에있는 하나의 요소 button

    } else {

      ul.nextElementSibling.style.display = 'inline-block'

    } // 실제 내용의 길이가 박스의 길이보다 작으면
  })


  qySelAll('.person-modal .more-btn').forEach(button => {
    button.classList.remove('active')
  })
}