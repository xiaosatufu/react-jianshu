// import React, { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import  {actionCreators} from './store'
import "./index.scss";

const Header = props => {
  return (
    <div className="header-wrapper">
      <a href="/" className="logo" />
      <div className="nav">
        <div className="navItem left active">首页</div>
        <div className="navItem left">下载App</div>
        <div className="navItem right">登陆</div>
        <div className="navItem right">Aa</div>
        <input
          onFocus={props.handleInputFocus}
          onBlur={props.handleInputBlur}
          type="text"
          className={`navSearch ${props.focused ? "focus" : ""}`}
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
};

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   focused: false
//     // };
//     // this.handleInputFocus = this.handleInputFocus.bind(this);
//     // this.handleInputBlur = this.handleInputBlur.bind(this);
//   }
//   render() {
//     return (
//     );
//   }
//   // handleInputFocus() {
//   //   this.setState({
//   //     focused: true
//   //   });
//   // }
//   // handleInputBlur() {
//   //   this.setState({
//   //     focused: false
//   //   });
//   // }
// }

const mapStateToProps = state => {
  return {
    // focused: state.header.focused
    focused: state.header.get('focused')
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      // const action = {
      //   type: "search_focus"
      // };
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      // const action = {
      //   type: "search_blur"
      // };
      dispatch(actionCreators.searchBulr());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
