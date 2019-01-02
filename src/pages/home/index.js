import React, { Component } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recomment from "./components/Recomment";
import Writer from "./components/Writer";
import "./index.scss";

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-left">
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </div>
        <div className="home-right">
          <Recomment />
          <Writer />
        </div>
      </div>
    );
  }
}

export default Home;
