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
import {
  makeStyles,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import { connect } from "react-redux";
import { signup } from "../../apis/sessions";
import { style } from "@material-ui/system";
import Validator from "../../react-happy-validator/index";
import { withFormik } from "formik";
import * as Yup from "yup";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(2),
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",

      emailError: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state, () => {
      window.location("/dash");
    });
  };

  render() {
    const {
      classes,
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset
    } = this.props;

    const required = value => {
      if (!value.toString().trim().length) {
        return false;
      } else return false;
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
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="firstName"
                      label="نام"
                      type="firstName"
                      //onChange={this.changeHandler}
                      onChange={handleChange}
                      id="firstName"
                      helperText={touched.firstName ? errors.firstName : ""}
                      error={touched.firstName && Boolean(errors.firstName)}
                      onBlur={handleBlur}
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
                      helperText={touched.lastName ? errors.lastName : ""}
                      error={touched.lastName && Boolean(errors.lastName)}
                      //onChange={this.changeHandler}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      id="email"
                      label="ایمیل"
                      type="email"
                      //value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.email ? errors.email : ""}
                      error={touched.email && Boolean(errors.email)}
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
                      //onChange={this.changeHandler}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.password ? errors.password : ""}
                      error={touched.password && Boolean(errors.password)}
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
                      //onChange={this.changeHandler}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
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
                    <Link href="/login" variant="body2">
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

const Form = withFormik({
  mapPropsToValues: ({
    firstName,
    lastName,
    email,
    course,
    password,
    confirmPassword
  }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      course: course || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("نام الزامی می باشد !"),
    lastName: Yup.string().required("نام خانوادگی الزامی می باشد !"),
    email: Yup.string()
      .email("ایمیل نامعتبر می باشد !")
      .required("ایمیل الزامی می باشد !"),
    course: Yup.string().required("Select your course category"),
    password: Yup.string()
      .min(8, "کلمه عبور حداقل باید 8 کاراکتر باشد !")
      .required("کلمه عبور را وارد کنید !"),
    confirmPassword: Yup.string()
      .required("کلمه عبور را دوباره وارد کنید !")
      .oneOf([Yup.ref("password")], "کلمه عبور و تکرار آن با هم یکسان نیست !")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(SignUpPage);

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
)(withStyles(styles)(Form));
