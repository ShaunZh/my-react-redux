import React, { Component } from "react";
import PropTypes from "prop-types";
// import connect from "./react-redux";

import { connect } from "react-redux";

class ThemeSwitch extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(color) {
    this.props.onSwitchThemeColor(color);
  }
  render() {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => this.handleClick("blue")}
        >
          blue
        </button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => this.handleClick("red")}
        >
          red
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSwitchThemeColor: color => {
      dispatch({ type: "CHANGE_COLOR", themeColor: color });
    }
  };
};

ThemeSwitch = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitch);

export default ThemeSwitch;
