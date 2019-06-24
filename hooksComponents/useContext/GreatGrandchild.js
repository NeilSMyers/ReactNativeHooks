import React, { useContext } from "react";
import { Text } from "react-native";

import { NameContext } from "./Parent";
import { styles } from "../../App";

const GreatGrandchild = () => {
  const name = useContext(NameContext);

  return <Text style={styles.text}>{name}</Text>;
};

export default GreatGrandchild;
