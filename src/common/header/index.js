import React, { Component } from "react";
import "./index.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  render() {
    return (
      <div className="header-wrapper">
        <a href="/" className="logo" />
        <div className="nav">
          <div className="navItem left active">首页</div>
          <div className="navItem left">下载App</div>
          <div className="navItem right">登陆</div>
          <div className="navItem right">Aa</div>
          <input
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            type="text"
            className={`navSearch ${this.state.focused ? "focus" : ""}`}
            placeholder="搜索"
          /> 
        </div>
        <div className="addition">
          <a href="#" className="writting">
            写文章
          </a>
          <a href="#" className="reg">
            注册
          </a>
        </div>
      </div>
    );
  }
  handleInputFocus() {
    this.setState({
      focused: true
    });
  }
  handleInputBlur() {
    this.setState({
      focused: false
    });
  }
}

export default Header;
