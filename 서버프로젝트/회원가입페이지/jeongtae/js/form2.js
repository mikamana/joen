import { adel, adelAll, qysel, qyselAll } from "./module.js";

document.addEventListener("DOMContentLoaded", () => {

  if(localStorage.getItem("topBannerHide")){

    let hideStart = JSON.parse(localStorage.getItem("topBannerHide")) / 1000
    let now = new Date().getTime() / 1000

    if(now - hideStart > 86400){

      qysel(".coupon_wrap").style.display = "block";

      localStorage.removeItem("topBannerHide")

    }else{

      qysel(".coupon_wrap").style.display = "none";

    }
  }
  // 자바스크립트가 나온 이유는 validation check(유효성 체크)를 위해서 만들어짐

  // qysel로 찾은 DOM요소들이 객체인지 배열인지 확인하는 방법 typeof
  // let result = qyselAll(".ft_sns>li")
  // let res = [...result]
  // console.log(res);
  // NodeList는 배열이 아님
  // NodeList는 배열과 비슷한 방식으로 접근할 수 있다.
  // NodeList를 배열로 변환하거나 Array.from() 또는 전개 연산자(...)를 사용하여 배열로 변환한 다음 배열 메서드를 사용할 수 있습니다.
  const initEvent = () => {

    adel(".today_off","click",e=>{

      let now = new Date()
      // let now = now.getTime()
      let date = now.getDate()

      localStorage.setItem('topBannerHide', JSON.stringify(now.getTime()))
      qysel(".coupon_wrap").style.display = "none";

      //클릭한 시점부터 하루가 지나면 다시 창이 나오도록 해야함
      //로컬스토리지에 현재 날짜의 데이터를 저장한다.
      //로컬스토리지 안에 있는 데이터의 정보가 클릭한 시점에서 하루가 지나있으면 다시 출력되게끔 만들기
      // let dateToJson = JSON.stringify(date)

      // localStorage.setItem("dateStorage",dateToJson)





      // console.log(nowDate);
      // console.log(date);
      // console.log(hours);
      // if()


    })


    window.addEventListener("scroll",e=>{

      let headerHeight = qysel("header").offsetHeight
      let couponHeight = qysel(".coupon_wrap").offsetHeight

      if(scrollY > headerHeight+couponHeight){

        qysel(".scroll_up img").src = "./img/aside/Vector.svg"

      }else{

        qysel(".scroll_up img").src = "./img/aside/Ellipse3.svg"
        
      }

    })//스크롤시 사이드 아이콘 이미지변경

    adel(".scroll_up", "click", e=>{

      let headerHeight = qysel("header").offsetHeight
      let couponHeight = qysel(".coupon_wrap").offsetHeight
      window.scrollTo({ // 윈도우에서 스크롤 해주는 속성
        top : headerHeight+couponHeight,
        behavior: 'smooth'
      })


    })//사이드 아이콘 클릭시 스크롤

    adelAll(".gnb_list>li", "mouseleave", e => {
      let node = e.target.lastElementChild
      e.target.classList.remove('active')
      gsap.set(node, { opacity: 0 })
    })//메인메뉴 마우스리브 이벤트

    adelAll(".gnb_list>li", "mouseenter", e => {
      let node = e.target.lastElementChild
      e.target.classList.add("active")
      gsap.to(node, { opacity: 1, duration: 0.1, ease: "power1.out" })
    })//메인메뉴 마우스오버 이벤트

    adel(".input_wrap .id_btn", "click", e => {
      let idValue = qysel(".input_wrap .id").value
      if (idValue.length >= 4 || idValue < 12) {

        document.querySelector(".err_id").textContent = "사용 가능한 id입니다."
        document.querySelector(".err_id").style.color = "green"

      } else {
        document.querySelector(".err_id").textContent = ""
      }
    })// 아이디 중복검사 이벤트

    adel(".password", "input", e => {
      if (e.target.value.length >= 4 && e.target.value.length < 12) {

        qysel('.err_password').textContent = "사용 가능한 비밀번호 입니다."
        qysel('.err_password').style.color = "green"


      } else if (!e.target.value) {

        qysel('.err_password').textContent = ""

      } else {
        qysel('.err_password').textContent = "사용 불가능한 비밀번호 입니다."
        qysel('.err_password').style.color = "red"
      }
    })// 비밀번호 유효성검사 인풋 이벤트

    adel(".password_check", "input", e => {
      let pwValue = qysel('.password').value

      if (pwValue === e.target.value) {
        qysel('.err_password_check').textContent = "입력하신 비밀번호와 같습니다."
        qysel('.err_password_check').style.color = "green"
      } else if (!e.target.value) {
        qysel('.err_password_check').textContent = ""
      } else {
        qysel('.err_password_check').textContent = "입력하신 비밀번호와 다릅니다."
        qysel('.err_password_check').style.color = "red"
      }
    })// 비밀번호 체크

    adel(".address_btn", "click", e => {
      e.preventDefault();
      fnKakaoEmail()
    })// 우편번호창 클릭 이벤트

    adel(".email_select", "change", e => {
      qysel(".email_checked").value = e.target.value
      emailCheck();
    })// 이메일 체크 벨류 가져오는 이벤트

    adel(".input_wrap .next_btn", "click", e => {
      e.preventDefault();
      form_check();
    })// 유효성검사 후 회원가입 버튼 클릭이벤트
  }// 이벤트 함수 모음

  initEvent() // 이벤트실행함수
  couponStorage() // 오늘하루보지않기 로컬스토리지
  // fnScroll() // 스크롤실행함수
})//ready



