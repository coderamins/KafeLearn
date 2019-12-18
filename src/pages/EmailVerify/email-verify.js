import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import SendOutlined from "@material-ui/icons/SendOutlined";
import NativeSelect from "@material-ui/core/NativeSelect";

import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: "rtl" // Both here and <body dir="rtl">
});

const subjects = [
  {
    value: "1",
    label: "پیشنهاد"
  },
  {
    value: "2",
    label: "انتقاد"
  },
  {
    value: "3",
    label: "سایر"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  inprow: {
    marginTop: theme.spacing(1)
  },
  mycard:{
      padding:theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(1),
    right: "right",
    position: "relative"
  }
}));

export default function EmailVerify() {
  const classes = useStyles();

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className={classes.root} dir="rtl">
          <Grid
            container
            className={classes.mycard}
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "30vh" }}
          >
            <Grid item xs={5}>
              <Paper className={classes.paper}>
                <FormControl fullWidth className={classes.margin}>
                  <span>
                    ایمیلی برای شما به آدرس {this.props.useremail} فرستاده شد. برای
                    ورود روی لینک فعال سازی کلیک کنید یا کد فعال سازی را در فرم
                    زیر وارد کنید.
                  </span>

                  <TextField
                    label="کد فعال سازی"
                    id="outlined-margin-dense"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    alignItems="center"
                    justify="center"
                  />
                </FormControl>

                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  className={classes.inprow}
                >
                  <Button fullWidth="true" variant="contained" color="primary">
                    تایید و ورود به سایت
                  </Button>
                </Grid>

                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  className={classes.inprow}
                >
                  <Button
                    fullWidth="true"
                    variant="contained"
                    color="secondary"
                  >
                    ارسال مجدد ایمیل فعال سازی
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}></Grid>
          <div className="clearfix" />
        </div>
      </ThemeProvider>
      <div className="clearfix" />
    </StylesProvider>
  );
}
