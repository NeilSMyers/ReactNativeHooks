import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../App";

const HookToggle = () => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{toggle ? "Hello" : "Goodbye"}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setToggle(!toggle)}
      >
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HookToggle;
