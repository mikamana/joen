import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux'; // 스토어 라이브러리
import { Provider } from 'react-redux';
import rootReducer from './module_redux/rootReducer';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

// const rname = '홍길동';
// 0. 공유 데이터 정의
// module_redux 폴더를 따로 생성한 후 redux를 별도로 보관
// 1. 스토어 호출 함수 > rootReducer 안에 reducer들을 호출
/* 
  function reducer(state=rname,action){
  // 첫번째 인자 = 현재상태
  // 두번째 인자 = 컴포넌트 액션처리변수
  return state
};
*/
// 2. 스토어 생성 및 리듀서 정의
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
  );
// 3. Provider 임폴트 > 리액트 리덕스를 관리
// 4. reducer 파일과 동일한 함수명을 생성 후에 첫번째 인자값의 state 초기값을 지정
// 5. 함수의 두번째 인자는 action으로 redux를 사용하는 곳에서 클릭 기능등 상태를 변경할 경우 dispatch와 연결
// 6. if, switch 등을 사용하여 action값에 따른 조건등을 지정하여 state나 action을 return 시켜준다.
// 4. redux를 사용할 컴포넌트에서 useSelector 호출하여 state 값 받아서 사용
// 5. reselector 라이브러리 사용하여 메모이제이션 시켜주어 성능을 최적화
// 6. 배열의 값이 변경될 때만, 함수가 수행되도록 해주는 메모제이션기능을 수행
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
