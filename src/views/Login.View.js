import React, { Component } from "react";
import Styles from "../styles/entry.module.css";

import LoginForm from "../components/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <LoginForm />
      </div>
    );
  }
}
