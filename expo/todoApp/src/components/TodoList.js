import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function TodoList({ change, text, kid, status, remove, update }) {

  const [updateToggle, setUpdateToggle] = useState(false);
  const [input, onChangeInput] = useState('');

  const handleCheck = (check) => {

    change({ kid, text, check });

  }

  const deleteCheck = (kid) => {

    remove({ kid });

  }

  const handleUpdate = (e) => {

    update({ kid, text: input })

  };

  return (

    <>
      <View key={kid} style={styles.todo}>
        <View style={styles.todoLeft}>

          {status === 'complete'
            ?
            <TouchableOpacity onPress={() => {
              handleCheck('active');
            }}>
              <AntDesign
                style={{ marginRight: 10 }}
                name="checksquare"
                size={24}
                color="black" />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => {
              handleCheck('complete');
            }}>
              <MaterialCommunityIcons
                style={{ marginRight: 10 }}
                size={24}
                name='checkbox-outline'
              />
            </TouchableOpacity>
          }
          <Text >
            {text}
          </Text>
        </View>
        <View style={styles.todoRight}>
          <TouchableOpacity onPress={() => {

            deleteCheck(kid);

          }}>
            <AntDesign name="delete" size={24} color="black" style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {

            setUpdateToggle((update) => !update);

          }}>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {updateToggle
        ?
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", borderBottomColor: "#bbb", borderBottomWidth: StyleSheet.hairlineWidth, height: 50}}>
          <TextInput
            placeholder="업데이트 할 내용을 적어주세요."
            onChangeText={onChangeInput}
            value={input}
            style={{borderRightWidth:StyleSheet.hairlineWidth, borderRightColor:"#000", paddingRight:20}}
          />
          <TouchableOpacity onPress={() => {

            handleUpdate();

          }}>
            <Text>업데이트하기</Text>
          </TouchableOpacity>
        </View>
        :
        null
      }
    </>

  );

}


const styles = StyleSheet.create({

  container: {

    flex: 1

  },
  todo: {

    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  todoLeft: {
    flexDirection: 'row',
  },
  todoRight: {
    flexDirection: 'row',
  },

})