import React, { Component } from "react";
import { connect } from "react-redux";
class Writer extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="writer-wrapper">
        <div className="writer-title">
          <span>推荐作者</span>
          <a href="#" className="page-change">
            换一批
          </a>
        </div>
        {list.map(item => {
          return(
            <div className="writer-item" key={item.get("id")}>
              <a href="#" className="avatar">
                <img src={item.get("avatar_source")} alt="" />
              </a>
              <a href="#" className="follow">
                关注
              </a>
              <a href="#" className="name">
                {item.get("nickname")}
              </a>
              <p>
                写了{Math.ceil(item.get("total_wordage") / 1000)}k字·
                {Math.ceil(item.get("total_likes_count") / 1000)}k人喜欢
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  list: state.getIn(["home", "writerList"])
});

export default connect(mapStateProps)(Writer);
