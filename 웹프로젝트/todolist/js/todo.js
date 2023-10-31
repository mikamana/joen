{

    // ToDoList 만들기(스크립트)

    /* 

    [필요한 데이터]
        - 사용자가 입력한 할일 데이터와 날짜 데이터, 시간 데이터
    [데이터 활용]
        - 데이터 입력 후 추가하기 버튼을 클릭하면 데이터가 저장,보관됌
            * 데이터를 보관하는 장소가 필요
        - 추가할 때마다 리스트가 출력되어야함
            * 추가하기를 클릭할 때마다 객체안에 값이 들어감 = 빈객체 미리 생성
            * 객체가 만들어지면, 객체들을 배열안에 추가함
            * 만들어놓은 ul요소안에 배열에 추가한 객체의 개수만큼 출력되어야함
    [정렬기능]
        - 추가한 데이터를 이용해 정렬 기능을 구현
            - CRUD(추가,삭제,수정,업데이트)를 할 것인지 아닌지 파악하여 CRUD가 아니라면 원본데이터(배열)을 건들면 안된다.
        - CRUD 여부를 파악이 끝나면 정렬시 배열안의 길이가 달라지는지 같은지 여부를 파악해야한다.
            - 정렬 할 데이터와 화면에 표시할 데이터가 같다면 map을 사용하여 복사본을 만든 후, 복사본을 정렬시킨 뒤 출력한다.
            - 위와 다르게 데이터들의 길이가 다르다면 filter를 사용하여 복사본을 만든 후에 복사본을 출력시킨다.
    

    [반복되는 요소들과 기능들을 함수로 묶어 구현하기]

        [반복]
            - 반복되는 요소를 찾을 때는 먼저 요소보다 큰 단위에 있는 기능적인 부분들을 생각해야한다.
            - 반복되지 않고 독립적으로 실행하는 기능들을 먼저 찾는다.  
                1. 독립적인 기능들
                    - 할 일 안에 데이터들을 입력시키는 것
                    - 날짜 데이터를 선택하는 것
                    - 시간 데이터를 선택하는 것
                    각각의 다른 데이터들을 받아야 하기때문에 독립적으로 실행한다.
                2. 
    
    */



    let arr = localStorage.getItem('todoArrLocal')
        ? JSON.parse(localStorage.getItem('todoArrLocal'))
        : [];
    let arrCopy = [...arr];

    const fnPush = () => {

        let todo = document.querySelector(`.todo_wrap input.works`).value;
        let date = document.querySelector(`.todo_wrap input.check`).value;
        let time = document.querySelector(`.todo_wrap input.time`).value;
        let obj = { todo, date, time };  // todo = todo, date = date, time = time;
        arr.push(obj)
        arrCopy = [...arr];

    }

    const fnPrint = () => {
        document.querySelector(`ul.result`).innerHTML = '';

        // arrCopy = [...arr];

        arrCopy.forEach(v => {
            let { todo, date, time } = v; // let v = {v.todo,v.date,v.time}
            document.querySelector(`ul.result`).insertAdjacentHTML('beforeend', `
            <li>
            할일 : ${todo}, 날짜 : ${date}, 시간 : ${time}
            </li>
            `)
        })

    }

    const fnSort = () => {

        arrCopy.sort((a, b) => {

            if (a.date > b.date) return 1
            if (a.date < b.date) return -1
            else return 0;

        })

    }


    // let arr = [];
    // let arrCopy = [...arr];

    document.querySelector(`.todo_wrap .start_btn`).addEventListener('click', e => {

        arrCopy = [...arr]; // 추가한 데이터를 카피본에 한번 더 줘야지
        fnPush()
        fnPrint()
        /*        let todo = document.querySelector(`.todo_wrap input.works`).value;
            let date = document.querySelector(`.todo_wrap input.check`).value;
            let time = document.querySelector(`.todo_wrap input.time`).value;
            let obj = { todo, date, time };  // todo = todo, date = date, time = time;
            arr.push(obj)

            document.querySelector(`ul.result`).innerHTML = '';
            arr.forEach(v => {
                let { todo, date, time } = v; // let v = {v.todo,v.date,v.time}
                document.querySelector(`ul.result`).insertAdjacentHTML('beforeend', `
                    <li>
                    할일 : ${todo}, 날짜 : ${date}, 시간 : ${time}
                    </li>
                    `)
               }) */



    })

    /*   document.querySelector(`.todo_wrap .array`).addEventListener('click', e => {
  
          // arrCopy = [...arr]; // 추가한 데이터를 카피본에 한번 더 줘야지
  
          arrCopy.map(v => {
  
              fnSort()
              fnPrint()
                          // arrCopy.sort((a, b) => {
              
                          //     if (a.date > b.date) return 1
                          //     if (a.date < b.date) return -1
                          //     else return 0;
              
                          // })
  
              // document.querySelector(`ul.result`).innerHTML = '';
  
                          arrCopy.forEach(v => {
                              let { todo, date, time } = v; // let v = {v.todo,v.date,v.time}
                              document.querySelector(`ul.result`).insertAdjacentHTML('beforeend', `
                              <li>
                              할일 : ${todo}, 날짜 : ${date}, 시간 : ${time}
                              </li>
                              `)
                          })
          })
      })//날짜순으로 정렬 */

    document.querySelector(`.input_search`).addEventListener('input', e => {

        arrCopy = arr.filter((v) => { // return안에 조건을 적을 수 있다. // map과 filter는 새로운 배열이 필요할 떄 사용한다.

            return v.todo.includes(e.target.value)

        })

        // document.querySelector(`ul.result`).innerHTML = '';

        if (arrCopy.length !== 0) {

            fnPrint()
            /*  arrCopy.forEach(v => {
                 let { todo, date, time } = v; // let v = {v.todo,v.date,v.time}
                 document.querySelector(`ul.result`).insertAdjacentHTML('beforeend', `
                  <li>
                  할일 : ${todo}, 날짜 : ${date}, 시간 : ${time}
                  </li>
                  `)
             }) */
        } else document.querySelector(`ul.result`).innerText = '검색결과가 존재하지 않습니다.'



    })


}

