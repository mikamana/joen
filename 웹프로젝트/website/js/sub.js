$(function () {

  var url = location.href    //바닐라문법 , 현재 주소를 가져오거나 바꾸는 기능
  var menu
  var page
  if (url.includes("greet.php")) {   // 주소에 greet가 포함되어있으면 menu를 1로 바꿨다.
    menu = 1; page = 1


  } else if (url.includes("location.php")) {
    menu = 1; page = 2

  } else if (url.includes("biz-intro.php")) {
    menu = 2; page = 1

  } else if (url.includes("biz-area.php")) {
    menu = 2; page = 2

  } else if (url.includes("gallery.php")) {
    menu = 3; page = 1

  } else if (url.includes("online.php")) {
    menu = 4; page = 1

  } else if (url.includes("notice.php")) {
    menu = 5; page = 1

  } else if (url.includes("board.php")) {
    menu = 5; page = 2

  } else if (url.includes("faq.php")) {
    menu = 5; page = 3

  }

  $(`.snb .menu${menu}`).show()
  $(`.snb .menu${menu}_${page}`).addClass('active')

  var category = $(`.snb .menu${menu} > a`).text()
  var pageTitle = $(`.snb .menu${menu}_${page}`).text()

  $(`.breadcrumb li.category`).text(category)
  $(`.breadcrumb li.page`).text(pageTitle)

  $(`.sub_visual${menu}`).css({ 'display': 'flex' })     //display가 바뀌자마자는 transition이 실행되지않아 setTimeout을 0.001초라도 걸어준다.
  setTimeout(function () {

    $(`.sub_visual${menu}`).addClass('active')

  }, 1)


})//ready