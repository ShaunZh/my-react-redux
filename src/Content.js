import React, { Component } from "react";
import PropTypes from "prop-types";
// import connect from "./react-redux";
import { connect } from "react-redux";

import ThemeSwitch from "./ThemeSwitch";

class Content extends Component {
  static propTypes = {
    themeColor: ""
  };

  render() {
    return (
      <div className="content">
        <div style={{ color: this.props.themeColor }}>React-redux 实现内容</div>
        <ThemeSwitch />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  };
};

Content = connect(mapStateToProps)(Content);

export default Content;
