import React, { Component } from "react";

import { connect } from "react-redux";

class Recomment extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="recomment-wrapper">
        {list.map(item => {
          return (
            <a href="" className="recomment-item" key={item.get('id')}>
              <img src={item.get('imageUrl')} alt="" />
            </a>
          );
        })}
      </div>
    );
  }
}

const mapStateProps = state => ({
  list: state.getIn(["home", "recommentList"])
});

export default connect(
  mapStateProps,
  null
)(Recomment);
