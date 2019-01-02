import React, { Component } from "react";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    return (
      <div className="topic-wrapper">
        {this.props.list.map(item => {
          return (
            <div className="topic-item" key={item.get("id")}>
              <img src={item.get("imgUrl")} alt="" />
              {item.get("title")}
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateProps = state => ({
  list: state.get("home").get("topicList")
});
export default connect(
  mapStateProps,
  null
)(Topic);
