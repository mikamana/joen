import { closeModal, qySel, qySelAll } from "./functions.js";


qySel('.person-modal .modal-close-btn').addEventListener('click', e => {

  qySelAll('.person-modal ul').forEach(v => {

    v.style.height = '200px'
    // 200으로 맞춰준 후에 작동

  })


  closeModal(".person-modal")

})

qySelAll('.more-btn').forEach(v => {

  v.addEventListener('click', e => {
    e.currentTarget.classList.toggle('active')
    let ul = qySel(e.currentTarget.value)
    qySel(`${e.currentTarget.value}`).classList.toggle('active')


    e.currentTarget.className.includes('active')
      ? ul.style.height = ul.scrollHeight + 'px'
      : ul.style.height = '200px'



  })

})





