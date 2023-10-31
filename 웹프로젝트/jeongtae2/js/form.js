

// document.addEventListener("DOMContentLoaded",()=>{


// const checkForm = () =>{

  const form_check = () =>{


  }


  document.querySelector(".input_wrap .next_btn").addEventListener("click",e=>{

    e.preventDefault();
    let res = document.querySelector(`.input_wrap .name`)
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
    if(res.value===""){
      res.focus()
    }
    if(id.value===""){
      id.focus()
    }
    if(password.value===""){
      password.focus()
    }
    if(pwCheck.value===""){
      pwCheck.focus()
    }
    if(birthday.value===""){
      birthday.focus()
    }
    if(address.value===""){
      address.focus()
    }
    if(email.value===""){
      email.focus()
    }
    if(checkbox1.value==="off"){
      checkbox1.focus()
    }
    if(phone.value===""){
      phone.focus()
    }
    if(checkbox2.value==="off"){
      checkbox2.focus()
    }
    if(recommand.value===""){
      recommand.focus()
    }



    // document.querySelector(`.ex4 input[type="text"]`).focus()

  })


// }



// })//ready



