import React from "react";
import styles from "./css/app.module.css";
import classNames from 'classnames/bind';
import Hello2 from "./Hello2";

// hello 컴포넌트 안에서 따로 hello.css를 사용했지만, 오버라이딩 되어버렸다.
// 이유는 html의 head 부분에 <style></style>이 각각 따로 적용이 되어서 css가 중복되어버린 이유이다.
// 전페이지에 css가 적용된다. 이렇게 css가 중복됨을 방지하기위해 module.css를 사용한다.
// module.css를 사용하면 컴포넌트 단위로 css를 관리할 수 있다.

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아오도록 설정함

function App2() {

  return (
    <>
      <header className={cx("box")}>가나다</header>
      <Hello2 />
    </>
  );
}

export default App2;
