import React from 'react';
import "../style/LoginRegister.scss";
import {Link} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      invalidEmail: false,
      invalidPassword: false,
      success: false,
      authError: false
    }
  }

  validate = (e) => {
    e.preventDefault();

    let invalidEmail = false;
    let invalidPassword = false;

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

    if (invalidEmail || invalidPassword) {
      this.setState({
        invalidEmail,
        invalidPassword,
        success: false,
        authError: false
      });
    } else {
      this.setState({
          userEmail: "",
          userPassword: "",
          invalidEmail: false,
          invalidPassword: false,
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
              Zaloguj się
            </h1>
            {this.state.success &&
            <div className="success-message">
              Zalogowano!
            </div>}
            {this.state.authError &&
            <div className="error-message">
              Niepoprawne dane logowania!
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
              </div>
              <div className="loginRegister-form-buttons">
                <Link to={"/rejestracja"}>
                  Załóż konto
                </Link>
                <button type="submit" onClick={e => this.validate(e)}>
                  Zaloguj się
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
