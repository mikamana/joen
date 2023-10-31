import { closeModal, qySel, qySelAll, videoResize } from "./functions.js";

//export를 하는 파일에서는 이벤트리스너를 사용하는 것을 권장하지않음 
// 사용할 경우 함수안에 만드는 것을 권장


qySel(`.video-modal iframe`).src = ''; // 비디오가 계속 동작하는 것을 멈추게끔 작업
qySel(`.video-modal .modal-close-btn`).addEventListener('click', e => {

  closeModal('.video-modal')

})

window.addEventListener('resize', () => {

  videoResize();

})

