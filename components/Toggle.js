import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../App";

class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      toggle: true
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          {this.state.toggle ? "Hello" : "Goodbye"}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ toggle: !this.state.toggle })}
        >
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Toggle;
