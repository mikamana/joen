import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Header({ addTodo }) {

  const [text, onChangeText] = useState('');

  const handleAddTodo = (e) => {

    const tid = parseInt(Math.random() * 1000);

    addTodo({ tid, text, status: 'active' });

  };

  return (

    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="할 일을 적어주세요"
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <MaterialCommunityIcons
            style={styles.addBtn}
            size={30}
            name='plus-circle'
          />
        </TouchableOpacity>

      </View>
    </View>

  );

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    flex: 1,
    height: 40,
    margin: 12,
    padding: 10,
  }

})