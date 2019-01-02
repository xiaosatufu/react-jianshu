import React, { Component } from "react";
// import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import "./index.scss";

// const Header = props => {
// };

class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   focused: false
    // };
    // this.handleInputFocus = this.handleInputFocus.bind(this);
    // this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  getListArea() {
    if (this.props.focused) {
      return (
        <div className="search-info">
          <div className="title">热门搜索</div>
          <a href="#" className="change">
            换一批
          </a>
          <div className="clearfix" />
          <ul className="clearfix">
          {
            this.props.list.map((item)=>{
              return (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              )
            })
          }
            <li>
              <a href="#">区块链</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
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
          <div className="search-wrapper">
            <input
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
              type="text"
              className={`navSearch ${this.props.focused ? "focus" : ""}`}
              placeholder="搜索"
            />
            {this.getListArea()}
          </div>
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
  // handleInputFocus() {
  //   this.setState({
  //     focused: true
  //   });
  // }
  // handleInputBlur() {
  //   this.setState({
  //     focused: false
  //   });
  // }
}

const mapStateToProps = state => {
  return {
    // focused: state.header.focused
    // focused: state.header.get('focused')
    // focused: state.get('header').get('focused')
    focused: state.getIn(["header", "focused"]),
    list:state.getIn(["header",'list'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      // const action = {
      //   type: "search_focus"
      // };
      dispatch(actionCreators.getList());
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
