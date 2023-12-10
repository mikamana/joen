import { useEffect, useState } from "react";
import LiWrap from "./components/LiWrap";
import styles from "./style.module.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
// import NewStyles from "./new.module.css";
// 컴포넌트 사용시 해당 컴포넌트의 css를 임포트해서 사용하는것이 효율적

// import New from "./New";

function App() {




  //navList -- header
  const [navList, setNavList] = useState(["All", "Active", "Completed"]);

  //getNav
  const [nav, setNav] = useState('All');

  //todoList -- list
  const [todos, setTodos] = useState([]);

  const [filters, setFilters] = useState([]);


  const fnGetNav = (e) => {

    setNav(e);

  };

  const fnUpdate = (update) => {

    setTodos(todos.map(t => t.id === update.id ? update : t));

  };

  const fnDelete = (deleted) => {

    setTodos(todos.filter(todo => todo.id !== deleted.id));

  };

  const handleAdd = (todo) => {

    //새로운 투두를 todos에 업데이트 해야한다.

    setTodos([...todos, todo]);

  }

  // const filtered = getFilteredItems(todos, nav);
  const filtered = nav === "All" ? todos : todos.filter(todo => todo.status === nav);

  /*
  함수형 컴포넌트 안에 중첩 함수 형태로 선언하면, 함수 파라미터로 todos와 filter를 넘기지 않아도 될 것 같은데 외부에 선언하신 이유가 따로 있을까요?
  그렇게 사용하셔도 되어요. 다만 함수내부의 다른 상태와 밀접하게 연관 있는 함수가 아니라면, 차라리 인자로 받아서 외부에선언하는게 메모리 측면에서 더 낫겠죠? :)
  */
  // function getFilteredItems(todos, nav) {
  //   if (nav === 'All') {
  //     return todos;
  //   }
  //   return todos.filter(todo => todo.status === nav)
  // }



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
            {filtered.map((item) => (

              <Todo
                key={item.id}
                todo={item}
                onUpdate={fnUpdate}
                onDelete={fnDelete}
              />
              // map을 사용하면 배열의 index만큼 순회한다.
              // 변수를 넣어주면 값을 복사해서 새로운 배열을 만든다.
              // 즉 li 태그를 사용하면 배열의 개수만큼 반복된다.
              // 한가지 주의할 점은, li에 key값을 지정해야한다.

              // 컴포넌트를 분리하여 내용을 넣어주었고,
              // 각 컴포넌트에 props로 todo={item} 을 넣어주었기 때문에
              // 각 li는 todos의 index에 맞는 item(객체값)을 갖게된다.

            ))}
          </ul>
          <AddTodo onAdd={handleAdd} />
        </div >
      </div >
    </>
  );
}



export default App;
