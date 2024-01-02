import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountItemRedux from '../components/CountItemRedux';
import CountTotal from '../components/CountTotal';


/* 컴포넌트 이벤트 호출과 스토어 중개 역할 */
export default function CountContainer() {

  //total , count값 가져오기

  // 1. useSelector를 이용하여 리듀서의 total, count 값 가져오기
  const { count, total } = useSelector(state => ({

    count: state.reduxCount.count,
    total: state.reduxCount.total

  }));

  

  // 2. dispatch를 이용하여 액션 이벤트 함수 처리

  const dispatch = useDispatch();

  const onPlus = () => {

    dispatch({ type: 'plus' })

  }

  const onReset = () => {

    dispatch({ type: 'reset' })

  }

  const onMinus = () => {

    dispatch({ type: 'minus' })


  }

  return (

    <>
      {/* total, count 값을 공유하는 컴포넌트 호출 */}
      <CountItemRedux
        count={count}
        total={total}
        onPlus={onPlus}
        onMinus={onMinus}
        onReset={onReset}
      /* 필요한 데이터만 선택해서 넘겨주어도된다.  */
      />
      <hr/>
      <CountItemRedux
        count={count}
        total={total}
        onPlus={onPlus}
        onMinus={onMinus}
        onReset={onReset}
      /* 필요한 데이터만 선택해서 넘겨주어도된다.  */
      />
      <hr/>
      <CountItemRedux
        count={count}
        total={total}
        onPlus={onPlus}
        onMinus={onMinus}
        onReset={onReset}
      /* 필요한 데이터만 선택해서 넘겨주어도된다.  */
      />
      <hr/>
      <CountTotal total={total}/>

    </>

  )

}

