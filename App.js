import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <Text>Input</Text>
      </View>

      <View style={styles.listContainer}>
        <Text>Lista</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title='clear'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  inputContainer: {
    flex: 2,
  },

  listContainer: {
    flex: 4,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  
  }

});

export default App