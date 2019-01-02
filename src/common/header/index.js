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
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (!newList.length) {
      return;
    }
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      // console.log(i)
      // console.log(newList[i])
      pageList.push(
        <li key={newList[i]}>
          <a href="#">{newList[i]}</a>
        </li>
      );
    }

    // console.log(pageList)
    if (focused || mouseIn) {
      return (
        <div
          className="search-info"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="title">热门搜索</div>
          <a
            href="javascript:;"
            className="change"
            onClick={() => handleChangePage(page, totalPage)}
          >
            换一批
          </a>
          <div className="clearfix" />
          <ul className="clearfix">{pageList}</ul>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
              type="text"
              className={`navSearch ${focused ? "focus" : ""}`}
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
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      // console.log(list);
      // const action = {
      //   type: "search_focus"
      // };
      // if (list.size === 0) {
      //   dispatch(actionCreators.getList());
      // }
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      // const action = {
      //   type: "search_blur"
      // };
      dispatch(actionCreators.searchBulr());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      console.log(page, totalPage);
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
