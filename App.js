import {StyleSheet, Text, View, Button, ScrollView, Image, Pressable} from 'react-native';
import {useState} from "react"
import uuid from 'react-native-uuid'
import InputContainer from './components/InputContainer';
import ListContainer from './components/ListContainer';

const App = () => {

  const [selectedQuantity, setSelectedQuantity] = useState("Quantity")
  
  const [selectedType, setSelectedType] = useState("Type")

  const [productName, setProductName] = useState("")

  const [productList, setProductList] = useState([])

  const handleOnAdd = () => {
    setProductList([...productList, {id:uuid.v4(), name:productName, quantity:selectedQuantity, bought:false, type:selectedType}])
    setSelectedType("Type")
    setProductName("")
    setSelectedQuantity("Quantity")
  }

  const handleOnPressProduct = (productId) => {
    setProductList(productList.filter((product) => {
      if (product.id === productId) {
        product.bought = !product.bought
      }
      return product
    }))
  }


  return (
    <View style={styles.container}>

      <InputContainer productName={productName} setProductName={setProductName} 
      selectedQuantity={selectedQuantity} 
      selectedType={selectedType} 
      setSelectedQuantity={setSelectedQuantity}
      setSelectedType={setSelectedType}
      handleOnAdd={handleOnAdd}/>

      <ListContainer
      productList={productList}
      handleOnPressProduct={handleOnPressProduct}
      />

      <View style={styles.buttonContainer}>
        {productList.length > 0 
        ? <Button title='clear' onPress={() => setProductList([])}/>
        : <Button title='clear' disabled/>}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    
  },

  // listContainer styles
  listContainer: {
    flex: 6,
    marginHorizontal: 20,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },


  product: {
    justifyContent:"space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    width: "90%",
    backgroundColor: "black",
    borderRadius: 5,
    marginTop: 10,
  },

  whiteText:{
    marginHorizontal:20,
    color: "white"
  },

  productImage:{
    marginHorizontal:20,
    height:50,
    width:50
  },


  // buttonContainer styles
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  
  }

});

export default App