import React from "react";
import { StyleSheet, View } from "react-native";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Clock from "./components/Clock";

import HookClock from "./hooksComponents/HookClock";
import HookToggle from "./hooksComponents/HookToggle";
import HookCounter from "./hooksComponents/HookCounter";
import CustomCounter from "./hooksComponents/customHooks/CustomCounter";
import Parent from "./hooksComponents/useContext/Parent";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Counter />
      <Toggle />
      <Clock /> */}
      <HookCounter />
      <HookToggle />
      <HookClock />
      <Parent />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  wrapper: {
    alignItems: "center"
  },
  text: {
    fontSize: 50
  },
  button: {
    alignItems: "center",
    padding: 15,
    margin: 5,
    width: 120,
    backgroundColor: "#00cb78"
  }
});

export default App;
