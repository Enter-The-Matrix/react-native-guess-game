import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess </Title>

      <View>
        <Text>Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 22,
    paddingTop: 36,
  },

});
