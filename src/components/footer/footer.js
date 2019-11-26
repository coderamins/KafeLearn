import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardTitle
} from "react-mdl";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small teal pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="top-footer">
            <Grid className="demo-grid-3">
              <Cell col={3} tablet={3}>
                <ul className="footer-menu">
                  <li>
                    <a href="/">آخرین دوره ها</a>
                  </li>
                  <li>
                    <a href="/">مدرسین کافه کد</a>
                  </li>
                  <li>
                    <a href="/">تماس با ما</a>
                  </li>
                  <li>
                    <a href="/">درباره ما</a>
                  </li>
                </ul>
              </Cell>
              <Cell col={3} tablet={3}>
                <a href="/">همکاری با کافه کد</a>
              </Cell>
              <Cell col={3} tablet={3} />
              <Cell col={3} tablet={3} />
            </Grid>
          </div>
        </div>

        <div className="bottom-footer">
          تمامی حقوق ان سایت محفوظ و مربوط به لرن لند می باشد و هرگونه کپی
          برداری و انتشار غیر مجاز پیگرد قانونی دارد .
        </div>
      </footer>
    );
  }
}

export default Footer;
