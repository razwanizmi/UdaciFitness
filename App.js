import React, { Component } from "react";
import { View } from "react-native";
import { AddEntry } from "./components";

class App extends Component {
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}

export default App;