import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Footer from "../../components/footer/footer";
import SiteHeader from "../../components/Header/SiteHeader";

export default ({ children }) => (
  <>
    <Layout>
      <SiteHeader />
      <Content>
        <div className="page-content" />
      </Content>
      <Footer />
    </Layout>
    <Footer />
  </>
);
// const MainLayout = ({children, ...rest}) => {
//   return (
//     <div className="page page-dashboard">
//       <div className="sidebar">This is the Second Layout</div>
//       <div className="main">{children}</div>
//     </div>
//   )
// }

// const MainLayoutRoute = ({component: Component, ...rest}) => {
//   return (
//     <Route {...rest} render={matchProps => (
//       <MainLayout>
//           <Component {...matchProps} />
//       </MainLayout>
//     )} />
//   )
// };

// export default MainLayoutRoute;
