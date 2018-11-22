import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// import createStore from "./redux";  // 自己实现的redux
// import { Provider } from "./react-redux";  // 自己实现的react-redux

import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from "./Header";
import Content from "./Content";

import "./styles.css";

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: "red"
    };
  }
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        themeColor: action.themeColor
      };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
