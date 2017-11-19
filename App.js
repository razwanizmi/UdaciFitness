import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { AddEntry } from "./components";
import reducer from "./reducers";

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}

export default App;
