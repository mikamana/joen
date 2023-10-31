$(function () {
  var priceArr = [
    {
      option: { name: 'starter', desc: '간략한 홍보 사이트 제작이라면' },
      price: '200만원',
      details: {
        "5개": "페이지 내외",
        "25개": "페이지 내외",
        "22개": "콘텐츠 블럭 디자인",
        "반응형": "모바일 최적화",
        "제작기간": "20일 이내",
      },
    },
    {
      option: { name: 'starter', desc: '간략한 홍보 사이트 제작이라면' },
      price: '200만원',
      details: {
        "5개": "페이지 내외",
        "25개": "페이지 내외",
        "22개": "콘텐츠 블럭 디자인",
        "반응형": "모바일 최적화",
        "제작기간": "20일 이내",
      },
    },
    {
      option: { name: 'starter', desc: '간략한 홍보 사이트 제작이라면' },
      price: '200만원',
      details: {
        "5개": "페이지 내외",
        "25개": "페이지 내외",
        "22개": "콘텐츠 블럭 디자인",
        "반응형": "모바일 최적화",
        "제작기간": "20일 이내",
      },
    },
  ]

  priceArr.forEach(v => {

    let { option, price, details } = v;

    $('.price-table').append(`
    
    <li>
      <p class="option">
        <em>${option.name}</em>
        <span>${option.desc}</span>
      </p>
      <p class="price">
        <b>${price}</b>
        <span>부터</span>
      </p>
      <div>

      </div>
      <p>
        <a href="./contact.php">문의하기</a>
      </p>
    </li>
    `)

    for (key in details) { // 객체를 반복할 때는 for in 사용 for of는 배열에 사용, key값이 같으면 for in사용불가
      //v.details의 키 개수만큼 반복
      $(`.price-table li:last-child div`).append(`
      <p>
        <i>${key}</i>
        <span>${details[key]}</span>
      </p>
    `) //li 3개인 상태
    }
  })

})//ready



$(function () {

  var scrollMotion = function () {

    var isStartMotion = true;
    var rafId;

    if (!isStartMotion) return
    isStartMotion = false;

    rafId = requestAnimationFrame(function () {

      //codestart

      let t = $(`.title .title_img`).offset().top

      $(`.price-table p`).each(function () {

        let ost = $(this).offset().top;

        if (scry >= ost - winh) {

          $(this).addClass('active')

        } else {

          $(this).removeClass('active')


        }

      })


      if (scry >= t - winh * .8) {
        $(`.title .title_img img`).addClass('active')
      } else {
        $(`.title .title_img img`).removeClass('active')
      }



      //codeend

      isStartMotion = true;

    })

  }

  scrollMotion()

  $(window).resize(function () {

    scrollMotion()

  })

  $(window).scroll(function () {

    scrollMotion()

  })

})


