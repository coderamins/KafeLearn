import React, { useState, Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset, ThemeProvider } from "@material-ui/styles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCookie } from "../../utils/cookies";
import { submitLogin } from "../../actions/authActions";
import { login } from "../../apis/sessions";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const styles = theme => ({
  "@global": {
    body: {
      //backgroundColor: theme.palette.common.white,
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  updateUser = e => {
    //console.log(e.target.value);
    this.setState({
      username: e.target.value
    });
  };

  updatePass = e => {
    //console.log(e.target.value);
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state, () => {
      window.location("/dash");
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs" dir="rtl">
        <CssBaseline />
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <div className={classes.paper} dir="rtl">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ورود به صفحه کاربری
              </Typography>
              <form noValidate onSubmit={e => this.handleSubmit(e)} className={classes.form}>
                <TextField
                  dir="rtl"
                  onChange={e => { this.updateUser(e); }}
                  //onChange={this.updateUser}
                  id="username"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="ایمیل"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="کلمه عبور"
                  type="password"
                  onChange={this.updatePass}
                  //updatePass={this.updatePass}
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="منو بخاطر بسپار"
                />
                <Button
                  //onClick={this.login.bind(this)}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  ورود
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      کلمه عبور را فراموش کردید؟
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"حساب کاربری ندارید ؟ عضو شوید"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </ThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

const theme = createMuiTheme({
  direction: "rtl" // Both here and <body dir="rtl">
});
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
    session: state.session,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (userData, cb) => {
      dispatch(login(userData, cb));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginPage));

//export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
