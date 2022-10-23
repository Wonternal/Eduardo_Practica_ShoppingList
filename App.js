import {StyleSheet, Text, View, Button, TextInput, ScrollView, Image, Pressable} from 'react-native';
import {useState} from "react"
import uuid from 'react-native-uuid'
import ModalSelector from 'react-native-modal-selector'

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

      <View style={styles.inputContainer}>
        <TextInput style={styles.productNameInput} placeholder=' Product name' value={productName} onChangeText={(value) => setProductName(value)}/>

        <ModalSelector
          style={styles.quantityInput}
          data={[
            { key: 1, label: '1' },
            { key: 2, label: '2'},
            { key: 3, label: '3'},
            { key: 4, label: '4'},
            { key: 5, label: '5'}
          ]}
          initValue={selectedQuantity.toString()}
          onChange={(option)=>{ setSelectedQuantity(option.key)}} />
        
        <ModalSelector
          style={styles.typeInput}
          data={[
            { key: "fruit", label: 'fruit' },
            { key: 'vegetable', label: 'vegetable'},
            { key: 'bakery', label: 'bakery'},
            { key: 'fish', label: 'fish'},
            { key: 'meat', label: 'meat'}
          ]}
          initValue={selectedType}
          onChange={(option)=>{ setSelectedType(option.key)}} />

        <View style={styles.addButton}>
          {productName !== "" && selectedQuantity !== "Quantity" && selectedType !== "Type" 
          ? <Button title='Add' onPress={() => handleOnAdd()}/>
          : <Button title='Add' disabled/>}
        </View>
      </View>

      <View style={styles.listContainer}>
        <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems: "center"}}>
          {productList.map((product) => {
            let imagePath;
            
            switch (product.type) {
              case "meat":
                imagePath = require("./assets/meat.jpg")
                break;
              case "vegetable":
                imagePath = require("./assets/vegetable.jpg")
                break;
              case "fish":
                imagePath = require("./assets/fish.jpg")
                break;
              case "bakery":
                imagePath = require("./assets/bakery.jpg")
                break;
              case "fruit":
                imagePath = require("./assets/fruit.jpg")
                break;
            }
            
            return (
              product.bought 
              ? <Pressable key={product.id} style={{width: "100%", alignItems: "center"}} onPress={() => handleOnPressProduct(product.id)}>
                  <View style={[styles.product, {backgroundColor: "white"}]} key={product.id}> 
                    <Image style={styles.productImage} source={imagePath}/>
                    <Text style={[styles.whiteText, {textDecorationLine: "underline line-through", color: "black"}]}>{product.quantity} x {product.name}</Text>
                  </View>
                </Pressable>
              : <Pressable key={product.id} style={{width: "100%", alignItems: "center"}} onPress={() => handleOnPressProduct(product.id)}>
                  <View style={styles.product} key={product.id}> 
                    <Image style={styles.productImage} source={imagePath}/>
                    <Text style={styles.whiteText}>{product.quantity} x {product.name}</Text>
                  </View>
                </Pressable>


            )
          })}
        </ScrollView>
      </View>

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

  // InputContainer styles
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
    width: "50%",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "white",
    textAlign: "center"
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