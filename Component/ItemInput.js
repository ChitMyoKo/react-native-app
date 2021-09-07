import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ItemInput = (props) => {
  const [itemName, setItemName] = useState("");
  return (
    <View style={styles.inputContrainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter item name..."
        value={itemName}
        onChangeText={(value) => setItemName(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={props.onAdd.bind(this, itemName)}
      >
        <Text style={styles.whiteText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
  },
  button: {
    alignSelf: "flex-end",
    width: "3rem",
    height: "3rem",
    borderRadius: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0.8rem",
  },
  whiteText: {
    color: "white",
  },
  inputContrainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    padding: "0.8rem",
  },
});

export default ItemInput;
