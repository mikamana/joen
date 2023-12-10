import React, { useState } from 'react';
import styles from "../style.module.css";
import { v4 as uuidv4 } from 'uuid';
export default function AddTodo({ onAdd }) {

    const [text, setText] = useState('');

    const fnChange = (e) => {

        setText(e.target.value);

    }

    const fnClick = (e) => {

        onAdd({ id: uuidv4(), text, status: "Active" })
        setText('');

    }

    return (

        <>
            <div className={styles.input_wrap}>
                <input type="text" className={styles.input} value={text} onChange={fnChange} placeholder='Add Todo' />
                <button type="button" className={styles.add_btn} onClick={fnClick}>Add</button>
            </div>
        </>

    );
}

