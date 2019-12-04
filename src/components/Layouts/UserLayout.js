import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Footer from "../../components/footer/footer";

export default ({ children }) => (
  <>
    <Layout>
      <Content>
        <div className="page-content" />
      </Content>
      <Footer />
    </Layout>
    <Footer />
  </>
);