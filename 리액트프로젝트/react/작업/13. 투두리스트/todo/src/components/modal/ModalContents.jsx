import React, { useState } from 'react';
import styles from '../../styles/modal/modal.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function ModalContents() {

  const [contents, setContents] = useState("");
  // input contents

  const [todo, setTodo] = useState([]);
  // todoList 리스트 출력

  const [active, setActive] = useState(0);
  // active 됐을 때 nav메뉴 변경

  const fnChange = (e) => {

    setContents(e.target.value);

  }

  const fnAdd = () => {

    setTodo([...todo, { id: uuidv4(), contents, status: "Active" }])

  }

  const fnUpdate = (e, node) => {

    const status = e.target.checked === true ? "Completed" : "Active";

    setTodo(todo.map((t, i) => t.id === node.id ? { ...t, status } : t));

  }

  const onDelete = (node) => {

    setTodo(todo.filter((t) => t.id !== node.id))

  }

  return (
    <>
      <section className={styles.modal_section}>
        <div className={styles.modal_wrap}>
          <header className={styles.modal_header}>
            <nav className={styles.modal_nav}>
              <span className={styles.dark_icon}></span>
              <ul className={styles.modal_list}>
                <li className={active === 0 ? `${styles.modal_li} ${styles.active}` : `${styles.modal_li}`} onClick={() => {

                  setActive(0);

                }}>
                  All
                </li>
                <li className={active === 1 ? `${styles.modal_li} ${styles.active}` : `${styles.modal_li}`} onClick={() => {

                  setActive(1);

                }}>
                  Active
                </li>
                <li className={active === 2 ? `${styles.modal_li} ${styles.active}` : `${styles.modal_li}`} onClick={() => {

                  setActive(2);

                }}>
                  Completed
                </li>
              </ul>
            </nav>
          </header>
          <main className={styles.main_wrap}>
            <ul className={styles.main_list}>
              {
                todo.map((node, idx) =>
                  <>
                    <li className={styles.main_li}>
                      <p className={styles.input_wrap}>
                        <label htmlFor="checked"></label>
                        <input type="checkbox" name="checkbox" id="checked" onChange={(e) => {
                          fnUpdate(e, node);

                        }} />
                        <span className={styles.span_list}>{node.contents}</span>
                      </p>
                      <button type="button" className={styles.del_btn} onClick={() => {
                        onDelete(node)
                      }
                      }>
                        삭제
                      </button>
                    </li >
                  </>

                )
              }
            </ul>
          </main>
          <footer className={styles.footer_wrap}>
            <label htmlFor="add"></label>
            <input type="text" className={styles.footer_input} name="add" onChange={fnChange} />
            <button type='button' className={styles.add_btn} onClick={fnAdd}>Add</button>
          </footer>
        </div>
      </section >
    </>
  );
}

