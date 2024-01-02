import React from 'react';

function createInitialState(){

  return {count:0, total:0};

}

export default function reduxCount(state = createInitialState(), action) {
  
  const tot = state.total;
  // reducer는 state와 action을 인자로 받아서 새로운 상태를 만드는 로직
  // action이라는 상태값은 dispatch에 의해서 자동으로 할당되어진다.  형태는 자유이다.
  // dispatch는 reducer의 action과 연계해주는 역할이라고 보면 된다.

  // switch (action.type) {
  //   case 'plus':
  //     return count + 1;
  //   case 'minus':
  //     return count - 1;
  //   case 'reset':
  //     return count = 0;
  // }



  // const [state, dispatch] = useReducer(reducer, 0);
  // 값은 state와 dispatch로 받아서 사용한다.
  // state는 우리가 사용할 state 값
  // dispatch는 action을 발생시키는 함수라고 생각하면 된다.
  // useReducer의 첫번째 인자는 reducer 함수이다.
  // useReducer의 두번째 인자는 초기값을 설정한다.

  if (action.type === 'plus') {
    // action은 default로 type이 지정되어있다.
    return {
      count: state.count + 1,
      total: tot + state.count
    }
  } else if (action.type === 'minus') {
    return {
      count: state.count - 1,
      total: tot - state.count
    }
  } else if (action.type === 'reset') {
    return {
      count:  0,
      total : 0
    }
  }else{
    return {
      count:0,
      total:0
    }
  }





}