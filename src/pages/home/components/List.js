import React, { Component } from "react";
import { connect } from "react-redux";
import {actionCreators} from '../store'
class List extends Component {
  render() {
    const { list,getMoreList } = this.props;
    return (
      <div className="list-wrapper">
        {list.map(item => {
          return (
            <div className="list-item" key={item.get('id')}>
              <a href="">
                <img
                  src={item.get('imageUrl')}
                  alt=""
                />
              </a>
              <div className="content">
                <a href="#" className="title">
                  {item.get('title')}
                </a>
                <p className="abstract">
                  {item.get('desc')}
                </p>
                <div className="meta">
                  <div className="nickname">{item.get('nickName')}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="load-more" onClick={getMoreList}>更多</div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  // list:state.get('home').get('articleList')
  list: state.getIn(["home", "articleList"])
});

const mapDispatchProps = (dispatch) =>({
    getMoreList(){
        dispatch(actionCreators.getMoreList())
    }
})

export default connect(mapStateProps,mapDispatchProps)(List);