const couponStorage = () =>{

      let todayDate = localStorage.getItem("dateStorage")
      ? JSON.parse(localStorage.getItem("dateStorage"))
      : []

      console.log(todayDate);
      let date = new Date().getDate();
      // console.log(date+1);
      if(todayDate === (date+1)){
        
      }


}// 오늘하루보지않기 로컬스토리지

const form_check = () => {

  let name = qysel(`.input_wrap .name`)
  // 텍스트 객체타입으로 저장됌
  let id = qysel(".input_wrap .id")
  let password = qysel(".input_wrap .password")
  let pwCheck = qysel(".input_wrap .password_check")
  let birthday = qysel(".input_wrap .birthday")
  let address = qysel(".input_wrap .ads_input")
  let email = qysel(".input_wrap .email")
  let emailCheck = qysel(".input_wrap .email_checked")
  let checkbox1 = qysel(".input_wrap .checkbox1")
  let phone = qysel(".input_wrap .phone")
  let recommand = qysel(".input_wrap .recommand")
  let select = qysel(".email_select")

  if (name.value === "") {
    fnErrorTextColor("err_name", "이름")
    name.focus()
    return false;
    // return false를 명시해주어서 마무리를 지어주어야한다.
  } else {
    removeFnErrorTextColor("err_name")
  }
  if (id.value === "") {
    fnErrorTextColor("err_id", "아이디")
    id.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_id")
  }
  if (id.value.length <= 4 || id.value.length > 12) {
    fnErrorTextLength("err_id");
    id.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_id")
  }
  if (password.value === "") {
    fnErrorTextColor("err_password", "패스워드")
    password.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_password")
  }
  if (password.value.length <= 4 || password.value.length > 12) {
    fnErrorTextLength("err_password");
    password.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_password")
  }

  if (pwCheck.value === "") {
    fnErrorTextColor("err_password_check", "패스워드")
    pwCheck.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_password_check")
  }

  if (pwCheck.value !== password.value) {
    let passCheck = qysel('.err_password_check')

    passCheck.textContent = "입력한 비밀번호가 다릅니다."
    passCheck.style.color = "red"

    pwCheck.focus()

    return false;
  } else {
    removeFnErrorTextColor("err_password_check")
  }

  if (birthday.value === "") {
    fnErrorTextColor("err_birthday", "생년월일")
    birthday.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_birthday")
  }

  if (birthday.value.length <= 7 || birthday.value.length > 8) {
    qysel('.err_birthday').textContent = "8자리 형식으로 입력해주세요."
    birthday.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_birthday")
  }

  if (address.value === "") {
    address.focus()
    return false;
  }

  if (email.value === "") {
    fnErrorTextColor("err_email", "이메일")
    email.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_email")
  }
  if (emailCheck.value === "") {
    fnErrorTextColor("err_email", "이메일")
    // email.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_email")
  }

  if (phone.value === "") {
    fnErrorTextColor("err_phone", "휴대폰번호")
    phone.focus()
    return false;
  }
  if ((phone.value).includes('-')) {
    let errPhone = qysel('.err_phone')
    errPhone.textContent = " * '-' 없이 숫자만 입력"
    errPhone.style.color = "red"
    phone.focus()
    return false;
  }

  if (!checkbox1.checked) {
    let errCheck = qysel(".err_checked1")
    errCheck.textContent = "체크해주세요"
    errCheck.style.color = "red"
    checkbox1.focus()
    return false;
  } else {
    removeFnErrorTextColor("err_checked1")
  }

  if (recommand.value === "") {
    recommand.focus()
    return false;
  }

  qysel('form.input_wrap').submit();

}// 폼요소 유효성검사 함수

const fnKakaoEmail = () => {

  new daum.Postcode({
    // 다음에서 만든 포스트코드라는 함수 객체
    oncomplete: function (data) {
      // 가 끝나면 실행하는 함수를 data로 저장후 data를 가지고 사용
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ''; // 주소 변수
      var extraAddr = ''; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== '') {
          extraAddr = ' (' + extraAddr + ')';
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.querySelector(".address_jibun").value = extraAddr;
      } else {
        document.querySelector(".address_jibun").value = '';
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.querySelector('.ads_input').value = data.zonecode;
      document.querySelector(".address_road").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.querySelector(".address_jibun").focus();
    }

  }).open();
}// 다음API 주소 추가

const emailCheck = () => {

  let emailSel = qysel('.email_select');
  let emailDns = qysel('.email_checked');

  if (emailSel.value === "self") {
    emailDns.value = ""
  } else {
    emailDns.value = emailSel.value;
  }

  //알고리즘은 데이터를 처리하는 부분을 알고리즘이라고 함

}// 이메일 체크 함수

const fnErrorTextColor = (err, name) => {

  let errTextColor = qysel(`.${err}`)
  errTextColor.textContent = `*${name} 입력해주세요`;
  errTextColor.style.color = "red"

}// 폼 : 에러텍스트 추가

const removeFnErrorTextColor = (err) => {

  qysel(`.${err}`).textContent = ""


}// 폼 : 에러텍스트 삭제

const fnErrorTextLength = (err) => {

  let errTextLength = qysel(`.${err}`)
  errTextLength.textContent = '*4~12글자까지만 입력해주세요.';
  errTextLength.style.color = "red"

}// 폼 : 4~12 글자 에러텍스트 추가












