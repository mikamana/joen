
$(function () {

  $(`.online input[type=tel]`).bind('input', function () {

    var digit = parseInt($(this).attr('maxLength'))
    var leng = $(this).val().length

    if (leng >= digit) $(this).next().focus() // next는 다음 요소에 적용하는 메서드

  })

  $(`.online form`).change(function () {

    // if ($(`.online form`)[0].checkValidity()) $(`.online button[type=submit]`).attr('disabled', false)/* 입력상황이 정상인지 확인, 유효성 확인하는 메서드  */
    // else $(`.online button[type=submit]`).attr('disabled', true)

    var validity = $('.online form')[0].checkValidity() ? false : true;

    $(`.online button[type=submit]`).attr('disabled', validity)

  })

})