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
import EmailOutlined from "@material-ui/icons/EmailOutlined";
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
    right: "right",
    position: "relative"
  }
}));

export default function Contact() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "نام و نام خانوادگی",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className={classes.root} dir="rtl">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <FormControl fullWidth className={classes.margin}>
                  <TextField
                    dir="rtl"
                    id="outlined-name"
                    label="نام و نام خانوادگی"
                    className={classes.textField}
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    dir="rtl"
                    id="outlined-name"
                    label="ایمیل"
                    className={classes.textField}
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlined />
                        </InputAdornment>
                      )
                    }}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="پیام شما"
                    multiline
                    rowsMax="4"
                    onChange={handleChange("multiline")}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />

                  <TextField
                    id="outlined-select-currency"
                    select
                    label="موضوع پیام"
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange("currency")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    helperText=""
                    margin="normal"
                    variant="outlined"
                  >
                    {subjects.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>

                <div style={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    <SendOutlined />
                    ارسال
                  </Button>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={5}>
              <img
                style={{ width: "100%" }}
                src="https://cdn.slidemodel.com/wp-content/uploads/FF0215-01-free-web-developer-icons-for-powerpoint-16x9-5.jpg"
              />
            </Grid>
          </Grid>
          <div className="clearfix" />
        </div>
      </ThemeProvider>
      <div className="clearfix" />
    </StylesProvider>
  );
}
