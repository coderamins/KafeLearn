import { loginSuccess, loginError } from "../actions/sessions";
import axios from "axios";
import { registerSuccess, registerError } from "../actions/register";
import { parseJSON } from "./utils";
import { API } from "./CONFIG";

export function login(userData, cb) {
  console.log(userData);
  return dispatch =>
    fetch(API.BASE + "/oauth2/token", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: `grant_type=password&=username=${userData.username}&password=${userData.password}`
    })
      .then(response => {
        //console.log(response);
        //debugger;
        if (response.ok) {
          const object = Object.assign(userData, {
            isLoggedIn: parseJSON(response)
          });
          dispatch(loginSuccess(object));
          cb();
          //console.log('ran callback function');
        }
      })
      .catch(error => {
        alert(error);
        console.log("request failed", error);
        dispatch(loginError(error));
      });
}

export function signup(userData) {
  //alert(userData.username);
  return dispatch =>
    fetch(API.BASE + "/api/user/register", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `FirstName='${userData.firstName}'
            &LastName='${userData.lastName}'
            &Email='${userData.Email}'
            &Password='${userData.password}'`
      //body: JSON.stringify({
      //  FirstName: "amir",
      //  secondParam: "yourOtherValue"
      //})
    })
      .then(response => {
        alert(response.status);
        console.log(response);
        if (response.status >= 200 && response.status < 300 && response.ok) {
          //dispatch(registerSuccess(userData));
          alert(
            "ایمیلی برای شما به آدرس " +
              userData.Email +
              " فرستاده شد. برای ورود روی لینک " +
              "فعال سازی کلیک کنید یا کد فعال سازی را در فرم زیر وارد کنید. ویرایش ایمیل"
          );
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          dispatch(loginError(error));
          throw error;
        }
      })
      .catch(error => {
        console.log("request failed", error);
      });
}
