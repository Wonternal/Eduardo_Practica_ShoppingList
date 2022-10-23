import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useState} from "react"
import {Picker} from '@react-native-picker/picker';

const App = () => {

  const [selectedQuantity, setSelectedQuantity] = useState(0)
  
  const [selectedType, setSelectedType] = useState("noType")

  const [productName, setProductName] = useState("")

  const [productList, setProductList] = useState([])


  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>

        <TextInput style={styles.productNameInput} placeholder=' Product name' onChangeText={(value) => setProductName(value)}/>

        <Picker style={styles.quantityInput} selectedValue={selectedQuantity} onValueChange={(value) => setSelectedQuantity(value)}>
          <Picker.Item label="Quantity" value="0" />
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>

        <Picker style={styles.typeInput} selectedValue={selectedType} onValueChange={(value) => setSelectedType(value)}>
          <Picker.Item label="Type" value="noType" />
          <Picker.Item label="fruit" value="fruit" />
          <Picker.Item label="vegetable" value="vegetable" />
          <Picker.Item label="bakery" value="bakery" />
          <Picker.Item label="fish" value="fish" />
          <Picker.Item label="meat" value="meat" />
        </Picker>

        <View style={styles.addButton}>
          <Button title='Add' onPress={() => console.log(productName,selectedQuantity,selectedType,)}/>
        </View>

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
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "grey"
  },

  productNameInput: {
    borderColor: "black",
    borderWidth: 2,
    height: 53,
    width: "50%",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "white"
  },

  quantityInput: {
    borderColor: "black",
    borderWidth: 2,
    width: "35%",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "white"
  },
  
  typeInput: {
    borderColor: "black",
    borderWidth: 2,
    width: "50%",
    marginTop: "5%",
    borderRadius: 5,
    backgroundColor: "white"
  },

  addButton: {
    height: "auto",
    width: "35%",
    marginTop: "5%"
  },

  listContainer: {
    flex: 6,
  },

  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  
  }

});

export default App