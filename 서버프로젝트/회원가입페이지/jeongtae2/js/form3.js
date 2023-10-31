

document.addEventListener("DOMContentLoaded",()=>{
  //회원가입 버튼 클릭 이벤트 호출
  // 자바스크립트가 나온 이유는 validation check(유효성 체크)를 위해서 만들어짐
  document.querySelector(".input_wrap .next_btn").addEventListener("click",e=>{
    
    e.preventDefault();
    form_check();
    

})


})
// const checkForm = () =>{

const fnErrorTextColor = (err,name) =>{

  let errTextColor = document.querySelector(`.${err}`)
  errTextColor.textContent = `*${name} 입력해주세요`;
  errTextColor.style.color = "red"

}

const removeFnErrorTextColor = (err) =>{

  document.querySelector(`.${err}`).textContent = ""


}

const fnErrorTextLength = (err) =>{

  let errTextLength = document.querySelector(`.${err}`)
  errTextLength.textContent = '*4~12글자까지만 입력해주세요.';
  errTextLength.style.color = "red"

}


const form_check = () =>{

    let name = document.querySelector(`.input_wrap .name`)
    // 텍스트 객체타입으로 저장됌
    let id = document.querySelector(".input_wrap .id")
    let password = document.querySelector(".input_wrap .password")
    let pwCheck = document.querySelector(".input_wrap .password_check")
    let birthday = document.querySelector(".input_wrap .birthday")
    let address = document.querySelector(".input_wrap .ads_input")
    let email = document.querySelector(".input_wrap .email")
    let checkbox1 = document.querySelector(".input_wrap .checkbox1")
    let phone = document.querySelector(".input_wrap .phone")
    let checkbox2 = document.querySelector(".input_wrap .checkbox2")
    let recommand = document.querySelector(".input_wrap .recommand")
    // console.log(res,id,password,pwCheck,birthday,address,email,checkbox1,phone,checkbox2,recommand);



    if(name.value===""){
      fnErrorTextColor("err_name", "이름")
      name.focus()
      return false;
      // return false를 명시해주어서 마무리를 지어주어야한다.
    }else{
      removeFnErrorTextColor("err_name")
    }
    if(id.value===""){
      fnErrorTextColor("err_id", "아이디")
      id.focus()
      return false;
    }else{
      removeFnErrorTextColor("err_id")
    }
    if(id.value.length<=4 || id.value.length >12){      
      fnErrorTextLength("err_id");
      id.focus()
      return false;
    }else{
      removeFnErrorTextColor("err_id")
    }
    if(password.value===""){
      fnErrorTextColor("err_password", "패스워드")
      password.focus()
      return false;
    }else{
      removeFnErrorTextColor("err_password")
    }
    if(password.value.length<=4 || password.value.length >12){
      fnErrorTextLength("err_password");
      password.focus()
      return false;
    }else{
      removeFnErrorTextColor("err_password")
    }

    if(pwCheck.value===""){
      fnErrorTextColor("err_password_check", "패스워드")
      pwCheck.focus()
      return false;
    }else{
      removeFnErrorTextColor("err_password_check")
    }

    if(pwCheck.value.length<=4 || pwCheck.value.length >12){
      fnErrorTextLength("err_password_check");
      pwCheck.focus()
      return false;
    }else{
      removeFnErrorTextColor("err_password_check")
    }
    


    if(birthday.value===""){
      birthday.focus()
      return false;

    }
    if(address.value===""){
      address.focus()
      return false;

    }
    if(email.value===""){
      email.focus()
      return false;

    }
    if(checkbox1.value==="off"){
      checkbox1.focus()
      return false;

    }
    if(phone.value===""){
      phone.focus()
      return false;

    }
    if(checkbox2.value==="off"){
      checkbox2.focus()
      return false;

    }
    if(recommand.value===""){
      recommand.focus()
      return false;

    }

  }








