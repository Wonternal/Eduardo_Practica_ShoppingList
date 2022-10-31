import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";

const ListContainer = ({ productList, handleOnPressProduct }) => {
    return (
        <View style={styles.listContainer}>
            {productList.length === 0 ? <Text style={[styles.whiteText, { textAlign: "center", marginTop: 20 }]}>Empty Shopping List</Text> : null}
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center" }}>
                {productList.map((product) => {
                    let imagePath;

                    switch (product.type) {
                        case "meat":
                            imagePath = require("../assets/meat.jpg");
                            break;
                        case "vegetable":
                            imagePath = require("../assets/vegetable.jpg");
                            break;
                        case "fish":
                            imagePath = require("../assets/fish.jpg");
                            break;
                        case "bakery":
                            imagePath = require("../assets/bakery.jpg");
                            break;
                        case "fruit":
                            imagePath = require("../assets/fruit.jpg");
                            break;
                    }

                    return product.bought ? (
                        <Pressable key={product.id} style={{ width: "100%", alignItems: "center" }} onPress={() => handleOnPressProduct(product.id)}>
                            <View style={[styles.product, { backgroundColor: "white" }]} key={product.id}>
                                <Image style={styles.productImage} source={imagePath} />
                                <Text style={[styles.whiteText, { textDecorationLine: "underline line-through", color: "black" }]}>
                                    {product.quantity} x {product.name}
                                </Text>
                            </View>
                        </Pressable>
                    ) : (
                        <Pressable key={product.id} style={{ width: "100%", alignItems: "center" }} onPress={() => handleOnPressProduct(product.id)}>
                            <View style={styles.product} key={product.id}>
                                <Image style={styles.productImage} source={imagePath} />
                                <Text style={styles.whiteText}>
                                    {product.quantity} x {product.name}
                                </Text>
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 60,
        width: "90%",
        backgroundColor: "black",
        borderRadius: 5,
        marginTop: 10,
    },

    whiteText: {
        marginHorizontal: 20,
        color: "white",
    },

    productImage: {
        marginHorizontal: 20,
        height: 50,
        width: 50,
        borderRadius: 15,
    },
});

export default ListContainer;
