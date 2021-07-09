import React from 'react';
import "../style/LoginRegister.scss";
import {Link} from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      userPasswordRepeat: "",
      invalidEmail: false,
      invalidPassword: false,
      invalidPasswordRepeat: false,
      tooShortPasswordRepeat: false,
      success: false,
      authError: false
    }
  }

  validate = (e) => {
    e.preventDefault();

    let invalidEmail = false;
    let invalidPassword = false;
    let invalidPasswordRepeat = false;
    let tooShortPasswordRepeat = false;

    // Email validation - used RFC 5322 Official Standard
    const trimmedEmail = this.state.userEmail.trim();
    const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regExEmail.test(trimmedEmail.toLowerCase())) {
      invalidEmail = true;
    }

    // Password validation
    if (this.state.userPassword.length < 6) {
      invalidPassword = true;
    }

    // Password repeat validation
    if (this.state.userPasswordRepeat !== this.state.userPassword) {
      invalidPasswordRepeat = true;
    }
    if (this.state.userPasswordRepeat.length < 6) {
      tooShortPasswordRepeat = true;
    }

    if (invalidEmail || invalidPassword || invalidPasswordRepeat || tooShortPasswordRepeat) {
      this.setState({
        invalidEmail,
        invalidPassword,
        invalidPasswordRepeat,
        tooShortPasswordRepeat,
        success: false,
        authError: false
      });
    } else {
      this.setState({
          userEmail: "",
          userPassword: "",
          userPasswordRepeat: "",
          invalidEmail: false,
          invalidPassword: false,
          invalidPasswordRepeat: false,
          tooShortPasswordRepeat: false,
          success: true
      });
    }
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="loginRegister-form-box">
            <h1>
              Załóż konto
            </h1>
            {this.state.success &&
            <div className="success-message">
              Konto założono pomyślnie!
            </div>}
            {this.state.authError &&
            <div className="error-message">
              Wystąpił błąd przy zakładaniu konta!
            </div>}
            <form noValidate>
              <div className="loginRegister-form-inputs">
                <div className="loginRegister-email">
                  <label htmlFor="input-email">
                    Email
                  </label>
                  <input id="input-email"
                         type="email"
                         className={this.state.invalidEmail ? "invalid-input" : null}
                         value={this.state.userEmail}
                         onChange={(e) => this.setState({userEmail: e.target.value.toString()})}/>
                  {this.state.invalidEmail &&
                  <div className="invalid-message">
                    Email jest nieprawidłowy!
                  </div>}
                </div>
                <div className="loginRegister-password">
                  <label htmlFor="input-password">
                    Hasło
                  </label>
                  <input id="input-password"
                         type="password"
                         className={this.state.invalidPassword ? "invalid-input" : null}
                         value={this.state.userPassword}
                         onChange={(e) => this.setState({userPassword: e.target.value.toString()})}/>
                  {this.state.invalidPassword &&
                  <div className="invalid-message">
                    Hasło jest za krótkie!
                  </div>}
                </div>
                <div className="loginRegister-password">
                  <label htmlFor="input-repeatPassword">
                    Powtórz hasło
                  </label>
                  <input id="input-repeatPassword"
                         type="password"
                         className={(this.state.invalidPasswordRepeat || this.state.tooShortPasswordRepeat) ?
                           "invalid-input" : null}
                         value={this.state.userPasswordRepeat}
                         onChange={(e) => this.setState({userPasswordRepeat: e.target.value.toString()})}/>
                  {this.state.invalidPasswordRepeat &&
                  <div className="invalid-message">
                    Hasła nie są takie same!
                  </div>}
                  {this.state.tooShortPasswordRepeat &&
                  <div className="invalid-message">
                    Hasło jest za krótkie!
                  </div>}
                </div>
              </div>
              <div className="loginRegister-form-buttons">
                <Link to={"/logowanie"}>
                  Zaloguj się
                </Link>
                <button type="submit" onClick={e => this.validate(e)}>
                  Załóż konto
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
