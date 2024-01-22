import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { useState } from 'react';
import Body from './src/components/Body';

export default function App() {

  const [array, setArray] = useState([]);

  const addTodo = (e) => {

    setArray([...array, e]);

  }

  console.log(array);

  //todoList앱 
  //텍스트(todo) 추가시 내용이 화면에 출력
  //  플러스 버튼 클릭시 배열에 값 추가
  //추가한 텍스트를 각각 체크하여 수정 및 삭제할 수 있음
  //  각버튼에 대한 수정 및 삭제는 고유한 key를 통하여 필터나 splice를 사용함




  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Todo List!</Text>
      <Header addTodo={addTodo} />
      <Body array={array} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    marginLeft: 30,
    marginBottom: 20
  }
});
