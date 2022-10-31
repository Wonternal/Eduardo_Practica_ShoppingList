import { StyleSheet, View, Button, TextInput } from "react-native";
import ModalSelector from "react-native-modal-selector";

const InputContainer = ({ productName, setProductName, selectedQuantity, selectedType, setSelectedQuantity, setSelectedType, handleOnAdd }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.productNameInput} placeholder=" Product name" value={productName} onChangeText={(value) => setProductName(value)} />

            <ModalSelector
                style={styles.quantityInput}
                data={[
                    { key: 1, label: "1" },
                    { key: 2, label: "2" },
                    { key: 3, label: "3" },
                    { key: 4, label: "4" },
                    { key: 5, label: "5" },
                ]}
                initValue={selectedQuantity.toString()}
                onChange={(option) => {
                    setSelectedQuantity(option.key);
                }}
            />

            <ModalSelector
                style={styles.typeInput}
                data={[
                    { key: "fruit", label: "fruit" },
                    { key: "vegetable", label: "vegetable" },
                    { key: "bakery", label: "bakery" },
                    { key: "fish", label: "fish" },
                    { key: "meat", label: "meat" },
                ]}
                initValue={selectedType}
                onChange={(option) => {
                    setSelectedType(option.key);
                }}
            />

            <View style={styles.addButton}>
                {productName !== "" && selectedQuantity !== "Quantity" && selectedType !== "Type" ? (
                    <Button title="Add" onPress={() => handleOnAdd()} />
                ) : (
                    <Button title="Add" disabled />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: "grey",
    },

    productNameInput: {
        borderColor: "black",
        borderWidth: 2,
        width: "50%",
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: "white",
        textAlign: "center",
    },

    quantityInput: {
        borderColor: "black",
        borderWidth: 2,
        width: "35%",
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: "white",
    },

    typeInput: {
        borderColor: "black",
        borderWidth: 2,
        width: "50%",
        marginTop: "5%",
        borderRadius: 5,
        backgroundColor: "white",
    },

    addButton: {
        height: "auto",
        width: "35%",
        marginTop: "5%",
    },
});

export default InputContainer;
