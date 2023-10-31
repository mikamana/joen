{

/* class Window{
  constructor(document){
    this.document = document{}
  }
}

let test = new Window()


class document{
  constructor(){
    this.
  }
} */




var num =101;
// 전역스코프에 num이라는 변수가 선언된 것과 global안에 num이라는 property가 생성된것은 다른 것
function hello(num){
  //이름만 콜스택에 등록되어 안에 객체가 잡히지않아 this는 부모인 global 객체를 잡는다.
  this.num= num;
  // global안에 num이라는 property가 생성된것임
  // 위처럼 사용하면 전역에 변수를 선언한 것처럼 호출해서 사용한다.
  // console.log(this);
  //this도 객체이다.
  //함수가 포함된 글로벌 객체를 나타내주었다. (호출하는 부모의 스코프 안에서 요소(객체)를 찾음)
}
// node에서는 export required 사용해서 모듈화시킴
hello(100);

console.log(global.num);
console.log(num);

/* class Test{

  constructor(name,age){
    this.name = name;
    this.age = age
    console.log(this);
    // class안에서 호출된 상태, 호출된 객체안에서 this는 객체 자기자신을 의미

  }

}

const t = new Test("hong"); */
}