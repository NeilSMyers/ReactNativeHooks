import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "../App";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  crement = amt => {
    this.setState({
      count: this.state.count + amt
    });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{this.state.count}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.crement(1)}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.crement(-1)}
        >
          <Text>Sub</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Counter;
