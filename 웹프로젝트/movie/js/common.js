import { qySel } from "./functions.js"

export let scrollY = window.scrollY



const setTopBtn = () => {

  if (scrollY > 300) {
    qySel('.top_btn').classList.add('active')
  } else {
    qySel('.top_btn').classList.remove('active')
  }

  qySel(`.top_btn`).addEventListener('click', e => {

    window.scrollTo({ // 윈도우에서 스크롤 해주는 속성
      top: 0,
      behavior: 'smooth',
    })

  })

}

setTopBtn()

window.addEventListener("resize", (e) => {

  scrollY = window.scrollY

  setTopBtn()

})
window.addEventListener("scroll", (e) => {

  scrollY = window.scrollY

  setTopBtn()

})


qySel('.toggle-btn').addEventListener('click', e => {

  qySel('.menu-list ul').classList.toggle('active')



})
