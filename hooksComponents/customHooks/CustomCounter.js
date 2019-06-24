import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../App";

import { useCounter } from "./useCounter";

const CustomCounter = () => {
  const { count, crement } = useCounter(20);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => crement(1)}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => crement(-1)}>
        <Text>Sub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCounter;
