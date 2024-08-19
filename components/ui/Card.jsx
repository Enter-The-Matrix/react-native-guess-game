import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../utils/constants/Colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, //in android
    shadowColor: "black", //in ios
    shadowOffset: { width: 0, height: 2 }, //in ios
    shadowRadius: 6, //in ios
    shadowOpacity: 0.25, //in ios
  },
});
