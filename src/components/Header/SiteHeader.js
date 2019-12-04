import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class SiteHeader extends Component {
  render() {
    return (
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
    );
  }
}

export default SiteHeader;
