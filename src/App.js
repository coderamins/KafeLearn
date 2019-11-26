import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Main from "./components/main";
import logo from "./";
import Footer from "./components/footer/footer";
import store from "./store/store";
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="demo-big-content" dir="rtl">
            <Layout>
              <Header
                title={
                  <span>
                    <strong>کافه کد</strong>
                  </span>
                }
                scroll
                img=""
              >
                <Navigation dir="rtl">
                  <a href="/home">صفحه نخست</a>
                  <a href="/tutorials">دوره ها</a>
                  <a href="/about">درباره ما</a>
                  <a href="/contact">ارتباط با ما</a>
                  <div className="clientarea">
                    <Link to="/signup">ثبت نام</Link>
                    <span> / </span>
                    <a href="/login">ورود</a>
                  </div>
                </Navigation>
              </Header>

              <Content>
                <div className="page-content" />
                <Main />                
              </Content>

              <Footer />
            </Layout>           
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
