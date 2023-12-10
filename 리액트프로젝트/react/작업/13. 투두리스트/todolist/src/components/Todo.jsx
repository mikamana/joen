import React from 'react';
import styles from "../style.module.css";
export default function Todo({ todo, onUpdate, onDelete }) {

    const fnChange = (e) => {

        const status = e.target.checked ? 'Completed' : 'Active';
        onUpdate({ ...todo, status })
        //li를 클릭하면 fnChange가 일어난다
        //각 li마다 가지고있는 todo가 다르다.
        //onUpdate함수로 자신이 부모로부터 받은 todo를 복사하고, status만 변경해서 부모로 보내준다.

    }

    const fnDelete = (e) => {

        onDelete({ ...todo })

    }

    const { text, status } = todo;

    return (
        <>
            <li className={styles.todo_li}>
                <p>
                    <input type="checkbox"
                        id="checkbox"
                        onChange={fnChange}
                        checked={status === "Completed"} />
                    <label htmlFor="checkbox">{text}</label>
                </p>
                <button onClick={fnDelete}>delete</button>
            </li>
        </>
    );
}

