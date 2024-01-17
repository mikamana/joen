import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [list, setList] = useState([1, 2, 3, 4]);



  return (
    <View style={styles.container}>
      <View style={styles.top}>
      </View>
      <View style={styles.middle}>
        <View style={styles.row1}></View>
        <View style={styles.row2}></View>
        <View style={styles.row3}></View>
      </View>

      <View style={styles.bottom}>
        {
          list.map((val, idx) => {

            return <View style={styles.button}>
              <Text style={styles.buttonLabel}>
                Column
              </Text>
            </View>

          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  top: {
    flex: 1,
    backgroundColor: 'tomato'
  },
  middle: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'green'
  },
  bottom: {
    flexDirection: 'row',
    flex: 3,
    flexWrap: 'wrap',
    backgroundColor: 'blue',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  buttonLabel: {
    color: 'coral',
    fontSize: 12
  },
  row1: {
    flex: 1,
    backgroundColor: 'red',
  },
  row2: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  row3: {
    flex: 1,
    backgroundColor: 'green',
  }
});


