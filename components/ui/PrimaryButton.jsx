import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import Colors from "../../utils/constants/Colors";

function PrimaryButton({ children ,onPress }) {


  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress} // {onPress} is the pro passed by the other components
        style={({ pressed }) => //pressed given by react native here
          pressed
            ? [styles.buttonInnerContainer, styles.pressed] //adding 2 styles using array
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
