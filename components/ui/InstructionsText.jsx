import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/constants/Colors";

function InstructionsText({ children,style }) {
  return <Text style={[styles.instructionText,style]}>{children}</Text>;
}

export default InstructionsText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily:'OpenSans-Regular',
    color: Colors.accent500,
    fontSize: 24,
  },
});
