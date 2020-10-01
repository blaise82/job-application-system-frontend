import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles/entry.module.css";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { loginAction, closeMessage } from "../redux/actions/loginAction";
import { LinearProgress } from "@material-ui/core";
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import SvgMap from "./SvgMap";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      emailErrorStatus: false,
      password: "",
      passwordError: "",
      passwordErrorStatus: false,
      open: false,
      errorMessage: "",
    };
  }
  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      emailErrorStatus: false,
      passwordError: "",
      passwordErrorStatus: false,
    };

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailErrorStatus = true;
      errors.emailError = "Requires valid email";
    }
    if (this.state.password.length < 1) {
      isError = true;
      errors.passwordErrorStatus = true;
      errors.passwordError = "Please provide a password";
    }
    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const error = this.validate();
    if (!error) {
      const send = {
        email: this.state.email,
        password: this.state.password,
      };
      await this.props.loginAction(send, this.props.history);
    }
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <SvgMap />
        <div className={styles.side}>
          <div className={styles.text_wrap}>
            <h1>BK</h1>
            <p>Bank of Kigali</p>
          </div>
        </div>
        <div className={styles.forms}>
          <div style={{ display: this.props.loginSate.loading }}>
            <LinearProgress />
          </div>
          <div className={styles.wrap}>
            <div className={styles.form_top_text}>
              <p className={styles.fs_title}>sign in</p>
              <p className={styles.fs_subtitle}>Fill in the form</p>
  
              <div className={styles.or_div}>
                <div className={styles.or_text}>or</div>
              </div>
            </div>
            <form
              className="form"
              onSubmit={(e) => this.onSubmit(e)}
              aria-label="form"
            >
              <TextField
                error={this.state.emailErrorStatus}
                className={styles.inputs}
                name="email"
                inputProps={{
                  "aria-label": "email",
                }}
                label="email"
                variant="outlined"
                helperText={this.state.emailError}
                value={this.state.email}
                onChange={(e) => this.change(e)}
              />
              <br/>
              <br/>
              <TextField
                error={this.state.passwordErrorStatus}
                className={styles.inputs}
                name="password"
                inputProps={{
                  "aria-label": "password",
                }}
                label="password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                helperText={this.state.passwordError}
                value={this.state.password}
                onChange={(e) => this.change(e)}
              />
              <Button
                type="submit"
                aria-label="submit"
                variant="contained"
                color="primary"
                style={{
                  float: "right",
                  marginTop: "10px",
                  textTransform: "capitalize",
                  width: "136px",
                }}
                disableElevation
              >
                sign in
              </Button>
            </form>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={this.props.loginSate.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{this.props.loginSate.error}</span>}
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={this.props.closeMessage}
            >
              <CloseIcon aria-label="Close" />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginSate: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (userInfo, history) =>
      dispatch(loginAction(userInfo, history)),
    closeMessage: () => dispatch(closeMessage()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
