import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import Item from "./Component/Item";
import ItemInput from "./Component/ItemInput";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const addItem = (itemName) => {
    let newItem = { id: Math.random().toString(), name: itemName };
    setItemList((perviousList) => [...perviousList, newItem]);
  };
  const deleteItem = (itemID) => {
    setItemList((itemList) => {
      return itemList.filter((item) => item.id !== itemID);
    });
  };
  return (
    <View style={styles.container}>
      <ItemInput onAdd={addItem} />
      <FlatList
        data={itemList}
        renderItem={(itemData) => (
          <Item onDelete={deleteItem} item={itemData.item} />
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "0.8rem",
  },
});
