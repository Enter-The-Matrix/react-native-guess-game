import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        borderRadius:8,
        backgroundColor:'#72063c',
        elevation: 4, //in android
        shadowColor:'black', //in ios
        shadowOffset:{width:0, height:2}, //in ios
        shadowRadius:6, //in ios
        shadowOpacity:0.25 //in ios
    }
});
