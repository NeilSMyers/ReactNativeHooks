import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "../App";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count - 1)}
      >
        <Text>Sub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HookCounter;
