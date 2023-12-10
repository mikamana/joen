import { useEffect, useState } from "react";
import LiWrap from "./components/LiWrap";
import styles from "./style.module.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
// import NewStyles from "./new.module.css";
// 컴포넌트 사용시 해당 컴포넌트의 css를 임포트해서 사용하는것이 효율적

// import New from "./New";

function App() {

  //todoList
  const [todo, setTodo] = useState([{ id: "장보기", text: "", status: "active" }, { id: "장", text: "", status: "active" }]);
  //navList
  const [navList, setNavList] = useState(["All", "Active", "Completed"]);
  //getNav
  const [nav, setNav] = useState('');
  //setCheckChange
  const [checkChange, setCheckChange] = useState("active");
  //content
  const [content, setContent] = useState("");

  /*   const fnChange = (e) => {
  
      setContent(e.target.value);
  
    } */

  /*   const fnClick = (e) => {
  
      // list.push(todo); push를 사용하지않고 배열에 값 추가
  
      if (content.trim().length === 0) { // trim으로 앞뒤여백을 다 줄인 후에 length가 0이면 return(아무것도해주지않음) 을 해줌
        return;
      }
  
      setTodo([...todo, todo]); // //전개 연산자를 이용해서 새로운 배열을 생성
      setContent("");
  
    } */

  // const fnUpdate = (update) => {

  //   // setTodo(todo.map(todo => todo.id === update.id ? update : todo))

  // }

  // const fnDelete = (deleted) => {


  //   alert("삭제되었습니다.")
  //   setTodo(todo.filter(todo => todo.id !== deleted))

  // }

  const fnGetNav = (e) => {

    setNav(e);

  }

  const handleAdd = (todo) => {

    //새로운 투두를 todos에 업데이트 해야한다.

    console.log(todo);
    setTodo([...todo, todo]);

  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.modal}>
          <nav className={styles.nav}>
            <div className={styles.mode_icon}>
            </div>
            <ul className={styles.nav_list}>
              <LiWrap list={navList}
                getNav={fnGetNav}
              />
            </ul>
          </nav>
          <ul className={styles.todo_list}>
            {todo.map((item) => (

              <Todo
                key={item.id}
                todo={item}
              // onUpdate={fnUpdate}
              // onDelete={fnDelete}
              />

            ))}
          </ul>
          <AddTodo onAdd={handleAdd} />
        </div >
      </div >
    </>
  );
}

export default App;
