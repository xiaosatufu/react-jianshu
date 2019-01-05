import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              {/* <Route path="/" exact render={() => <div>home</div>} /> */}
              {/* <Route path="/detail" exact render={() => <div>detail</div>} /> */}
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/detail/:id" exact component={Detail} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
