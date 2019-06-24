import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../App";

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.time.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

export default Clock;
