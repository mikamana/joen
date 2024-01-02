import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux'; // 스토어 라이브러리
import { Provider } from 'react-redux';
import rootReducer from './module_redux/rootReducer';

// const rname = '홍길동';
// 0. 공유 데이터 정의
// 1. 스토어 호출 함수

/* function reducer(state=rname,action){
  // 첫번째 인자 = 현재상태
  // 두번째 인자 = 컴포넌트 액션처리변수
  return state
}; */


// 2. 스토어 생성 및 리듀서 정의
const store = createStore(rootReducer);
// 3. Provider 임폴트 > 리액트 리덕스를 관리

// 4. 모든 리덕스 관리 파일 생성 
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
