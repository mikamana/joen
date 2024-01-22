import { StyleSheet, View } from "react-native";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Body({ array }) {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {

    setTodoList(array);

  });

  const fnChange = (e) => {

    const checkFilter = todoList.filter((val, idx) => {

      return val.tid === e.kid ? val.status = e.check : val.status

    })

    setTodoList(checkFilter);

  }

  const fnDelete = (e) => {

    const removeIndex = todoList.findIndex(todo => todo.tid === e.kid);

    if (removeIndex !== -1) {

      const removeTodoList = todoList.splice(removeIndex, 1);

      setTodoList(removeTodoList);

    }
  }

  const fnUpdate = (e) => {

    const updateText = todoList.filter((val, idx) => {

      return val.tid === e.kid ? val.text = e.text : val.text

    });

    setTodoList(updateText);

  }

  // 출력할 Body에 객체안에있는 text값을 출력
  // 객체 안에 있는 status가 변하면 버튼 아이콘이 변함
  // Header를 통해 받은 데이터를 따로 state에 저장하여 state를 통해 map을 사용
  // 배열 안 객체의 데이터를 변경시켜야함

  useEffect(() => {

    axios({

      method: 'get',
      url: "http://192.168.50.82:8000/todo/"

    }).then((result) => {

      console.log('test');

    })

  }, [])


  return (

    <View style={styles.container}>
      {todoList.map((val, idx) => (
        <TodoList text={val.text} kid={val.tid} status={val.status} change={fnChange} remove={fnDelete} update={fnUpdate} />
      ))}
    </View >

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    marginHorizontal: 20,
    color: '#FFF',

  },



})