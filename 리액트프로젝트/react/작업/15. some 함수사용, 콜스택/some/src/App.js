import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

 const App = () =>{

  /* useEffect(()=>{

    a();

    

    setTimeout(()=>{

      

    },10);

    setTimeout(() => {
      
      console.log("test");

    }, 10);

  },[]); */

  // 자바스크립트 런타임될 때 비동기함수는 Event Loop가 콜스택이 비어있는 것을 확인해서 실행시켜 준다는게 어떤 원리인지
  // 비동기 함수는 WebApi로 넘어가고, abc함수가 다 실행이 되면 setTimeout이 콜스택에 들어가 실행이 되는 것인지

  /* function a(){


    console.log('a = ' + 1);
    // for(let i=0; i<=1000; i++){

    //   console.log(i);

    // };

  }

  function b(){
    setTimeout(()=>{
      console.log('b = ' +2);
    },[1000])
  }
 */

  /* async function c(){

    let first = new Promise((resolve, reject)=>{

      setTimeout(() => {
        console.log("c = " + 3);
      }, 1000);

    })

    let second = new Promise((resolve, reject)=>{

      setTimeout(() => {
        console.log("cc = " + 3);
      }, 1000);

    });

  } */

  // 동기적으로 프로그램을 실행시킬 때 

    //callback

  function c() {
    return new Promise((resolve) => {
        console.log('c');
        resolve();
    });
  }
  
  function b() {
      return new Promise((resolve) => {
          c().then(() => {
              console.log('b finished after c');
              resolve();
          });
      });
  }
  
  function a() {
      return new Promise((resolve) => {
          b().then(() => {
              console.log('a finished after b');
              resolve();
          });
      });
  }
  
  function callback() {
      a().then(() => {
          console.log('callback finished after a');
      });
  }

  // 실행전 : pending
  // 실행후(성공) : resolve
  // 실행후(실패) : reject
  


  
  
  callback();





    






    






  // a();
  // b();


  /* async function b(){

    await delay();
    await delay2();

  } */

  /* function delay(){

    return new Promise(resolve => setTimeout(() => {
      console.log("22");
    }, 1000));

  }
  
  function delay2(){

    return new Promise(resolve => setTimeout(() => {
      console.log("22");
    }, 1000));

  } */

  return (
    <div className="App">

    </div>
  );
}

export default App;
