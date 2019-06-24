import React from "react";
import { Text, View } from "react-native";
import { styles } from "../App";

const HookClock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    let interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text style={styles.text}>{time.toLocaleTimeString()}</Text>
    </View>
  );
};

export default HookClock;
