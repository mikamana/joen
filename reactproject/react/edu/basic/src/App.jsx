import './App.css';
import Profile from './components/Profile';

function App() {
  // const name = '홍길동';
  // const array = ['HTML','CSS','REACT'];
  // const item = [];

  // for(let i = 0; i<array.length; i++){

  //   let t = array[i]

  //   item.push(<li><a href="#">{t}</a></li>);

  // }


  // 화살표함수를 어널마우스 펑션이라고함
  // map안에 블레이스가 들어가면 비즈니스 로직이 들어감 즉, return 키워드가 필요함
  // 에로우펑션안에 코드가 한 줄만 들어가면 블레이스가 필요 없이 코드만 적고 실행(편리)

  return (
    <>
      <Profile />
      <Profile />
    </>
  )

}

export default App;
