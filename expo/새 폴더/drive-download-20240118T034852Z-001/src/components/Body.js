import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Body(props){
  const handleCheck = () => {
    console.log('check!');
  }

  return(
    <View style={styles.container}>
      {props.todoList.map((todo)=>
        <View key={todo.tid} style={styles.todo}>
          <View style={styles.todoLeft}>
            <TouchableOpacity onPress={handleCheck}>
                <MaterialCommunityIcons 
                style={styles.icons} 
                name="checkbox-blank-outline" 
                size={24} 
                color="black" />  
            </TouchableOpacity>  
            
            <Text> {todo.text} </Text>
          </View>
          <View style={styles.todoLeft}>
            <MaterialIcons style={styles.icons} name="edit" size={24} color="black" />
            <MaterialCommunityIcons style={styles.icons} name="delete" size={24} color="black" />
          </View>
          
        </View>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginVertical: 5,
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
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
    flexDirection: 'row'
  },
  icons: {
    marginHorizontal: 5
  }
});
