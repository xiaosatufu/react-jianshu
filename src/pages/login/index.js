import React, { Component } from "react";

import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-box">
          <form action="">
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({});
const mapDispatchProps = dispatch => ({});

export default connect(
  mapStateProps,
  mapDispatchProps
)(Login);
