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
import Container from "@material-ui/core/Container";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset, ThemeProvider } from "@material-ui/styles";
import { makeStyles, createMuiTheme, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { signup } from "../../apis/sessions";
import { style } from "@material-ui/system";
import * as Yup from "yup";
import Validator from '../../react-happy-validator/index';

const styles = theme => ({
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: false,
      firstName: "fds",
      lastName: "gfdg",
      Email: "ads",
      password: "sss",
      confirmpassword: "sss",

      emailError: ""
    };

    this.validator = new Validator(this, {
      rules: {
        name: { required: true, maxLength: 15, errorState: "nameError" },
        age: {
          required: true,
          integer: true,
          min: 18,
          max: 65,
          errorState: "ageError"
        },
        contact: {
          or: {
            phone: true,
            email: true
          },
          errorState: "contactError"
        }
      },
      messages: {
        contact: {
          or: "You have enter email or phone"
        }
      }
    });
  }

  v_email = e => {
    this.setState({
      emailError: !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.Email
      )
        ? "ایمیل وارد شده نامعتبر می باشد !"
        : this.state.Email.length > 3
        ? null
        : "Email must be longer than 3 characters"
    });
    this.setState({ Email: e.target.value });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state, () => {
      window.location("/dash");
    });
  };

  validateEmail = e => {
    const email = e.target.value;
    if (!email) {
      //|| invalidEmail(email)) {
      this.setState({
        validEmail: true
      });
    } else {
      this.setState({
        validEmail: false
      });
    }
  };

  render() {
    const {
      classes,
      validEmail,
      errors,
      touched,
      handleChange,
      isValid,
      setFieldTouched
    } = this.props;

    const required = value => {
      if (!value.toString().trim().length) {
        return false;
      } else return false;
    };

    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ثبت نام
              </Typography>
              <form
                onSubmit={e => this.handleSubmit(e)}
                className={classes.form}
                noValidate
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={this.state.firstName === ""}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="firstName"
                      label="نام"
                      type="firstName"
                      onChange={this.changeHandler}
                      id="firstName"
                      helperText={
                        this.state.firstName === ""
                          ? "نام الزامی می باشد !"
                          : " "
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="lastName"
                      label="نام خانوادگی"
                      name="lastName"
                      //autoComplete="lname"
                      error={this.state.lastName === ""}
                      helperText={
                        this.state.lastName === ""
                          ? "نام خانوادگی الزامی می باشد !"
                          : " "
                      }
                      onChange={this.changeHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="Email"
                      label="ایمیل"
                      name="Email"
                      //autoComplete="Email"
                      error={this.state.Email === ""}
                      helperText={
                        this.state.Email === ""
                          ? "ایمیل الزامی می باشد !"
                          : " "
                      }
                      onChange={this.changeHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="کلمه عبور"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      //onChange={e => { this.changePassword(e); }}
                      onChange={this.changeHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="confirmpassword"
                      label="تکرار کلمه عبور"
                      type="password"
                      id="confirmpassword"
                      //onChange={e => { this.changeConfirmPassword(e); }}
                      onChange={this.changeHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="میخواهم در خبرنامه کافه لرن عضو بشم"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  //onClick={(event) => this.handleSubmit(event)}
                >
                  ثبت نام
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      قبلا ثبت نام کرده اید ؟ وارد شوید
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
    onSubmit: (userData, cb) => {
      dispatch(signup(userData, cb));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUpPage));
