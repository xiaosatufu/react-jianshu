import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
class List extends Component {
  render() {
    const { list, getMoreList } = this.props;
    return (



      <div className="list-wrapper">
        {list.map(item => {
          return (
            <Link key={item.get("id")} to={"/detail/" + item.get("id")}>
              <div className="list-item">
                <span>
                  <img src={item.get("imageUrl")} alt="" />
                </span>
                <div className="content">
                  <span className="title">
                    {item.get("title")}
                  </span>
                  <p className="abstract">{item.get("desc")}</p>
                  <div className="meta">
                    <div className="nickname">{item.get("nickName")}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="load-more" onClick={getMoreList}>
          更多
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  // list:state.get('home').get('articleList')
  list: state.getIn(["home", "articleList"])
});

const mapDispatchProps = dispatch => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList());
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(List);
