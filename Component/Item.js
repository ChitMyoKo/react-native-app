import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const Item = (props) => {
  return (
    <TouchableOpacity
      style={styles.flatItemContainer}
      key={props.item.id}
      onPress={props.onDelete.bind(this, props.item.id)}
    >
      <View style={styles.flatItemCircle}>
        {/* <Text style={styles.whiteText}>{props.item.itemIndex + 1}</Text> */}
      </View>
      <Text>{props.item.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
  flatItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: "bule",
    borderWidth: 1,
    borderRadius: 5,
    padding: "0.8rem",
    marginTop: "0.4rem",
    backgroundColor: "#ffe68f",
  },
  flatItemCircle: {
    borderRadius: 50,
    width: "2rem",
    height: "2rem",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.8rem",
  },
});
export default Item
